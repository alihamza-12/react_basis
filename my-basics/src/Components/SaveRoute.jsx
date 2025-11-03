import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const SaveRoute = ({ children }) => {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const localVar = JSON.parse(localStorage.getItem("Authentication")) || {};
    setIsAuthenticated(localVar.Auth);
    setIsAuthenticating(false);
  }, []);

  if (isAuthenticating) return <div>loading...</div>;

  if (isAuthenticated) return <Navigate to="/" />;

  return children;
};

export default SaveRoute;
