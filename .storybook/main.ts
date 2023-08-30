import type { StorybookConfig } from '@storybook/nextjs';

import path from 'path';

const config: StorybookConfig = {
  stories: ['../**/*.mdx', '../**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  /** Expose public folder to storybook as static */
  staticDirs: ['../public'], // This loads images at localhost:6006/next.svg e.t.c.
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async webpackFinal(config, { configType }) {
    if (config?.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@/lib': path.resolve(__dirname, '../lib'),
        '@/components': path.resolve(__dirname, '../components'),
      };
    }
    return config;
  },
};
export default config;
