import {plainToInstance} from "class-transformer";
import {validate} from "class-validator";
import * as fs from "fs";
import * as path from "path";
import {TrustStack} from ".";
import {Environment, TrustStackConfig} from "./types";

/**
 * Load and validate a Trust Stack configuration file
 */
export async function loadConfig(
  configPath: string
): Promise<TrustStackConfig> {
  try {
    const resolvedPath = path.resolve(process.cwd(), configPath);

    // Read and parse the JSON file
    const fileContent = fs.readFileSync(resolvedPath, "utf-8");
    const configData = JSON.parse(fileContent);

    // Transform plain object to class instance
    const config = plainToInstance(TrustStackConfig, configData);

    // Validate using class-validator
    const errors = await validate(config, {
      whitelist: true,
      forbidNonWhitelisted: true,
    });

    if (errors.length > 0) {
      const formattedErrors = errors
        .map((error) => {
          const constraints = error.constraints
            ? Object.values(error.constraints).join(", ")
            : "Unknown error";
          return `${error.property}: ${constraints}`;
        })
        .join("\n");

      throw new Error(`Configuration validation failed:\n${formattedErrors}`);
    }

    return config;
  } catch (error) {
    console.error("Error loading configuration:", error);
    throw error;
  }
}

/**
 * Apply the configuration to the Trust Stack API
 */
export async function applyConfig(
  config: TrustStackConfig,
  env: Environment
): Promise<void> {
  console.log(`Applying configuration to environment: ${env}`);

  const client = new TrustStack({
    sandbox: env == "sandbox",
    accessToken: process.env.TRUST_STACK_ACCESS_TOKEN as string,
  });

  if (config.eventTags?.length) {
    await client.admin.setEventTags(
      config.eventTags.map((tag) => ({
        code: tag.code,
        name: tag.name,
        description: tag.description || tag.name,
      }))
    );
  }
}
