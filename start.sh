#!/bin/sh

echo "=== DOKPLOY PRODUCTION START ==="
echo "Working directory: $(pwd)"
echo "Available files:"
find . -name "*.js" | head -5

echo "Running Prisma migrations..."
npx prisma migrate deploy

echo "Starting NestJS application..."
if [ -f "dist/main.js" ]; then
  echo "✅ Found main.js at dist/main.js"
  exec node dist/main.js
elif [ -f "dist/src/main.js" ]; then
  echo "✅ Found main.js at dist/src/main.js"
  exec node dist/src/main.js
else
  echo "❌ main.js not found! Build structure:"
  find . -name "*.js" | head -20
  exit 1
fi
