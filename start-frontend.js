import { spawn, exec } from 'child_process';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Kill any existing process on port 3000
exec('fuser -k 3000/tcp', (err) => {
  if (err) console.log('No process was running on port 3000');
  
  console.log('Starting frontend-only application...');
  
  // Change to client directory and start Vite
  const vite = spawn('npx', ['vite', '--host'], {
    cwd: join(process.cwd(), 'client'),
    stdio: 'inherit',
    shell: true
  });
  
  vite.on('error', (error) => {
    console.error('Error starting Vite:', error);
    process.exit(1);
  });
  
  // Handle process termination
  process.on('SIGINT', () => {
    vite.kill('SIGINT');
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    vite.kill('SIGTERM');
    process.exit(0);
  });
});