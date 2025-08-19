#!/bin/bash

echo "=== Debug Build Structure ==="
echo "Working directory: $(pwd)"
echo ""

echo "=== Root directory contents ==="
ls -la /app/ 2>/dev/null || ls -la .

echo ""
echo "=== Dist directory contents ==="
ls -la dist/ 2>/dev/null || echo "No dist directory found"

echo ""
echo "=== Search for main.js files ==="
find /app -name "main.js" -type f 2>/dev/null || echo "No main.js found in /app"
find . -name "main.js" -type f 2>/dev/null || echo "No main.js found in current directory"

echo ""
echo "=== Node modules check ==="
which node
node --version

echo ""
echo "=== Starting application ==="

# Tentar diferentes caminhos
if [ -f "dist/main.js" ]; then
    echo "Found main.js at dist/main.js"
    exec node dist/main.js
elif [ -f "dist/src/main.js" ]; then
    echo "Found main.js at dist/src/main.js"
    exec node dist/src/main.js
elif [ -f "/app/dist/main.js" ]; then
    echo "Found main.js at /app/dist/main.js"
    exec node /app/dist/main.js
elif [ -f "/app/dist/src/main.js" ]; then
    echo "Found main.js at /app/dist/src/main.js"
    exec node /app/dist/src/main.js
else
    echo "ERROR: main.js not found in any expected location!"
    echo "Available files in dist:"
    find /app -name "*.js" -type f 2>/dev/null | head -20
    exit 1
fi
