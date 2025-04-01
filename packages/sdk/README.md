# Trust Stack SDK

A unified SDK for interacting with the Trust Stack platform.

## Installation

```bash
npm install @truststack/sdk
# or
yarn add @truststack/sdk
# or
pnpm add @truststack/sdk
```

## CLI Usage

The Trust Stack CLI allows you to manage your Trust Stack configuration.

### Initialize a new configuration

Create a new configuration file in your project:

```bash
npx truststack init
```

This will create a default `truststack.config.json` file in your current directory along with a JSON schema file for editor intellisense.

### Apply configuration

Apply your configuration to the Trust Stack API:

```bash
npx truststack apply
```

By default, this will look for a `truststack.config.json` file in your current directory. To specify a different configuration file:

```bash
npx truststack apply --config path/to/config.json
```

To specify the target environment:

```bash
npx truststack apply --env production
# or
npx truststack apply --env sandbox
```

## Configuration Schema

The configuration file uses JSON format and can be validated against the included JSON schema.

### JSON Configuration with Schema

For the best development experience, include the schema reference in your configuration file:

```json
{
  "eventTags": [
    {
      "code": "HARVEST_EVENT",
      "name": "Harvest Event",
      "description": "A grain harvest event."
    }
  ]
}
```

## Editor Support

Modern code editors like VS Code, WebStorm, and others will automatically provide validation and autocompletion based on the JSON schema.

## API Reference

The SDK also provides programmatic access to the Trust Stack API. See the API documentation for details. 