import {defineConfig} from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    reporters: ["default", "junit"],
    outputFile: {
      junit: "./reports/junit.xml",
    },
    alias: {
      "@truststack/*": "../*/src",
    },
  },
});
