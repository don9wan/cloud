# Overview

This is a Korean portfolio website for a Product Manager named 김도현 (Kim Do-hyun). The application is built as a full-stack web application with a React frontend and Express backend, showcasing the PM's professional experience, skills, projects, and articles. The site features a modern design with glass morphism effects, smooth animations, and responsive layout optimized for both desktop and mobile devices.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Styling**: Tailwind CSS with custom design system featuring glass morphism effects and Korean typography support
- **UI Components**: shadcn/ui component library built on Radix UI primitives for accessibility and consistency
- **Animations**: GSAP with ScrollTrigger for advanced scroll-based animations and smooth transitions
- **Theme Support**: Custom theme provider with dark/light mode toggle and system preference detection

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Database Layer**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development and database implementation for production
- **Session Management**: Built-in session handling with PostgreSQL session store

## Development Setup
- **Build Tool**: Vite for fast development and optimized production builds
- **Development Server**: Integrated Vite dev server with Express API in development mode
- **Hot Module Replacement**: Full HMR support for rapid development
- **TypeScript**: Strict configuration with path aliases for clean imports

## Design System
- **Typography**: Inter and Pretendard fonts for English and Korean text optimization
- **Color Scheme**: Custom CSS variables with primary blue palette and accent colors
- **Glass Effects**: Backdrop blur and transparency effects throughout the interface
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: Focus management, ARIA labels, and screen reader optimization

## Content Management
- **Static Data**: Portfolio content stored in TypeScript data files for type safety and easy maintenance
- **Sections**: Modular component architecture for Hero, Skills, Experience, Projects, Articles, and Contact sections
- **Internationalization**: Korean-first content with potential for English localization

# External Dependencies

## Core Frameworks
- **React Ecosystem**: React 18, React DOM, TypeScript support
- **Express.js**: Backend API framework with middleware support
- **Vite**: Modern build tool with plugin ecosystem

## Database & ORM
- **Drizzle ORM**: Type-safe database operations with PostgreSQL support
- **Neon Database**: Serverless PostgreSQL database provider
- **Database Migrations**: Drizzle Kit for schema management and migrations

## UI & Styling
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Radix UI**: Headless UI components for accessibility
- **shadcn/ui**: Pre-built component library
- **Lucide React**: Icon library for consistent iconography

## State Management & Data Fetching
- **TanStack Query**: Server state management with caching and synchronization
- **React Hook Form**: Form handling with validation
- **Zod**: Schema validation for type-safe data handling

## Animations & Interactions
- **GSAP**: Professional animation library
- **ScrollTrigger**: Scroll-based animation triggers
- **Embla Carousel**: Touch-friendly carousel component

## Development Tools
- **PostCSS**: CSS processing with Autoprefixer
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Integration**: Development environment optimizations

## Session & Authentication
- **connect-pg-simple**: PostgreSQL session store for Express
- **Express Session**: Session management middleware

## Utilities
- **date-fns**: Date manipulation and formatting
- **clsx & tailwind-merge**: Conditional class name utilities
- **nanoid**: Unique ID generation
- **class-variance-authority**: Type-safe variant styling