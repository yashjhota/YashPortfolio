# Portfolio Website

## Overview

This is a full-stack portfolio website built as a single-page application showcasing a backend engineer and AI/ML specialist. The application features a modern, responsive design with smooth animations, dark/light theme support, and a contact form system. It demonstrates professional experience, projects, skills, and provides a way for visitors to get in touch.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built using React with TypeScript, utilizing a modern component-based architecture:

- **Framework**: React 18 with TypeScript for type safety and better developer experience
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with CSS variables for theming, supporting both dark and light modes
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Animations**: Framer Motion for smooth page transitions and scroll-triggered animations
- **State Management**: TanStack React Query for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
The backend follows a RESTful API design with Express.js:

- **Framework**: Express.js with TypeScript for type-safe server-side development
- **API Design**: RESTful endpoints for contact form submission and data retrieval
- **Storage**: Dual storage approach with in-memory storage for development and PostgreSQL schema ready for production
- **Validation**: Zod schemas shared between frontend and backend for consistent validation
- **Development**: Hot reloading with Vite middleware integration for seamless development experience

### Data Storage
The application uses a flexible storage architecture:

- **Development**: In-memory storage implementation for quick setup and testing
- **Production Ready**: Drizzle ORM with PostgreSQL schema definitions
- **Schema Management**: Shared TypeScript schemas between frontend and backend
- **Database**: Configured for Neon Database (serverless PostgreSQL) with connection pooling

### Theme and Styling System
- **Design System**: Custom CSS variables with Tailwind for consistent theming
- **Typography**: Multi-font support (Inter, DM Sans, Fira Code, Geist Mono)
- **Color Palette**: Comprehensive color system supporting dark/light modes
- **Responsive Design**: Mobile-first approach with progressive enhancement

### Component Architecture
- **Section-based Layout**: Modular components for different portfolio sections (Hero, About, Projects, Experience, Contact)
- **Reusable UI Components**: Comprehensive component library with consistent styling
- **Accessibility**: Built-in ARIA support through Radix UI primitives
- **Animation System**: Consistent animation patterns using Framer Motion

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **UI Framework**: Radix UI primitives (20+ components), shadcn/ui component system
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Animation**: Framer Motion for transitions and scroll animations
- **State Management**: TanStack React Query for server state
- **Form Validation**: Zod for schema validation, Hookform/resolvers for integration
- **Date Handling**: date-fns for date manipulation
- **Carousel**: Embla Carousel React for image/content carousels

### Backend Dependencies
- **Server Framework**: Express.js with TypeScript support
- **Database**: Drizzle ORM, Neon Database serverless PostgreSQL
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod for runtime type checking
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Build System**: Vite with React plugin and TypeScript support
- **Code Quality**: TypeScript for static type checking
- **Replit Integration**: Replit-specific plugins for development environment
- **Cartographer**: Code mapping and navigation (Replit development)
- **Error Handling**: Runtime error overlay for development debugging

### Database and Hosting
- **Database**: Neon Database (serverless PostgreSQL) for production
- **ORM**: Drizzle with PostgreSQL dialect for type-safe database operations
- **Migration**: Drizzle Kit for database schema migrations
- **Environment**: Environment variable based configuration for database connections