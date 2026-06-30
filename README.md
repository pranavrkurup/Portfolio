# Pranav R Kurup - Personal Portfolio

A visually striking, Neo-Brutalist personal portfolio built with React, TypeScript, and Vite. This project showcases my skills, experience, and projects while providing a highly interactive and tactile user experience.

## Features

- **Neo-Brutalist Aesthetics**: Bold typography, high contrast, stark borders, and strong drop shadows that give the UI a raw and architectural feel.
- **Tactile Micro-interactions**: Interactive elements (buttons, project cards, skill pills) feature an "arcade button" press effect that physically pushes into the page on click.
- **Custom Inverting Cursor**: A completely custom cursor component that tracks mouse movement and uses `mix-blend-mode: difference` to dynamically invert colors over various elements, giving a magical overlay effect. (Automatically disabled on touch devices).
- **GSAP Animations**: Smooth, staggered entrance animations for elements across the page and an infinite marquee for the footer section.
- **Responsive Design**: Fluidly adapts from desktop to mobile screens, ensuring a seamless experience across all devices.

## Tech Stack

- **Framework**: [React 19](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) & Vanilla CSS (for custom neo-brutalist variables and effects)
- **Animations**: [GSAP](https://gsap.com/) (GreenSock Animation Platform)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (Feather icons)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (or yarn/pnpm/bun)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/pranavrkurup/Portfolio.git
   cd Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port provided by Vite).

### Build for Production

To build the project for production, run:

```bash
npm run build
```

This will generate a `dist` folder containing the optimized production build.

## Project Structure

- `src/App.tsx`: The main application component that orchestrates the layout, sections (Hero, About, Projects, Skills, Footer), and initial GSAP animations.
- `src/index.css`: Global stylesheet defining CSS variables (colors, fonts, radii), the neo-brutalist UI classes, smooth scrolling, and tactile hover/active states.
- `src/components/CustomCursor.tsx`: The custom cursor component that tracks mouse coordinates and applies the inverting blend mode effect.
- `src/assets/`: Contains static assets like images (e.g., portrait).

## License

This project is private and intended for personal portfolio use.
