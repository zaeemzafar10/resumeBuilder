#!/usr/bin/env node
import { execSync } from 'child_process';

console.log('Starting frontend-only application...');
try {
  // Change to the client directory and start Vite
  execSync('cd client && npx vite', { stdio: 'inherit' });
} catch (error) {
  console.error('Error starting the application:', error);
  process.exit(1);
}