import {defaultPlugins, defineConfig} from "@hey-api/openapi-ts";

export default defineConfig({
  client: "@hey-api/client-fetch",
  input: "./schema/openapi.json",
  output: "./src/client",
  experimentalParser: true,
  plugins: [
    ...defaultPlugins,
    {
      name: "@hey-api/typescript",
      enums: "typescript",
    },
  ],
}) as any;
