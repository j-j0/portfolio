# Project Structure

## Root Directory
```
├── public/           # Static assets and HTML template
├── src/             # Source code
├── build/           # Production build output
├── node_modules/    # Dependencies
├── package.json     # Project configuration and dependencies
└── README.md        # Project documentation
```

## Source Code Organization (`src/`)
```
src/
├── components/      # React components (JSX files)
├── pictures/        # Image assets and media files
├── App.js          # Main application component
├── App.css         # Global application styles
├── index.js        # Application entry point
├── index.css       # Base styles
└── vars.css        # CSS custom properties (colors, fonts)
```

## Component Structure
- **Components are in `src/components/`** with `.jsx` extension
- **Component-specific styles** use `.scss` files with matching names
- **Main sections**: Hero, About, Experience, Projects, Contact, Navbar

## Styling Architecture
- **Global variables** defined in `src/vars.css` using CSS custom properties
- **Component styles** use SCSS for preprocessing
- **Material-UI components** styled with `sx` prop and custom properties
- **Responsive design** implemented with MUI's `useMediaQuery` hook

## Asset Management
- **Images stored in `src/pictures/`** and imported using `require()`
- **Static assets in `public/`** for files that don't need processing

## File Naming Conventions
- **Components**: PascalCase with `.jsx` extension (e.g., `Hero.jsx`)
- **Styles**: Component name with `.scss` extension (e.g., `Hero.scss`)
- **Assets**: Descriptive lowercase names with appropriate extensions