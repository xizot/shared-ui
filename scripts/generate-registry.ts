import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const srcDir = path.join(rootDir, 'src');
const registryDir = path.join(rootDir, 'registry');

// Helper to read file content
function readFileContent(filePath: string): string {
  return fs.readFileSync(filePath, 'utf-8');
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
      // External package
      const pkgName = importPath.startsWith('@')
        ? importPath.split('/').slice(0, 2).join('/')
        : importPath.split('/')[0];
      externalDeps.add(pkgName);
    }
  }

  return {
    externalDeps: Array.from(externalDeps),
    internalDeps: Array.from(internalDeps),
  };
}

// Map internal dependency to registry name
function mapInternalDep(depPath: string): string | null {
  if (depPath.startsWith('@/components/ui/')) {
    return depPath.replace('@/components/ui/', '');
  }
  if (depPath.startsWith('@/components/rhf/')) {
    return depPath.replace('@/components/rhf/', 'rhf-');
  }
  if (depPath.startsWith('@/lib/')) {
    return `lib-${depPath.replace('@/lib/', '')}`;
  }
  if (depPath.startsWith('@/hooks/')) {
    return `hook-${depPath.replace('@/hooks/', '')}`;
  }
  if (depPath.startsWith('@/constants/')) {
    return `const-${depPath.replace('@/constants/', '')}`;
  }
  return null;
}

// Generate registry for UI components
function generateUIRegistry() {
  const uiDir = path.join(srcDir, 'components', 'ui');
  const files = fs.readdirSync(uiDir).filter((f) => f.endsWith('.tsx'));

  return files.map((file) => {
    const name = file.replace('.tsx', '');
    const filePath = path.join(uiDir, file);
    const content = readFileContent(filePath);
    const { externalDeps, internalDeps } = extractImports(content);

    const registryDeps = internalDeps
      .map(mapInternalDep)
      .filter((d): d is string => d !== null);

    return {
      name,
      type: 'registry:ui' as const,
      dependencies: externalDeps,
      registryDependencies: registryDeps,
      files: [
        {
          path: `components/ui/${name}.tsx`,
          content,
          type: 'registry:ui' as const,
        },
      ],
    };
  });
}

// Generate registry for RHF components
function generateRHFRegistry() {
  const rhfDir = path.join(srcDir, 'components', 'rhf');
  const files = fs.readdirSync(rhfDir).filter((f) => f.endsWith('.tsx'));

  return files.map((file) => {
    const name = file.replace('.tsx', '');
    const filePath = path.join(rhfDir, file);
    const content = readFileContent(filePath);
    const { externalDeps, internalDeps } = extractImports(content);

    const registryDeps = internalDeps
      .map(mapInternalDep)
      .filter((d): d is string => d !== null);

    return {
      name: `rhf-${name}`,
      type: 'registry:ui' as const,
      dependencies: externalDeps,
      registryDependencies: registryDeps,
      files: [
        {
          path: `components/rhf/${name}.tsx`,
          content,
          type: 'registry:ui' as const,
        },
      ],
    };
  });
}

// Generate registry for lib utilities
function generateLibRegistry() {
  const libDir = path.join(srcDir, 'lib');
  const files = fs.readdirSync(libDir).filter((f) => f.endsWith('.ts'));

  return files.map((file) => {
    const name = file.replace('.ts', '');
    const filePath = path.join(libDir, file);
    const content = readFileContent(filePath);
    const { externalDeps, internalDeps } = extractImports(content);

    const registryDeps = internalDeps
      .map(mapInternalDep)
      .filter((d): d is string => d !== null);

    return {
      name: `lib-${name}`,
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
function generateHooksRegistry() {
  const hooksDir = path.join(srcDir, 'hooks');
  const files = fs.readdirSync(hooksDir).filter((f) => f.endsWith('.ts'));

  return files.map((file) => {
    const name = file.replace('.ts', '');
    const filePath = path.join(hooksDir, file);
    const content = readFileContent(filePath);
    const { externalDeps, internalDeps } = extractImports(content);

    const registryDeps = internalDeps
      .map(mapInternalDep)
      .filter((d): d is string => d !== null);

    return {
      name: `hook-${name}`,
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
function generateConstantsRegistry() {
  const constantsDir = path.join(srcDir, 'constants');
  const files = fs.readdirSync(constantsDir).filter((f) => f.endsWith('.ts'));

  return files.map((file) => {
    const name = file.replace('.ts', '');
    const filePath = path.join(constantsDir, file);
    const content = readFileContent(filePath);
    const { externalDeps, internalDeps } = extractImports(content);

    const registryDeps = internalDeps
      .map(mapInternalDep)
      .filter((d): d is string => d !== null);

    return {
      name: `const-${name}`,
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
  console.log('Generating component registry...');

  const uiRegistry = generateUIRegistry();
  const rhfRegistry = generateRHFRegistry();
  const libRegistry = generateLibRegistry();
  const hooksRegistry = generateHooksRegistry();
  const constantsRegistry = generateConstantsRegistry();

  // Write individual registry files
  fs.writeFileSync(
    path.join(registryDir, 'ui.json'),
    JSON.stringify(uiRegistry, null, 2)
  );
  fs.writeFileSync(
    path.join(registryDir, 'rhf.json'),
    JSON.stringify(rhfRegistry, null, 2)
  );
  fs.writeFileSync(
    path.join(registryDir, 'lib.json'),
    JSON.stringify(libRegistry, null, 2)
  );
  fs.writeFileSync(
    path.join(registryDir, 'hooks.json'),
    JSON.stringify(hooksRegistry, null, 2)
  );
  fs.writeFileSync(
    path.join(registryDir, 'constants.json'),
    JSON.stringify(constantsRegistry, null, 2)
  );

  // Write combined registry
  const allRegistry = [
    ...uiRegistry,
    ...rhfRegistry,
    ...libRegistry,
    ...hooksRegistry,
    ...constantsRegistry,
  ];
  fs.writeFileSync(
    path.join(registryDir, 'index.json'),
    JSON.stringify(allRegistry, null, 2)
  );

  console.log(`✓ Generated registry with ${allRegistry.length} entries`);
  console.log(`  - UI components: ${uiRegistry.length}`);
  console.log(`  - RHF components: ${rhfRegistry.length}`);
  console.log(`  - Lib utilities: ${libRegistry.length}`);
  console.log(`  - Hooks: ${hooksRegistry.length}`);
  console.log(`  - Constants: ${constantsRegistry.length}`);
}

generateRegistry();
