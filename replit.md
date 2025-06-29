# Portfolio Website Project

## Overview

This is a modern, responsive portfolio website built for John Doe, an MCA graduate and aspiring software developer. The application showcases a clean, professional design with dark/light theme support, smooth animations, and a comprehensive display of skills, projects, and experience.

## System Architecture

The project follows a full-stack architecture with clear separation between frontend and backend components:

- **Frontend**: React-based SPA using TypeScript
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build System**: Vite for development and production builds

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth animations and transitions
- **Theme System**: Custom dark/light theme implementation with system preference detection

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Session Management**: Ready for PostgreSQL session storage with connect-pg-simple

### UI Design System
- **Component Library**: Comprehensive set of reusable UI components
- **Design Tokens**: CSS custom properties for consistent theming
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: ARIA compliance and keyboard navigation support

## Data Flow

1. **Client-Side Rendering**: React components render portfolio sections dynamically
2. **API Communication**: TanStack Query handles server state and caching
3. **Theme Management**: Context-based theme switching with localStorage persistence
4. **Form Handling**: React Hook Form with Zod validation for contact forms
5. **Animation System**: Framer Motion provides entrance animations and hover effects

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **TypeScript**: Full TypeScript support across frontend and backend
- **Database**: Drizzle ORM with PostgreSQL adapter (@neondatabase/serverless)
- **UI Framework**: Radix UI primitives with Tailwind CSS styling

### Development Tools
- **Vite**: Modern build tool with HMR and optimized production builds
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer
- **ESBuild**: Fast JavaScript bundling for production builds

### External Services
- **Database Hosting**: Configured for Neon PostgreSQL (serverless)
- **Font Loading**: Google Fonts (Inter family)
- **Icon System**: Lucide React icons

## Deployment Strategy

### Development Environment
- **Dev Server**: Vite development server with Express.js API
- **Hot Reload**: Full-stack hot reloading with Vite middleware
- **Database**: In-memory storage for development, PostgreSQL for production

### Production Build
- **Frontend**: Static assets built with Vite and served from Express
- **Backend**: Compiled TypeScript bundle using ESBuild
- **Database**: PostgreSQL with Drizzle migrations
- **Environment**: Node.js production server

### Build Process
1. Frontend assets compiled to `dist/public`
2. Backend TypeScript compiled to `dist/index.js`
3. Database schema pushed using Drizzle Kit
4. Single Node.js server serves both API and static files

## Changelog
```
Changelog:
- June 29, 2025. Initial setup
```

## User Preferences
```
Preferred communication style: Simple, everyday language.
```