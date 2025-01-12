## Tech Stack Outline

A feature-rich video streaming website designed for seamless user experience and high performance. The application leverages modern web technologies to provide a secure, scalable, and efficient platform for streaming video content. Below is a detailed description of the tech stack used to build this application:

### 1. Frontend

- **Next.js (App Router)**: The core framework for building your frontend with the app router for managing routes.
- **TypeScript**: Adds type safety to your code, helping to catch errors early during development.
- **ShadCN/UI**: A modern UI library to design and build the user interface components.
- **Tailwind CSS**: For styling your components with utility-first CSS classes.

### 2. Backend

- **Next.js API Routes**: For creating and managing backend API endpoints within the same codebase.
- **NeonDB with Drizzle ORM**: A serverless database and lightweight ORM to handle database interactions and scalability.
- **NextAuth.js**: For handling authentication (email/password and OAuth) securely.

### 3. External APIs

- **Vidsrc API**: For accessing and streaming video content from an external source.

### 4. Authentication

- **NextAuth.js**: Used to handle user authentication with support for email/password login and OAuth providers.
  - **Email/Password Authentication**
  - **OAuth Providers** (e.g., Google, Facebook, GitHub)

### 5. Database

- **NeonDB**: A PostgreSQL-compatible serverless database to store user data, video metadata, and other application-related information.
- **Drizzle ORM**: A lightweight, type-safe ORM to interact with NeonDB efficiently.

### 6. Development Tools

- **ESLint and Prettier**: For code linting and formatting to maintain code quality and consistency.
- **Jest and Testing Library**: For writing and running tests to ensure your application is robust and error-free.
- **Vercel**: For hosting your Next.js application with built-in CI/CD.

## Integration Overview
A brief list of the features of the website, how the different components come together and forms a great product.

### User Authentication

- Configure NextAuth.js for both email/password authentication and OAuth providers.
- Create the necessary API routes and components for login, registration, and authentication.

### Database Operations

- Define your schema using Drizzle ORM and NeonDB.
- Use API routes in Next.js to handle CRUD operations and interact with the database.

### UI Components

- Build the frontend using ShadCN/UI components.
- Style the components with Tailwind CSS.

### Video Streaming

- Integrate the Vidsrc API to fetch and stream video content.
- Use Next.js API routes to securely interact with the Vidsrc API and serve video content.

### Deployment

- Use Vercel for deploying your Next.js application, leveraging its serverless functions to handle backend operations.
