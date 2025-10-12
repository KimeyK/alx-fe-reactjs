import { createContext, useContext, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import Blog from "./components/Blog.jsx";
import Post from "./components/Post.jsx";
import Profile from "./components/Profile.jsx";
import ProfileDetails from "./components/ProfileDetails.jsx";
import ProfileSettings from "./components/ProfileSettings.jsx";
import Login from "./components/Login.jsx";

// --- Simple Auth Context for protected routes ---
const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// --- Protected route wrapper ---
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Shared layout with top nav */}
        <Route element={<Layout />}>
          {/* Home */}
          <Route index element={<Home />} />

          {/* Blog listing */}
          <Route path="blog" element={<Blog />} />

          {/* Dynamic route: /posts/:postId */}
          <Route path="posts/:postId" element={<Post />} />

          {/* Protected parent route with nested routes inside Profile */}
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          >
            {/* Nested routes under /profile */}
            <Route index element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          {/* Login */}
          <Route path="login" element={<Login />} />

          {/* 404 */}
          <Route path="*" element={<h2 style={{ padding: 24 }}>Not Found</h2>} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
