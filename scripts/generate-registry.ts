import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const srcDir = path.join(rootDir, 'src');
const registryDir = path.join(rootDir, 'registry');

type RegistryType = 'registry:ui' | 'registry:lib' | 'registry:hook' | 'registry:constant';

interface RegistryFile {
  path: string;
  content: string;
  type: RegistryType;
}

interface RegistryEntry {
  name: string;
  type: RegistryType;
  description?: string;
  dependencies: string[];
  devDependencies?: string[];
  registryDependencies: string[];
  files: RegistryFile[];
}

// Helper to read file content
function readFileContent(filePath: string): string {
  return fs.readFileSync(filePath, 'utf-8');
}

// Helper to check if path is a directory
function isDirectory(filePath: string): boolean {
  return fs.existsSync(filePath) && fs.statSync(filePath).isDirectory();
}

// Get all files in a directory recursively
function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

// Helper to extract imports from a file
function extractImports(content: string): {
  externalDeps: string[];
  internalDeps: string[];
} {
  const externalDeps = new Set<string>();
  const internalDeps = new Set<string>();

  // Match import statements
  const importRegex = /import\s+(?:{[^}]*}|\*\s+as\s+\w+|\w+)\s+from\s+['"]([^'"]+)['"]/g;
  let match;

  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];

    if (importPath.startsWith('@/')) {
      internalDeps.add(importPath);
    } else if (!importPath.startsWith('.')) {
      // External package - skip react and react-dom as they're always peer deps
      const pkgName = importPath.startsWith('@')
        ? importPath.split('/').slice(0, 2).join('/')
        : importPath.split('/')[0];

      if (pkgName !== 'react' && pkgName !== 'react-dom') {
        externalDeps.add(pkgName);
      }
    }
  }

  return {
    externalDeps: Array.from(externalDeps),
    internalDeps: Array.from(internalDeps),
  };
}

// Map internal dependency to registry name
function mapInternalDep(depPath: string): string | null {
  // @/components/ui/button -> button
  if (depPath.startsWith('@/components/ui/')) {
    const componentPath = depPath.replace('@/components/ui/', '');
    return componentPath.split('/')[0]; // Get the folder/file name
  }
  // @/components/rhf/rhf-input -> rhf-input
  if (depPath.startsWith('@/components/rhf/')) {
    return depPath.replace('@/components/rhf/', '');
  }
  // @/lib/utils -> lib/utils
  if (depPath.startsWith('@/lib/')) {
    return `lib/${depPath.replace('@/lib/', '')}`;
  }
  // @/hooks/use-mobile -> hooks/use-mobile
  if (depPath.startsWith('@/hooks/')) {
    return `hooks/${depPath.replace('@/hooks/', '')}`;
  }
  // @/constants/breakpoints -> constants/breakpoints
  if (depPath.startsWith('@/constants/')) {
    return `constants/${depPath.replace('@/constants/', '')}`;
  }
  return null;
}

// Generate registry for a single UI component (can be file or folder)
function generateUIComponentEntry(componentPath: string, baseName: string): RegistryEntry {
  const files: RegistryFile[] = [];
  const allExternalDeps = new Set<string>();
  const allInternalDeps = new Set<string>();

  if (isDirectory(componentPath)) {
    // Component is a folder - get all files inside
    const componentFiles = getAllFiles(componentPath);

    componentFiles.forEach((filePath) => {
      const relativePath = path.relative(path.join(srcDir, 'components/ui'), filePath);
      const content = readFileContent(filePath);
      const { externalDeps, internalDeps } = extractImports(content);

      externalDeps.forEach((dep) => allExternalDeps.add(dep));
      internalDeps.forEach((dep) => allInternalDeps.add(dep));

      files.push({
        path: `ui/${relativePath.replace(/\\/g, '/')}`,
        content,
        type: 'registry:ui',
      });
    });
  } else {
    // Component is a single file
    const content = readFileContent(componentPath);
    const { externalDeps, internalDeps } = extractImports(content);

    externalDeps.forEach((dep) => allExternalDeps.add(dep));
    internalDeps.forEach((dep) => allInternalDeps.add(dep));

    files.push({
      path: `ui/${baseName}.tsx`,
      content,
      type: 'registry:ui',
    });
  }

  const registryDeps = Array.from(allInternalDeps)
    .map(mapInternalDep)
    .filter((d): d is string => d !== null)
    .filter((d) => d !== baseName); // Don't depend on self

  return {
    name: baseName,
    type: 'registry:ui',
    dependencies: Array.from(allExternalDeps),
    registryDependencies: registryDeps,
    files,
  };
}

// Generate registry for UI components
function generateUIRegistry(): RegistryEntry[] {
  const uiDir = path.join(srcDir, 'components', 'ui');
  const entries = fs.readdirSync(uiDir);
  const registry: RegistryEntry[] = [];

  entries.forEach((entry) => {
    const fullPath = path.join(uiDir, entry);

    if (isDirectory(fullPath)) {
      // Folder component
      registry.push(generateUIComponentEntry(fullPath, entry));
    } else if (entry.endsWith('.tsx')) {
      // Single file component
      const name = entry.replace('.tsx', '');
      registry.push(generateUIComponentEntry(fullPath, name));
    }
  });

  return registry;
}

// Generate registry for RHF components
function generateRHFRegistry(): RegistryEntry[] {
  const rhfDir = path.join(srcDir, 'components', 'rhf');

  if (!fs.existsSync(rhfDir)) {
    return [];
  }

  const files = fs.readdirSync(rhfDir).filter((f) => f.endsWith('.tsx') && f !== 'index.tsx');

  return files.map((file) => {
    const name = file.replace('.tsx', '');
    const filePath = path.join(rhfDir, file);
    const content = readFileContent(filePath);
    const { externalDeps, internalDeps } = extractImports(content);

    const registryDeps = internalDeps.map(mapInternalDep).filter((d): d is string => d !== null);

    // RHF components always need react-hook-form
    if (!externalDeps.includes('react-hook-form')) {
      externalDeps.push('react-hook-form');
    }

    return {
      name,
      type: 'registry:ui' as const,
      dependencies: externalDeps,
      registryDependencies: registryDeps,
      files: [
        {
          path: `rhf/${name}.tsx`,
          content,
          type: 'registry:ui' as const,
        },
      ],
    };
  });
}

// Generate registry for lib utilities
function generateLibRegistry(): RegistryEntry[] {
  const libDir = path.join(srcDir, 'lib');
  const files = fs.readdirSync(libDir).filter((f) => f.endsWith('.ts') && f !== 'index.ts');

  return files.map((file) => {
    const name = file.replace('.ts', '');
    const filePath = path.join(libDir, file);
    const content = readFileContent(filePath);
    const { externalDeps, internalDeps } = extractImports(content);

    const registryDeps = internalDeps.map(mapInternalDep).filter((d): d is string => d !== null);

    return {
      name: `lib/${name}`,
      type: 'registry:lib' as const,
      dependencies: externalDeps,
      registryDependencies: registryDeps,
      files: [
        {
          path: `lib/${name}.ts`,
          content,
          type: 'registry:lib' as const,
        },
      ],
    };
  });
}

// Generate registry for hooks
function generateHooksRegistry(): RegistryEntry[] {
  const hooksDir = path.join(srcDir, 'hooks');
  const files = fs.readdirSync(hooksDir).filter((f) => f.endsWith('.ts') && f !== 'index.ts');

  return files.map((file) => {
    const name = file.replace('.ts', '');
    const filePath = path.join(hooksDir, file);
    const content = readFileContent(filePath);
    const { externalDeps, internalDeps } = extractImports(content);

    const registryDeps = internalDeps.map(mapInternalDep).filter((d): d is string => d !== null);

    return {
      name: `hooks/${name}`,
      type: 'registry:hook' as const,
      dependencies: externalDeps,
      registryDependencies: registryDeps,
      files: [
        {
          path: `hooks/${name}.ts`,
          content,
          type: 'registry:hook' as const,
        },
      ],
    };
  });
}

// Generate registry for constants
function generateConstantsRegistry(): RegistryEntry[] {
  const constantsDir = path.join(srcDir, 'constants');
  const files = fs.readdirSync(constantsDir).filter((f) => f.endsWith('.ts') && f !== 'index.ts');

  return files.map((file) => {
    const name = file.replace('.ts', '');
    const filePath = path.join(constantsDir, file);
    const content = readFileContent(filePath);
    const { externalDeps, internalDeps } = extractImports(content);

    const registryDeps = internalDeps.map(mapInternalDep).filter((d): d is string => d !== null);

    return {
      name: `constants/${name}`,
      type: 'registry:constant' as const,
      dependencies: externalDeps,
      registryDependencies: registryDeps,
      files: [
        {
          path: `constants/${name}.ts`,
          content,
          type: 'registry:constant' as const,
        },
      ],
    };
  });
}

// Main generation
function generateRegistry() {
  console.log('🔄 Generating component registry...\n');

  // Ensure registry directory exists
  if (!fs.existsSync(registryDir)) {
    fs.mkdirSync(registryDir, { recursive: true });
  }

  const uiRegistry = generateUIRegistry();
  const rhfRegistry = generateRHFRegistry();
  const libRegistry = generateLibRegistry();
  const hooksRegistry = generateHooksRegistry();
  const constantsRegistry = generateConstantsRegistry();

  // Write individual registry files
  fs.writeFileSync(path.join(registryDir, 'ui.json'), JSON.stringify(uiRegistry, null, 2));
  fs.writeFileSync(path.join(registryDir, 'rhf.json'), JSON.stringify(rhfRegistry, null, 2));
  fs.writeFileSync(path.join(registryDir, 'lib.json'), JSON.stringify(libRegistry, null, 2));
  fs.writeFileSync(path.join(registryDir, 'hooks.json'), JSON.stringify(hooksRegistry, null, 2));
  fs.writeFileSync(
    path.join(registryDir, 'constants.json'),
    JSON.stringify(constantsRegistry, null, 2),
  );

  // Write combined registry
  const allRegistry = [
    ...uiRegistry,
    ...rhfRegistry,
    ...libRegistry,
    ...hooksRegistry,
    ...constantsRegistry,
  ];
  fs.writeFileSync(path.join(registryDir, 'index.json'), JSON.stringify(allRegistry, null, 2));

  console.log(`✅ Generated registry with ${allRegistry.length} entries`);
  console.log(`   📦 UI components: ${uiRegistry.length}`);
  console.log(`   📋 RHF components: ${rhfRegistry.length}`);
  console.log(`   🔧 Lib utilities: ${libRegistry.length}`);
  console.log(`   🪝 Hooks: ${hooksRegistry.length}`);
  console.log(`   📝 Constants: ${constantsRegistry.length}`);
  console.log(`\n📁 Output: ${registryDir}`);
}

generateRegistry();
