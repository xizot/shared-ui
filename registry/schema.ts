export type RegistryEntry = {
  name: string;
  type: 'registry:ui' | 'registry:lib' | 'registry:hook' | 'registry:constant';
  description?: string;
  dependencies?: string[];
  devDependencies?: string[];
  registryDependencies?: string[];
  files: {
    path: string;
    content?: string;
    type: 'registry:ui' | 'registry:lib' | 'registry:hook' | 'registry:constant';
  }[];
  tailwind?: {
    config?: {
      theme?: Record<string, any>;
      plugins?: string[];
    };
  };
  cssVars?: {
    light?: Record<string, string>;
    dark?: Record<string, string>;
  };
};

export type Registry = RegistryEntry[];
