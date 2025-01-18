# Load environment variables from .env file
if [ -f .env ]; then
    source .env
fi

npx wrangler r2 object get openapi-drafts/latest.json
cp ./latest.json ./schema/openapi.json
rm ./latest.json
