# React Basics Project

A comprehensive React application demonstrating fundamental concepts, state management with Zustand and Redux Toolkit, user authentication, and modern web development practices.

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
│   │   ├── Hooks.jsx              # React hooks examples
│   │   ├── ControlledComponent.jsx # Controlled component demo
│   │   ├── UncontrolledComponent.jsx # Uncontrolled component demo
│   │   ├── NotFound.jsx           # 404 page
│   │   ├── RedirectPage.jsx       # Redirect logic
│   │   └── Footer.jsx             # Footer component
│   ├── store/
│   │   ├── appStore.js            # Redux store configuration
│   │   └── slices/
│   │       └── userSlice.js       # User state slice
│   ├── ZustandStore/
│   │   └── TodoStore.js           # Todo state with Zustand
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
   git clone <repository-url>
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

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   npm run preview
   ```

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

### Routing Structure

- `/login`: Login page
- `/`: Redirects to home if authenticated, else to login
- `/home`: Main dashboard with todos
- `/home/hooks`: React hooks examples
- `/home/user-profile`: User profile display
- `/home/contolled-unctrolled`: Component types demo
  - `/home/contolled-unctrolled/controlled`: Controlled component
  - `/home/contolled-unctrolled/uncrolled`: Uncontrolled component

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

## Styling

- Tailwind CSS for responsive, utility-first styling
- Custom classes for hover effects and animations
- Consistent color scheme with amber and blue accents
