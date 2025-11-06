# React Basics Project

A comprehensive React application demonstrating fundamental concepts, state management with Zustand and Redux Toolkit, user authentication, and modern web development practices.

## What You'll Learn

This project serves as a comprehensive learning resource for React developers, covering:

- **Fundamental React Concepts**: Components, props, state, lifecycle methods
- **Modern React Hooks**: useState, useEffect, useRef, custom hooks
- **State Management**: Redux Toolkit for complex state, Zustand for lightweight state, Preact Signals for reactive state
- **Routing**: Client-side routing with React Router DOM, nested routes, protected routes
- **Forms and Validation**: React Hook Form with Zod schema validation
- **API Interactions**: Fetching data, POST requests, error handling
- **Authentication**: User login, route guards, persistent authentication
- **Styling**: Tailwind CSS with dark mode support
- **Best Practices**: Code organization, component composition, performance optimization

## Features

### Todo Management

- Add, remove, and toggle todo items
- Persistent storage using Zustand with localStorage
- Real-time updates and user-friendly interface

### User Authentication & Profile

- Login system with form validation using Zod schema
- User profile management with Redux Toolkit
- Persistent user data in localStorage
- Navbar displaying logged-in user's profile picture
- Secure logout functionality

### React Concepts Demonstrations

- **Hooks**: useState, useRef examples
- **Components**: Controlled vs Uncontrolled components
- **Forms**: React Hook Form with Zod validation
- **Routing**: Nested routes with React Router DOM
- **State Management**: Zustand for todos, Redux for user data

### Custom Hooks

- **useValidUser**: A custom hook for user validation, handling email and password checks, and authentication logic. Located in `src/Hook/useValidUser.js`, it provides state management for login forms and integrates with navigation and localStorage for authentication persistence.

### Utilities

- **authenticationUser.js**: Contains mock user data for authentication purposes. Includes user objects with id, name, email, password, role, age, phone, and address details. Used for simulating user login without a real backend.
- **constants.js**: Defines application constants, including regex patterns for email and password validation (e.g., EMAIL_VALID and PASS_WORD_VALID). These are used across components for consistent validation rules.

## Technologies Used

- **React 19**: Latest React version with modern features
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Redux Toolkit**: State management for user data
- **Zustand**: Lightweight state management for todos
- **React Router DOM**: Client-side routing
- **Zod**: Schema validation for forms
- **React Hook Form**: Performant forms with easy validation
- **ESLint**: Code linting and formatting

## Project Structure

```
my-basics/
├── public/
│   └── vite.svg
├── src/
│   ├── Components/
│   │   ├── Applayout.jsx          # Main layout with navbar
│   │   ├── Home.jsx               # Home page with todo section
│   │   ├── Navbar.jsx             # Navigation with user profile
│   │   ├── UserProfile.jsx        # User profile display
│   │   ├── TodoInput.jsx          # Todo input component
│   │   ├── TodoList.jsx           # Todo list display
│   │   ├── ZodFormLogin.jsx       # Login form with validation
│   │   ├── LoginPage.jsx          # Login page component
│   │   ├── Hooks.jsx              # React hooks examples
│   │   ├── ControlledComponent.jsx # Controlled component demo
│   │   ├── UncontrolledComponent.jsx # Uncontrolled component demo
│   │   ├── ConUnConComp.jsx       # Controlled/Uncontrolled components wrapper
│   │   ├── NotFound.jsx           # 404 page
│   │   ├── RedirectPage.jsx       # Redirect logic for authenticated routes
│   │   ├── SaveRoute.jsx          # Route guard for unauthenticated routes
│   │   ├── ApisSection.jsx        # API section with nested routing
│   │   ├── Apis.jsx               # API related component
│   │   ├── SimpleFetch.jsx        # Fetch method component for user data
│   │   ├── PostMethod.jsx         # POST method component for creating posts
│   │   ├── SignalsStateManag.jsx  # Signals state management demo
│   │   ├── ToggleButton.jsx       # Theme toggle button
│   │   └── Footer.jsx             # Footer component
│   ├── store/
│   │   ├── appStore.js            # Redux store configuration
│   │   └── slices/
│   │       └── userSlice.js       # User state slice
│   ├── ZustandStore/
│   │   └── TodoStore.js           # Todo state with Zustand
│   ├── SignalsStore/
│   │   └── ToggleBtn.js           # Theme toggle signal store
│   ├── context/
│   │   └── ThemeProvider.jsx      # Theme context provider
│   ├── Hook/
│   │   └── useValidUser.js        # Custom hook for user validation
│   ├── utiles/
│   │   ├── authenticationUser.js  # Mock user data
│   │   └── constants.js           # App constants
│   ├── App.jsx                    # Main app with routing
│   ├── main.jsx                   # App entry point
│   └── index.css                  # Global styles
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Installation & Setup

1. **Clone the repository**

   ```bash
   git clone git@github.com:alihamza-12/react_basis.git
   cd my-basics
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```
   NODE_ENV='local'
   ```

   This sets the environment to local development mode.

4. **Start the development server**

   ```bash
   npm run dev
   ```

   This starts the Vite development server, typically on `http://localhost:5173`.

5. **Build for production**

   ```bash
   npm run build
   npm run preview
   ```

   - `npm run build`: Builds the app for production into the `dist` folder.
   - `npm run preview`: Serves the built app locally for preview.

### Scripts

- `npm run dev`: Starts the development server with hot module replacement.
- `npm run build`: Builds the project for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Previews the production build locally.

## Usage

### Authentication

- Navigate to `/login` to access the login page
- Use the provided credentials from `authenticationUser.js` or create new users
- Form validation ensures email and password requirements are met

### Todo Management

- After logging in, access the home page (`/home`)
- Add new todos using the input field
- Toggle completion status with the circle/check button
- Remove todos with the delete button
- Todos persist across browser sessions

### Navigation

- Use the navbar to navigate between sections
- User profile picture in navbar links to user profile page
- Logout button clears user data and redirects to login

### API Interactions

- Navigate to `/apis` to access the API section
- **Fetch Method** (`/apis/fetch-method`): View fetched user data from JSONPlaceholder with loading states
- **POST Method** (`/apis/post-method`): Create new posts and view existing posts with form validation

## Authentication Guards

The application uses custom authentication guard components to protect routes based on user authentication status:

- **RedirectPage**: Protects authenticated routes. If the user is not authenticated (checked via localStorage "Authentication"), redirects to `/login`. If authenticated, renders the protected content.
- **SaveRoute**: Protects unauthenticated routes (e.g., login page). If the user is authenticated, redirects to `/` (home). If not authenticated, renders the content (allowing access to login).

## Routing Structure

- `/login`: Login page (protected by SaveRoute - redirects authenticated users to home)
- `/`: Main app (protected by RedirectPage - requires authentication, redirects to login if not authenticated)
  - `/`: Home page with todo section
  - `/hooks`: React hooks examples
  - `/user-profile`: User profile display
  - `/signals-state-management`: Signals state management demo
  - `/apis`: API interactions section
    - `/apis/fetch-method`: Fetch method for user data
    - `/apis/post-method`: POST method for creating posts
  - `/contolled-unctrolled`: Component types demo
    - `/contolled-unctrolled/controlled`: Controlled component
    - `/contolled-unctrolled/uncrolled`: Uncontrolled component
  - `*`: 404 Not Found page

## State Management

### Redux (User Data)

- Configured in `appStore.js` with devTools enabled in development
- `userSlice.js` handles user authentication state
- Persists user data in localStorage
- Actions: `setUserData`, `clearUser`

### Zustand (Todos)

- `TodoStore.js` manages todo state with persistence
- Actions: `addTodo`, `removeTodo`, `toggleTodo`
- Data persists in localStorage under "todo-storage" key

## Form Validation

- Uses Zod schemas for type-safe validation
- React Hook Form for performant form handling
- Real-time error display for invalid inputs

## Styling & UI Enhancements

- **Tailwind CSS**: Responsive, utility-first styling with dark mode support using `dark:` prefixes
- **Gradients**: Beautiful gradient backgrounds for components (e.g., blue-indigo for UserProfile, green-cyan for Hooks, purple-pink for ControlledComponent, indigo-purple for UncontrolledComponent, red-orange for SignalsStateManag, orange-pink for Login)
- **Typography**: Enhanced text sizing (text-2xl, text-3xl, text-4xl) with bold fonts for better readability
- **Shadows**: Multiple shadow levels (shadow-md, shadow-lg, shadow-2xl) for depth and visual hierarchy
- **Transitions**: Smooth animations with `transition-all duration-200/300` and hover effects like `hover:scale-105`
- **Dark Mode**: Comprehensive dark mode implementation with white text (`dark:text-white`) and appropriate dark backgrounds
- **Navbar**: Impressive gradient navbar with hover animations, scaling effects, and improved user profile display
- **Component Layouts**: Full-screen backgrounds with proper spacing (`min-h-screen`, `pb-20` for footer clearance)
- **Form Styling**: Modern form designs with focus rings, borders, and gradient buttons
- **Consistent Design**: Cohesive color schemes and styling patterns across all components
- **Responsive Design**: Mobile-friendly layouts with proper padding and margins

## Dark Mode Theme Toggle with Preact Signals

### Installation

Install Preact Signals for reactive state management:

```bash
npm install @preact/signals-react
```

### Implementation

#### Signals State Management Component (SignalsStateManag.jsx)

This component demonstrates Preact Signals for reactive state management with a counter example:

- Uses `signal()` to create a reactive counter variable
- `useSignalEffect()` to log changes without re-rendering the entire component
- Buttons increment/decrement the counter, updating only the affected DOM elements
- Signals provide fine-grained reactivity, improving performance by avoiding unnecessary re-renders

#### Theme Toggle with Signals

A separate signal store manages the theme state:

- `ToggleBtn.js`: Contains `toggleBtnVal` signal (boolean: true for light, false for dark)
- `ToggleButton.jsx`: Toggles the signal value and applies/removes "dark" class on document element
- Components use Tailwind's `dark:` prefixes for dark mode styles
- Theme changes are reactive and instant across the application

### Features

- **Reactive Theme Toggle**: Instant theme switching without full component re-renders
- **Signal-Based State**: Efficient state management for theme and counters
- **Tailwind Dark Mode**: Automatic dark mode styling with `dark:` variants
- **Persistent UI Updates**: DOM updates only for changed elements

### API Interactions

- **Fetch Method**: Demonstrates simple fetch API to retrieve user data from JSONPlaceholder, displaying user names, emails, and cities with loading and error states
- **POST Method**: Fetches existing posts from JSONPlaceholder, allows creating new posts via POST requests, and displays all posts with form validation and error handling
- **Nested Routing**: API section uses nested routes under `/apis` for organized navigation between fetch and post methods
