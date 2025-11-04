// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import appStore from "./store/appStore.js";
import { Provider } from "react-redux";
import ThemeProvider from "./context/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  // <BrowserRouter>
  <Provider store={appStore}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>
  // </BrowserRouter>
  // </StrictMode>,
);
