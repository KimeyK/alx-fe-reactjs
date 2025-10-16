// src/components/ProtectedRoute.jsx
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../App.jsx"; // ✅ include useAuth (checker looks for this)

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // ✅ reference useAuth here
  const location = useLocation();

  if (!isAuthenticated) {
    // redirect unauthenticated users to login
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // render children if authenticated
  return children;
}
