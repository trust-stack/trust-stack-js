import {defineConfig} from "@hey-api/openapi-ts";

export default defineConfig({
  client: "@hey-api/client-fetch",
  input: "./schema/openapi.json",
  output: "./src/client",
  experimentalParser: true,
}) as any;
