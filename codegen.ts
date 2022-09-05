import { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";
loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.HYGRAPH_URL,
  documents: ["queries/**/*.graphql"],
  generates: {
    "./generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};

export default config;
