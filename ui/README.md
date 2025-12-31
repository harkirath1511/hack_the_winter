# CampaignAI Frontend - React + Vite + Tailwind CSS

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Runs the app in development mode at `http://localhost:5173`

### Build

```bash
npm run build
```

Builds the app for production to the `dist/` folder

### Preview

```bash
npm run preview
```

Serves the production build locally

### Lint

```bash
npm run lint
```

Checks code quality with ESLint

## Theme & Design System

This project uses Tailwind CSS with a centralized theme configuration in `src/config/theme.js`.

### Color Palette

- **Primary**: Purple shades (50-900) - Brand color for CTAs and highlights
- **Neutral**: Gray shades (50-900) - Text, backgrounds, and borders
- **All colors use Tailwind naming**: `bg-primary-600`, `text-neutral-900`, etc.

### Dark Mode

- System preference detection enabled
- Toggle: Use the `useDarkMode()` hook in components
- Usage: Add `dark:` prefix to classes

Example:

```jsx
<div className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
  Content that adapts to dark mode
</div>
```

## Component Library

### Button

```jsx
import Button from './components/Button'

<Button variant="primary" size="lg">Primary</Button>
<Button variant="secondary" size="md">Secondary</Button>
<Button variant="ghost" size="sm">Ghost</Button>
<Button variant="danger">Delete</Button>
```

### Utilities

- `transition-smooth` - 200ms transition for hover states
- `focus-ring` - Accessible focus indicators
- `glass` - Frosted glass effect with backdrop blur
- `card` - Card styling base
- `page-container` - Full-height page wrapper
- `content-wrapper` - Centered content with max-width

## Project Structure

```
src/
├── components/
│   ├── Button.jsx        # Reusable button component
│   ├── Navbar.jsx        # Navigation bar
│   ├── Header.jsx        # Alternative header
│   ├── Hero.jsx          # Hero section
│   ├── Features.jsx      # Features grid
│   ├── HowItWorks.jsx    # How it works section
│   ├── Footer.jsx        # Footer
│   ├── PromptInput.jsx   # Input component
│   ├── cards/            # Card components
│   └── hooks/            # Custom React hooks
├── pages/
│   ├── Home.jsx          # Landing page
│   ├── PromptPage.jsx    # Campaign input
│   ├── report.jsx        # Results report
│   ├── breakdown.jsx     # Strategy breakdown
│   ├── webEditor.jsx     # Code editor
│   ├── postmaker.jsx     # Post generation
│   ├── research.jsx      # Research page
│   └── control.jsx       # Control panel
├── config/
│   └── theme.js          # Centralized theme configuration
├── main.jsx              # Entry point
├── App.jsx               # Route definitions
└── index.css             # Global styles

tailwind.config.js        # Tailwind configuration
postcss.config.js         # PostCSS configuration
```

## Key Files

### Configuration Files

- **tailwind.config.js** - Custom color palette, animations, and theme extensions
- **postcss.config.js** - PostCSS setup with Tailwind and autoprefixer
- **index.css** - Global styles using Tailwind @directives

### Theme System

- **src/config/theme.js** - Single source of truth for colors, spacing, shadows, and component variants

### Core Components

- **Button.jsx** - Uses centralized button variants from theme
- **Navbar.jsx** - Navigation with smooth scroll effects
- **Hero.jsx** - Hero section with gradient text
- **Features.jsx** - Feature grid layout
- **Card.jsx** - Interactive card component

## Accessibility

All components include:

- ✅ Focus indicators via `focus-ring` class
- ✅ ARIA labels on interactive elements
- ✅ Semantic HTML structure
- ✅ Keyboard navigation support
- ✅ High contrast colors (WCAG AA compliant)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Animation Guidelines

**Recommended**: Tailwind transitions for hover/focus states

```jsx
<button className="transition-smooth hover:scale-105 hover:shadow-lg">
  Smooth hover effect
</button>
```

**Keep animations minimal**: 200-300ms duration
**Avoid**: Heavy/complex animations that impact performance

## Responsive Design

Breakpoints:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Example:

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  Items
</div>
```

## Environment Setup

### Prerequisites

- Node.js 16+
- npm or yarn

### Development Tools

- Vite for fast build and HMR
- ESLint for code quality
- Tailwind CSS for styling
- React Router for navigation

## Performance

- Utility-first CSS with minimal output
- Vite code splitting for faster loads
- Lazy loading on routes
- Optimized bundle size

## Common Commands

```bash
# Start dev server with hot reload
npm run dev

# Build for production (creates dist/)
npm run build

# Preview production build locally
npm run preview

# Check code quality
npm run lint
```

## Troubleshooting

### Dev server won't start

```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npm run dev
```

### Tailwind classes not applying

- Restart dev server after changing `tailwind.config.js`
- Ensure class names are exact (no dynamic variables like `bg-${color}`)
- Check that files are in the `content` array in `tailwind.config.js`

### Dark mode not working

- Add `dark:` prefix to classes
- Verify `darkMode: 'class'` in `tailwind.config.js`

## Resources

- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [React Documentation](https://react.dev) - React docs
- [Vite Documentation](https://vitejs.dev) - Build tool
- [React Router](https://reactrouter.com) - Client-side routing
- [Lucide Icons](https://lucide.dev) - Icon library

## Contributing

1. Use components from `src/components/`
2. Reference colors from `src/config/theme.js` or use Tailwind classes
3. Keep animations subtle (use `transition-smooth`)
4. Test responsive behavior
5. Ensure accessibility with focus states and ARIA labels

## License

This project is part of the CampaignAI platform.
