# Personal Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing skills, work experience, education, and projects.

## Features

- Responsive design for all devices
- Interactive UI with smooth scrolling navigation
- Sections for About, Skills, Experience, Education, and Projects

## Tech Stack

- React.js
- TypeScript
- Tailwind CSS
- Vite

## Deployment Instructions for Vercel

1. Push this repository to GitHub
2. Log in to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Use the following configuration:
   - Framework Preset: Vite
   - Build Command: `cd client && npm install && npm run build`
   - Output Directory: `dist`
5. Deploy!

## Development

To run this project locally:

```bash
# Change to client directory
cd client

# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Structure

- `client/` - Frontend React application
  - `src/` - Source code
    - `components/` - React components
    - `data/` - Data for the portfolio
    - `pages/` - Page components

## License

MIT