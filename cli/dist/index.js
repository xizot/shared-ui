#!/usr/bin/env node

// src/index.ts
import { Command as Command3 } from "commander";

// src/commands/add.ts
import chalk from "chalk";
import { Command } from "commander";
import fs4 from "fs-extra";
import ora from "ora";
import path4 from "path";
import prompts from "prompts";

// src/utils/config.ts
import fs from "fs-extra";
import path from "path";
var CONFIG_FILE = "shared-ui.json";
async function getProjectConfig(cwd) {
  const configPath = path.join(cwd, CONFIG_FILE);
  if (!await fs.pathExists(configPath)) {
    return null;
  }
  const config = await fs.readJSON(configPath);
  if (!config.aliases?.ui && config.componentsPath) {
    return {
      style: "default",
      tailwind: {
        config: "tailwind.config.js",
        css: "src/index.css"
      },
      aliases: {
        components: config.aliases?.components || "@/components",
        ui: "@/components/ui",
        lib: config.aliases?.lib || "@/lib",
        hooks: config.aliases?.hooks || "@/hooks",
        constants: config.aliases?.constants || "@/constants"
      }
    };
  }
  return config;
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

// src/utils/registry.ts
import fs3 from "fs-extra";
import path3 from "path";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path3.dirname(__filename);
var registryCache = null;
async function getRegistry() {
  if (registryCache) {
    return registryCache;
  }
  try {
    const localRegistryPath = path3.resolve(__dirname, "../../../registry/index.json");
    if (await fs3.pathExists(localRegistryPath)) {
      registryCache = await fs3.readJSON(localRegistryPath);
      return registryCache;
    }
    const packageRegistryPath = path3.resolve(__dirname, "../../registry/index.json");
    if (await fs3.pathExists(packageRegistryPath)) {
      registryCache = await fs3.readJSON(packageRegistryPath);
      return registryCache;
    }
    const cwdRegistryPath = path3.resolve(process.cwd(), "registry/index.json");
    if (await fs3.pathExists(cwdRegistryPath)) {
      registryCache = await fs3.readJSON(cwdRegistryPath);
      return registryCache;
    }
    throw new Error(
      "Could not find component registry. Make sure the package is installed correctly."
    );
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

// src/commands/add.ts
var addCommand = new Command().name("add").description("Add components to your project").argument("[components...]", "components to add").option("-y, --yes", "skip confirmation prompt").option("-o, --overwrite", "overwrite existing files").option("-a, --all", "add all available components").option("-c, --cwd <path>", "the working directory (default: current directory)").action(async (components, options) => {
  try {
    const cwd = options.cwd ? path4.resolve(options.cwd) : process.cwd();
    const spinner = ora("Loading configuration...").start();
    const config = await getProjectConfig(cwd);
    if (!config) {
      spinner.fail("Could not find shared-ui.json configuration");
      console.log(
        chalk.yellow("\nRun `npx @xizot/shared-ui init` to initialize the project first.")
      );
      process.exit(1);
    }
    const registry = await getRegistry();
    spinner.succeed("Configuration loaded");
    if (!options.all && components.length === 0) {
      console.log(chalk.cyan("\n\u{1F4E6} Available components:\n"));
      const uiComponents = registry.filter(
        (e) => e.type === "registry:ui" && !e.name.startsWith("rhf-")
      );
      const rhfComponents = registry.filter((e) => e.name.startsWith("rhf-"));
      const libUtils = registry.filter((e) => e.type === "registry:lib");
      const hooks = registry.filter((e) => e.type === "registry:hook");
      const constants = registry.filter((e) => e.type === "registry:constant");
      if (uiComponents.length > 0) {
        console.log(chalk.white("  UI Components:"));
        uiComponents.forEach((e) => console.log(chalk.gray(`    - ${e.name}`)));
      }
      if (rhfComponents.length > 0) {
        console.log(chalk.white("\n  React Hook Form Components:"));
        rhfComponents.forEach((e) => console.log(chalk.gray(`    - ${e.name}`)));
      }
      if (libUtils.length > 0) {
        console.log(chalk.white("\n  Lib Utilities:"));
        libUtils.forEach((e) => console.log(chalk.gray(`    - ${e.name}`)));
      }
      if (hooks.length > 0) {
        console.log(chalk.white("\n  Hooks:"));
        hooks.forEach((e) => console.log(chalk.gray(`    - ${e.name}`)));
      }
      if (constants.length > 0) {
        console.log(chalk.white("\n  Constants:"));
        constants.forEach((e) => console.log(chalk.gray(`    - ${e.name}`)));
      }
      console.log(chalk.cyan("\nUsage:"));
      console.log(chalk.gray("  npx @xizot/shared-ui add <component-name>"));
      console.log(chalk.gray("  npx @xizot/shared-ui add button input card"));
      console.log(chalk.gray("  npx @xizot/shared-ui add --all"));
      process.exit(0);
    }
    let componentsToInstall;
    if (options.all) {
      componentsToInstall = registry.map((entry) => entry.name);
    } else {
      componentsToInstall = components;
    }
    const invalidComponents = componentsToInstall.filter(
      (name) => !registry.find((entry) => entry.name === name)
    );
    if (invalidComponents.length > 0) {
      console.log(chalk.red("\n\u274C The following components could not be found:"));
      invalidComponents.forEach((name) => console.log(chalk.red(`  - ${name}`)));
      console.log(chalk.yellow("\nUse `npx @xizot/shared-ui add` to see available components."));
      process.exit(1);
    }
    spinner.start("Resolving dependencies...");
    const tree = resolveTree(registry, componentsToInstall);
    spinner.succeed(`Resolved ${tree.length} item${tree.length > 1 ? "s" : ""}`);
    console.log(chalk.cyan("\n\u{1F4E6} Components to install:\n"));
    tree.forEach((entry) => {
      const icon = entry.type === "registry:ui" ? "\u{1F3A8}" : entry.type === "registry:lib" ? "\u{1F527}" : entry.type === "registry:hook" ? "\u{1FA9D}" : "\u{1F4DD}";
      console.log(`  ${icon} ${entry.name}`);
    });
    const allDependencies = /* @__PURE__ */ new Set();
    tree.forEach((entry) => {
      entry.dependencies?.forEach((dep) => allDependencies.add(dep));
    });
    if (allDependencies.size > 0) {
      console.log(chalk.cyan("\n\u{1F4E6} Package dependencies:\n"));
      Array.from(allDependencies).forEach((dep) => console.log(chalk.gray(`  - ${dep}`)));
    }
    if (!options.yes) {
      console.log();
      const { confirm } = await prompts({
        type: "confirm",
        name: "confirm",
        message: "Proceed with installation?",
        initial: true
      });
      if (!confirm) {
        console.log(chalk.gray("Installation cancelled"));
        process.exit(0);
      }
    }
    spinner.start("Installing components...");
    const aliasToPath = (alias) => {
      return alias.replace(/^@\//, "src/");
    };
    let installedCount = 0;
    let skippedCount = 0;
    for (const entry of tree) {
      for (const file of entry.files) {
        let targetDir;
        if (file.path.startsWith("ui/")) {
          targetDir = aliasToPath(config.aliases.ui);
        } else if (file.path.startsWith("rhf/")) {
          targetDir = path4.join(aliasToPath(config.aliases.components), "rhf");
        } else if (file.path.startsWith("lib/")) {
          targetDir = aliasToPath(config.aliases.lib);
        } else if (file.path.startsWith("hooks/")) {
          targetDir = aliasToPath(config.aliases.hooks);
        } else if (file.path.startsWith("constants/")) {
          targetDir = aliasToPath(config.aliases.constants);
        } else {
          targetDir = aliasToPath(config.aliases.ui);
        }
        const relativePath = file.path.replace(/^(ui|rhf|lib|hooks|constants)\//, "");
        const filePath = path4.join(cwd, targetDir, relativePath);
        const fileExists = await fs4.pathExists(filePath);
        if (fileExists && !options.overwrite) {
          skippedCount++;
          continue;
        }
        await fs4.ensureDir(path4.dirname(filePath));
        let content = file.content || "";
        content = transformImports(content, config);
        await fs4.writeFile(filePath, content);
        installedCount++;
      }
    }
    spinner.succeed(`Installed ${installedCount} file${installedCount > 1 ? "s" : ""}`);
    if (skippedCount > 0) {
      console.log(
        chalk.yellow(
          `
\u26A0\uFE0F  Skipped ${skippedCount} existing file${skippedCount > 1 ? "s" : ""}. Use --overwrite to replace them.`
        )
      );
    }
    if (allDependencies.size > 0) {
      spinner.start("Installing package dependencies...");
      const packageManager = await detectPackageManager(cwd);
      try {
        await installDependencies(Array.from(allDependencies), packageManager, cwd);
        spinner.succeed(`Package dependencies installed with ${packageManager}`);
      } catch (error) {
        spinner.warn("Failed to install some package dependencies");
        console.log(chalk.yellow("\nYou may need to install the following packages manually:"));
        Array.from(allDependencies).forEach(
          (dep) => console.log(chalk.gray(`  ${packageManager} add ${dep}`))
        );
      }
    }
    console.log(chalk.green("\n\u2705 Successfully added components!"));
    const uiEntries = tree.filter((e) => e.type === "registry:ui" && !e.name.startsWith("rhf-"));
    if (uiEntries.length > 0) {
      console.log(chalk.cyan("\n\u{1F4DD} Import examples:\n"));
      uiEntries.slice(0, 3).forEach((entry) => {
        const componentName = entry.name.split("-").map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join("");
        console.log(
          chalk.gray(`  import { ${componentName} } from '${config.aliases.ui}/${entry.name}'`)
        );
      });
    }
    console.log();
  } catch (error) {
    console.error(chalk.red("\n\u274C Error:"), error);
    process.exit(1);
  }
});
function transformImports(content, config) {
  content = content.replace(/@\/components\/ui\//g, `${config.aliases.ui}/`.replace(/\/\//g, "/"));
  content = content.replace(
    /@\/components\/rhf\//g,
    `${config.aliases.components}/rhf/`.replace(/\/\//g, "/")
  );
  content = content.replace(/@\/lib\//g, `${config.aliases.lib}/`.replace(/\/\//g, "/"));
  content = content.replace(/@\/hooks\//g, `${config.aliases.hooks}/`.replace(/\/\//g, "/"));
  content = content.replace(
    /@\/constants\//g,
    `${config.aliases.constants}/`.replace(/\/\//g, "/")
  );
  return content;
}

// src/commands/init.ts
import chalk2 from "chalk";
import { Command as Command2 } from "commander";
import fs5 from "fs-extra";
import ora2 from "ora";
import path5 from "path";
import prompts2 from "prompts";
var CONFIG_FILE2 = "shared-ui.json";
var BASE_DEPENDENCIES = [
  "tailwindcss",
  "tailwind-merge",
  "clsx",
  "class-variance-authority",
  "lucide-react",
  "@radix-ui/react-slot"
];
var initCommand = new Command2().name("init").description("Initialize shared-ui in your project").option("-y, --yes", "use default configuration").option("-d, --defaults", "use default values and skip prompts").option("--skip-deps", "skip installing dependencies").action(async (options) => {
  try {
    console.log(chalk2.cyan("\n\u{1F680} Welcome to shared-ui!\n"));
    const cwd = process.cwd();
    const configPath = path5.join(cwd, CONFIG_FILE2);
    if (await fs5.pathExists(configPath)) {
      const { overwrite } = await prompts2({
        type: "confirm",
        name: "overwrite",
        message: chalk2.yellow("shared-ui is already initialized. Overwrite?"),
        initial: false
      });
      if (!overwrite) {
        console.log(chalk2.gray("Initialization cancelled"));
        process.exit(0);
      }
    }
    let config;
    if (options.yes || options.defaults) {
      config = {
        $schema: "https://shared-ui.xizot.dev/schema.json",
        style: "default",
        tailwind: {
          config: "tailwind.config.js",
          css: "src/index.css"
        },
        aliases: {
          components: "@/components",
          ui: "@/components/ui",
          lib: "@/lib",
          hooks: "@/hooks",
          constants: "@/constants"
        }
      };
    } else {
      const responses = await prompts2([
        {
          type: "select",
          name: "style",
          message: "Which style would you like to use?",
          choices: [
            { title: "Default", value: "default" },
            { title: "New York", value: "new-york" }
          ],
          initial: 0
        },
        {
          type: "text",
          name: "tailwindConfig",
          message: "Where is your tailwind.config file?",
          initial: "tailwind.config.js"
        },
        {
          type: "text",
          name: "globalCss",
          message: "Where is your global CSS file?",
          initial: "src/index.css"
        },
        {
          type: "text",
          name: "componentsAlias",
          message: "Configure the import alias for components:",
          initial: "@/components"
        },
        {
          type: "text",
          name: "uiAlias",
          message: "Configure the import alias for ui:",
          initial: "@/components/ui"
        },
        {
          type: "text",
          name: "libAlias",
          message: "Configure the import alias for lib:",
          initial: "@/lib"
        },
        {
          type: "text",
          name: "hooksAlias",
          message: "Configure the import alias for hooks:",
          initial: "@/hooks"
        },
        {
          type: "text",
          name: "constantsAlias",
          message: "Configure the import alias for constants:",
          initial: "@/constants"
        }
      ]);
      if (!responses.style) {
        console.log(chalk2.gray("\nInitialization cancelled"));
        process.exit(0);
      }
      config = {
        $schema: "https://shared-ui.xizot.dev/schema.json",
        style: responses.style,
        tailwind: {
          config: responses.tailwindConfig,
          css: responses.globalCss
        },
        aliases: {
          components: responses.componentsAlias,
          ui: responses.uiAlias,
          lib: responses.libAlias,
          hooks: responses.hooksAlias,
          constants: responses.constantsAlias
        }
      };
    }
    const spinner = ora2("Initializing shared-ui...").start();
    spinner.text = "Saving configuration...";
    await fs5.writeJSON(configPath, config, { spaces: 2 });
    spinner.succeed("Configuration saved");
    spinner.start("Creating directory structure...");
    const aliasToPath = (alias) => {
      return alias.replace(/^@\//, "src/");
    };
    const directories = [
      aliasToPath(config.aliases.ui),
      aliasToPath(config.aliases.lib),
      aliasToPath(config.aliases.hooks),
      aliasToPath(config.aliases.constants)
    ];
    for (const dir of directories) {
      await fs5.ensureDir(path5.join(cwd, dir));
    }
    spinner.succeed("Directory structure created");
    const libPath = aliasToPath(config.aliases.lib);
    const utilsPath = path5.join(cwd, libPath, "utils.ts");
    if (!await fs5.pathExists(utilsPath)) {
      spinner.start("Creating utility files...");
      const utilsContent = `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`;
      await fs5.writeFile(utilsPath, utilsContent);
      spinner.succeed("Utility files created");
    }
    if (!options.skipDeps) {
      spinner.start("Installing dependencies...");
      const packageManager = await detectPackageManager(cwd);
      try {
        await installDependencies(BASE_DEPENDENCIES, packageManager, cwd);
        spinner.succeed(`Dependencies installed with ${packageManager}`);
      } catch (error) {
        spinner.warn("Failed to install some dependencies");
        console.log(chalk2.yellow("\nYou may need to install these packages manually:"));
        BASE_DEPENDENCIES.forEach(
          (dep) => console.log(chalk2.gray(`  ${packageManager} add ${dep}`))
        );
      }
    }
    console.log(chalk2.green("\n\u2705 Successfully initialized shared-ui!\n"));
    console.log(chalk2.cyan("Project structure:"));
    console.log(chalk2.gray(`  ${aliasToPath(config.aliases.ui)}/     \u2192 UI components`));
    console.log(chalk2.gray(`  ${aliasToPath(config.aliases.lib)}/    \u2192 Utility functions`));
    console.log(chalk2.gray(`  ${aliasToPath(config.aliases.hooks)}/  \u2192 Custom hooks`));
    console.log(chalk2.gray(`  ${aliasToPath(config.aliases.constants)}/ \u2192 Constants`));
    console.log(chalk2.cyan("\nNext steps:"));
    console.log(chalk2.gray("  1. Add components:"));
    console.log(chalk2.white("     npx @xizot/shared-ui add button"));
    console.log(chalk2.gray("  2. Add multiple components:"));
    console.log(chalk2.white("     npx @xizot/shared-ui add button input card"));
    console.log(chalk2.gray("  3. Add all components:"));
    console.log(chalk2.white("     npx @xizot/shared-ui add --all"));
    console.log(chalk2.gray("\n  4. Import in your code:"));
    console.log(chalk2.white(`     import { Button } from '${config.aliases.ui}/button'`));
    console.log();
  } catch (error) {
    console.error(chalk2.red("\n\u274C Error:"), error);
    process.exit(1);
  }
});

// src/index.ts
var program = new Command3();
program.name("@xizot/shared-ui").description("CLI tool for adding shared-ui components to your project").version("1.0.0");
program.addCommand(addCommand);
program.addCommand(initCommand);
program.parse();
