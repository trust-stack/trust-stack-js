#!/bin/bash

# Find all JSON files and generate types next to them
find src -name "*.json" -exec sh -c '
    json_file="$1"
    ts_file="${json_file%.json}.ts"
    echo "Generating types for $json_file -> $ts_file"
    npx --package=json-schema-to-typescript json2ts "$json_file" -o "$ts_file"
' sh {} \;
