#!/usr/bin/env node

// src/index.ts
import { Command as Command3 } from "commander";

// src/commands/add.ts
import { Command } from "commander";
import fs4 from "fs-extra";
import path4 from "path";
import chalk from "chalk";
import ora from "ora";

// src/utils/registry.ts
import fs from "fs-extra";
import path from "path";
var REGISTRY_URL = "https://raw.githubusercontent.com/xizot/share-ui/main/registry/index.json";
var registryCache = null;
async function getRegistry() {
  if (registryCache) {
    return registryCache;
  }
  try {
    const localPath = path.resolve(process.cwd(), "registry/index.json");
    if (await fs.pathExists(localPath)) {
      registryCache = await fs.readJSON(localPath);
      return registryCache;
    }
    const response = await fetch(REGISTRY_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch registry: ${response.statusText}`);
    }
    registryCache = await response.json();
    return registryCache;
  } catch (error) {
    throw new Error(`Failed to load registry: ${error}`);
  }
}
function resolveTree(registry, components) {
  const resolved = /* @__PURE__ */ new Map();
  const queue = [...components];
  while (queue.length > 0) {
    const name = queue.shift();
    if (resolved.has(name)) {
      continue;
    }
    const entry = registry.find((e) => e.name === name);
    if (!entry) {
      throw new Error(`Component not found: ${name}`);
    }
    resolved.set(name, entry);
    if (entry.registryDependencies) {
      queue.push(...entry.registryDependencies);
    }
  }
  return Array.from(resolved.values());
}

// src/utils/package-manager.ts
import fs2 from "fs-extra";
import path2 from "path";
import { execa } from "execa";
async function detectPackageManager(cwd) {
  if (await fs2.pathExists(path2.join(cwd, "bun.lockb"))) {
    return "bun";
  }
  if (await fs2.pathExists(path2.join(cwd, "pnpm-lock.yaml"))) {
    return "pnpm";
  }
  if (await fs2.pathExists(path2.join(cwd, "yarn.lock"))) {
    return "yarn";
  }
  if (await fs2.pathExists(path2.join(cwd, "package-lock.json"))) {
    return "npm";
  }
  return "npm";
}
async function installDependencies(dependencies, packageManager, cwd) {
  const commands = {
    npm: ["npm", ["install", ...dependencies]],
    yarn: ["yarn", ["add", ...dependencies]],
    pnpm: ["pnpm", ["add", ...dependencies]],
    bun: ["bun", ["add", ...dependencies]]
  };
  const [command, args] = commands[packageManager];
  await execa(command, args, { cwd });
}

// src/utils/config.ts
import fs3 from "fs-extra";
import path3 from "path";
var CONFIG_FILE = "shared-ui.json";
async function getProjectConfig(cwd) {
  const configPath = path3.join(cwd, CONFIG_FILE);
  if (!await fs3.pathExists(configPath)) {
    return null;
  }
  return fs3.readJSON(configPath);
}

// src/commands/add.ts
var addCommand = new Command().name("add").description("Add components to your project").argument("[components...]", "components to add").option("-y, --yes", "skip confirmation prompt").option("-o, --overwrite", "overwrite existing files").option("-a, --all", "add all available components").option("-p, --path <path>", "custom path for components").action(async (components, options) => {
  try {
    const spinner = ora("Loading configuration...").start();
    const config = await getProjectConfig(process.cwd());
    if (!config) {
      spinner.fail("Could not find project configuration");
      console.log(
        chalk.yellow(
          "\nRun `npx shared-ui init` to initialize the project first."
        )
      );
      process.exit(1);
    }
    const registry = await getRegistry();
    spinner.succeed("Configuration loaded");
    let componentsToInstall;
    if (options.all) {
      componentsToInstall = registry.map((entry) => entry.name);
    } else if (components.length === 0) {
      spinner.fail("No components specified");
      console.log(
        chalk.yellow(
          "\nUsage: npx shared-ui add <component-name> [<component-name>...]"
        )
      );
      console.log(
        chalk.yellow("Or use --all flag to install all components")
      );
      process.exit(1);
    } else {
      componentsToInstall = components;
    }
    const invalidComponents = componentsToInstall.filter(
      (name) => !registry.find((entry) => entry.name === name)
    );
    if (invalidComponents.length > 0) {
      spinner.fail("Invalid components");
      console.log(
        chalk.red("\nThe following components could not be found:")
      );
      invalidComponents.forEach((name) => console.log(chalk.red(`  - ${name}`)));
      console.log(chalk.yellow("\nAvailable components:"));
      registry.filter((entry) => entry.type === "registry:ui").forEach((entry) => console.log(chalk.gray(`  - ${entry.name}`)));
      process.exit(1);
    }
    spinner.start("Resolving dependencies...");
    const tree = resolveTree(registry, componentsToInstall);
    spinner.succeed(
      `Resolved ${tree.length} component${tree.length > 1 ? "s" : ""}`
    );
    console.log(chalk.cyan("\nComponents to install:"));
    tree.forEach((entry) => {
      const icon = entry.type === "registry:ui" ? "\u{1F4E6}" : entry.type === "registry:lib" ? "\u{1F527}" : entry.type === "registry:hook" ? "\u{1FA9D}" : "\u{1F4DD}";
      console.log(`  ${icon} ${entry.name}`);
    });
    const allDependencies = /* @__PURE__ */ new Set();
    tree.forEach((entry) => {
      entry.dependencies?.forEach((dep) => allDependencies.add(dep));
    });
    if (allDependencies.size > 0) {
      console.log(chalk.cyan("\nPackage dependencies:"));
      Array.from(allDependencies).forEach(
        (dep) => console.log(chalk.gray(`  - ${dep}`))
      );
    }
    if (!options.yes) {
      const prompts2 = await import("prompts");
      const { confirm } = await prompts2.default({
        type: "confirm",
        name: "confirm",
        message: "Proceed with installation?",
        initial: true
      });
      if (!confirm) {
        console.log(chalk.yellow("Installation cancelled"));
        process.exit(0);
      }
    }
    spinner.start("Installing components...");
    const targetDir = options.path || config.componentsPath;
    const targetPath = path4.resolve(process.cwd(), targetDir);
    await fs4.ensureDir(targetPath);
    let installedCount = 0;
    let skippedCount = 0;
    for (const entry of tree) {
      for (const file of entry.files) {
        const filePath = path4.join(targetPath, file.path);
        const fileExists = await fs4.pathExists(filePath);
        if (fileExists && !options.overwrite) {
          skippedCount++;
          continue;
        }
        await fs4.ensureDir(path4.dirname(filePath));
        await fs4.writeFile(filePath, file.content || "");
        installedCount++;
      }
    }
    spinner.succeed(
      `Installed ${installedCount} file${installedCount > 1 ? "s" : ""}`
    );
    if (skippedCount > 0) {
      console.log(
        chalk.yellow(
          `
Skipped ${skippedCount} existing file${skippedCount > 1 ? "s" : ""}. Use --overwrite to replace them.`
        )
      );
    }
    if (allDependencies.size > 0) {
      spinner.start("Installing package dependencies...");
      const packageManager = await detectPackageManager(process.cwd());
      try {
        await installDependencies(
          Array.from(allDependencies),
          packageManager,
          process.cwd()
        );
        spinner.succeed("Package dependencies installed");
      } catch (error) {
        spinner.warn("Failed to install some package dependencies");
        console.log(
          chalk.yellow(
            "\nYou may need to install the following packages manually:"
          )
        );
        Array.from(allDependencies).forEach(
          (dep) => console.log(chalk.gray(`  ${packageManager} add ${dep}`))
        );
      }
    }
    console.log(chalk.green("\n\u2713 Successfully added components!"));
  } catch (error) {
    console.error(chalk.red("\nError:"), error);
    process.exit(1);
  }
});

// src/commands/init.ts
import { Command as Command2 } from "commander";
import fs5 from "fs-extra";
import path5 from "path";
import chalk2 from "chalk";
import ora2 from "ora";
import prompts from "prompts";
var CONFIG_FILE2 = "shared-ui.json";
var initCommand = new Command2().name("init").description("Initialize shared-ui in your project").option("-y, --yes", "use default configuration").action(async (options) => {
  try {
    const spinner = ora2("Initializing shared-ui...").start();
    const cwd = process.cwd();
    const configPath = path5.join(cwd, CONFIG_FILE2);
    if (await fs5.pathExists(configPath)) {
      spinner.warn("shared-ui is already initialized");
      const { overwrite } = await prompts({
        type: "confirm",
        name: "overwrite",
        message: "Overwrite existing configuration?",
        initial: false
      });
      if (!overwrite) {
        console.log(chalk2.yellow("Initialization cancelled"));
        process.exit(0);
      }
    }
    spinner.stop();
    let config;
    if (options.yes) {
      config = {
        componentsPath: "src/components/ui/shared-ui",
        aliases: {
          components: "@/components",
          lib: "@/lib",
          hooks: "@/hooks",
          constants: "@/constants"
        }
      };
    } else {
      const responses = await prompts([
        {
          type: "text",
          name: "componentsPath",
          message: "Where would you like to install components?",
          initial: "src/components/ui/shared-ui"
        },
        {
          type: "text",
          name: "componentAlias",
          message: "Path alias for components:",
          initial: "@/components"
        },
        {
          type: "text",
          name: "libAlias",
          message: "Path alias for lib utilities:",
          initial: "@/lib"
        },
        {
          type: "text",
          name: "hooksAlias",
          message: "Path alias for hooks:",
          initial: "@/hooks"
        },
        {
          type: "text",
          name: "constantsAlias",
          message: "Path alias for constants:",
          initial: "@/constants"
        }
      ]);
      config = {
        componentsPath: responses.componentsPath,
        aliases: {
          components: responses.componentAlias,
          lib: responses.libAlias,
          hooks: responses.hooksAlias,
          constants: responses.constantsAlias
        }
      };
    }
    spinner.start("Saving configuration...");
    await fs5.writeJSON(configPath, config, { spaces: 2 });
    spinner.succeed("Configuration saved");
    spinner.start("Creating directory structure...");
    const basePath = path5.resolve(cwd, config.componentsPath);
    await fs5.ensureDir(path5.join(basePath, "ui"));
    await fs5.ensureDir(path5.join(basePath, "../../../lib"));
    await fs5.ensureDir(path5.join(basePath, "../../../hooks"));
    await fs5.ensureDir(path5.join(basePath, "../../../constants"));
    spinner.succeed("Directory structure created");
    console.log(chalk2.green("\n\u2713 Successfully initialized shared-ui!"));
    console.log(chalk2.cyan("\nNext steps:"));
    console.log(chalk2.gray("  1. Add components:"));
    console.log(chalk2.gray("     npx shared-ui add button input"));
    console.log(chalk2.gray("  2. Import in your code:"));
    console.log(
      chalk2.gray(
        `     import { Button } from '${config.aliases.components}/ui/shared-ui/button'`
      )
    );
  } catch (error) {
    console.error(chalk2.red("\nError:"), error);
    process.exit(1);
  }
});

// src/index.ts
var program = new Command3();
program.name("shared-ui").description("CLI tool for adding shared-ui components to your project").version("1.0.0");
program.addCommand(addCommand);
program.addCommand(initCommand);
program.parse();
