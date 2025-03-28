import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["**/*.test.ts"],
    exclude: ["./src/utils.test.ts"],
    globals: true,
  },
});
