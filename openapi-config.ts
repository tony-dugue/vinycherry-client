import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: 'http://localhost:8000/api-json',
  apiFile: './store/emptyApi.ts',
  apiImport: 'emptySplitApi',
  outputFiles: {
    './store/services/authApi.ts': {
      filterEndpoints: [/auth/i],
    },
    './store/services/userApi.ts': {
      filterEndpoints: [/user/i],
    },
  },
  //outputFile: './store/vinycherryApi.ts',
  exportName: 'vinycherryApi',
  hooks: true,
  tag: true
};

export default config;
