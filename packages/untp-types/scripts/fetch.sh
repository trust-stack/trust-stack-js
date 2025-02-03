#!/bin/bash

# Define the base URL
BASE_URL="https://test.uncefact.org/vocabulary/untp"

# Define the version
VERSION="0.5.0" # Change this to your desired version

# Define array of items to fetch
ITEMS=(
    # Digital Product Passport
    "dpp"
    # Digital Conformity Credential
    "dcc"
    # Digital Traceability Event
    "dte"
    # Digital Facility Profile
    "dfr"
)

# Create output directory if it doesn't exist
mkdir -p "src/${VERSION}"

# Loop through items and fetch each one
for item in "${ITEMS[@]}"; do
    # Convert item to uppercase using tr
    upper_item=$(echo "$item" | tr '[:lower:]' '[:upper:]')

    echo "Fetching $item..."

    # Construct the full URL
    URL="${BASE_URL}/${item}/untp-${item}-schema-${VERSION}.json"

    # Fetch the JSON and save to file
    curl -s "$URL" >"src/${VERSION}/${upper_item}.json"

    if [ $? -eq 0 ]; then
        echo "Successfully downloaded ${upper_item}.json"
    else
        echo "Error downloading ${upper_item}.json"
    fi
done

echo "All downloads completed!"
