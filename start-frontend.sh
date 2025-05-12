#!/bin/bash

# Kill any existing process on port 3000
fuser -k 3000/tcp 2>/dev/null || true

echo "Starting frontend-only application..."

# Change to client directory and start Vite
cd client && npx vite --host