import path from "path";
import {defineConfig} from "vitest/config";
export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["src/**/*.spec.ts"],
    coverage: {
      reporter: ["text", "json", "html"],
      include: ["src/**/*.ts"],
      exclude: ["src/**/*.spec.ts", "src/**/*.test.ts"],
    },
    alias: {
      "@truststack/*": path.resolve(__dirname, "../*/src"),
    },
  },
});
