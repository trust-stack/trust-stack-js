# @truststack/untp-types

TypeScript type definitions for UN/CEFACT UNTP schemas.

## Overview

This package provides TypeScript type definitions for working with UNTP schemas, including:
- DPP (Digital Product Passport)
- DCC (Digital Conformity Credential)
- DTE (Digital Traceability Event)
- DFR (Digital Facility Profile)

## Installation

```bash 
pnpm install @truststack/untp-types
npm install @truststack/untp-types
yarn install @truststack/untp-types
```

## Usage 

Imported types will default to the latest UNTP version available:

```typescript
import { DPP, DCC, DTE, DFR } from '@truststack/untp-types';
```

If required, you specify a specific version to import:

```typescript
import { DPP, DCC, DTE, DFR } from '@truststack/untp-types/0.5.0';
```

## Development

### Fetching Schema Files

The package includes a script to fetch the latest UNTP schema files from the UN/CEFACT repository:

```bash
pnpm run fetch
```

This will:
1. Download JSON schemas from `https://test.uncefact.org/vocabulary/untp/`
2. Save them in the `src/<version>` directory
3. Currently fetches version 0.5.0 of:
   - DPP (Digital Product Passport)
   - DCC (Digital Conformity Credential)
   - DTE (Digital Traceability Event)
   - DFR (Digital Facility Profile)

### Generating Types

To generate TypeScript types from the JSON schemas:

```bash
pnpm run generate
```

This script:
1. Finds all JSON schema files in the `src` directory
2. Generates corresponding TypeScript type definitions using `json-schema-to-typescript`
3. Places the generated `.ts` files alongside the JSON files


## Package Structure

```
packages/untp-types/
├── src/
│   ├── 0.5.0/           # Schema version directory
│   │   ├── DPP.json     # JSON schemas
│   │   ├── DPP.ts       # Generated types
│   │   └── ...
│   └── index.ts         # Type exports
├── scripts/
│   ├── fetch.sh         # Schema fetching script
│   └── generate.sh      # Type generation script
└── package.json
```

## License

MIT
