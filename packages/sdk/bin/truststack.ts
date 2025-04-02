#!/usr/bin/env node

import dotenv from "dotenv";
import "reflect-metadata";

// Load environment variables from .env file
dotenv.config();

import {Command} from "commander";
import * as fs from "fs";
import * as path from "path";
import {fileURLToPath} from "url";
import {applyConfig, cleanSandbox, loadConfig} from "../src/bin-utils";
import {Environment} from "../src/types";

// Fix for ESM modules not having __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const program = new Command();

program.name("truststack").description("Trust Stack CLI").version("0.0.1");

program
  .command("apply")
  .description("Apply Trust Stack configuration to the API")
  .option(
    "-c, --config <path>",
    "Path to the configuration file",
    "truststack.config.json"
  )
  .option(
    "-e, --env <environment>",
    "Target environment (production/sandbox)",
    "production" as Environment
  )
  .action(async (options) => {
    try {
      const config = await loadConfig(options.config);

      await applyConfig(config, options.env as Environment);
    } catch (error) {
      console.error(
        "Error:",
        error instanceof Error ? error.message : String(error)
      );
      process.exit(1);
    }
  });

program
  .command("init")
  .description("Initialize a new Trust Stack configuration file")
  .option(
    "-d, --directory <path>",
    "Directory to create the config file in",
    "./"
  )
  .action((options) => {
    const configDir = path.resolve(process.cwd(), options.directory);
    const configPath = path.join(configDir, `truststack.config.json`);

    try {
      // Check if file already exists
      if (fs.existsSync(configPath)) {
        console.error(`Configuration file already exists at ${configPath}`);
        process.exit(1);
      }

      // Create JSON config template
      const jsonTemplate = {
        eventTags: [
          {
            code: "EXAMPLE_EVENT",
            name: "Example Event",
            description: "An example event tag.",
          },
        ],
      };

      fs.writeFileSync(configPath, JSON.stringify(jsonTemplate, null, 2));

      // Copy the JSON schema to the same directory for editor support
      const schemaSourcePath = path.resolve(
        __dirname,
        "../schema/truststack.schema.json"
      );
      const schemaTargetPath = path.join(configDir, "truststack.schema.json");

      if (fs.existsSync(schemaSourcePath)) {
        fs.copyFileSync(schemaSourcePath, schemaTargetPath);
        console.log(`Created JSON schema at ${schemaTargetPath}`);
      }

      console.log(`Created Trust Stack configuration file at ${configPath}`);
    } catch (error) {
      console.error(
        "Error creating configuration file:",
        error instanceof Error ? error.message : String(error)
      );
      process.exit(1);
    }
  });

program
  .command("clean-sandbox")
  .description("Clean up resources in the sandbox environment")
  .action(async (options) => {
    try {
      console.log("Cleaning up sandbox resources...");
      await cleanSandbox();
      console.log("Sandbox cleanup completed successfully");
    } catch (error) {
      console.error(
        "Error cleaning sandbox:",
        error instanceof Error ? error.message : String(error)
      );
      process.exit(1);
    }
  });

program.parse(process.argv);
