<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->

# Netflix GPT

- created netflix-gpt app using vite
- configured Tailwindcss
- Header
- Routing
- Login Form - both Sign In && Sign Up
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our App to Production
- Create SignUp User Account
- Implemented Sign In user api
- created our Redux Store where userSlice
- Implemented Sign Out Feature
- Update Profile
- Bug Fix : Sign Up user dispalyName , Profile picture Update.
- Bug Fix : if the user is not logged in redirect / browse to Login Page and vice-versa.
- unsubscribe to the onAuthStateChanged callback
- Added hardcoded values to contants
- Registered for TMDB API & create an app & get access token
- Get data from TMDB now now playing movie list page
- Custom hook for now playing movies
- Create movieSlice
- update the store with movies Data
- Planing for Main Container and Secondary Container
- Fetch Data for Trailer Video
- Update store with Trailer Video Data
- Embedded the Youtube Video and make it autoplay and mute
- Tailwind classes to make Main Container look awesome
- Build Secondary Component
- Build MovieList
- Build MovieCard
- TMDB Image CDN URL
- Made the Browse page amazing with Tailwind CSS
- Created Custom Hooks
- GPT Search Page
- GPT Search Bar
- (BONUS) Multi-Language Feature in our App
- Get Gemini AI API key
- GPT Search API call
- Fetched gptMovieSuggestions from TMDB
- Created gptSlice added data
- Reused MovieList component to make movie suggestions container
- Memoization
- Added .env file
- Added .env file to gitignore
- Made out Site Responsive

# Features

- Login / Sign Up Page

  - Sign In / Sign Up Form
  - redirect to Browse Page

- Browse (after authentication)

  - Header
  - Trailer in Background
  - Title & Description
  - Movie suggestions
    - MovieList \* N

- Netflix-GPT Page
  - Search Page
  - Movie Suggestions
