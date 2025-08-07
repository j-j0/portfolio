# Technology Stack

## Framework & Build System
- **React 18.3.1** - Main frontend framework
- **Create React App** - Build system and development server
- **React Scripts 5.0.1** - Build tooling

## UI & Styling
- **Material-UI (MUI) 5.15.20** - Component library
- **@emotion/react & @emotion/styled** - CSS-in-JS styling
- **SCSS/Sass** - CSS preprocessing for custom styles
- **CSS Custom Properties** - Global color and font variables in `src/vars.css`

## Routing & Navigation
- **React Router DOM 6.23.1** - Client-side routing
- **React Scroll 1.9.0** - Smooth scrolling navigation

## Development Tools
- **ESLint** - Code linting with React-specific rules
- **@craco/craco** - Configuration override for Create React App
- **Jest & React Testing Library** - Testing framework

## Common Commands

### Development
```bash
npm start          # Start development server on localhost:3000
npm test           # Run tests in watch mode
npm run build      # Build for production
```

### Code Quality
- ESLint configuration extends `react-app` and `react-app/jest`
- React Hooks ESLint plugin enabled for hooks best practices

## Browser Support
- Production: >0.2%, not dead, not op_mini all
- Development: Latest Chrome, Firefox, Safari