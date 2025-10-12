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
import ProtectedRoute from "./components/ProtectedRoute.jsx";

// ---- Simple Auth Context ----
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

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Shared layout with header/nav */}
        <Route element={<Layout />}>
          {/* Home */}
          <Route index element={<Home />} />

          {/* Blog list */}
          <Route path="blog" element={<Blog />} />

          {/* Dynamic route: /posts/:postId */}
          <Route path="posts/:postId" element={<Post />} />

          {/* Protected parent with nested routes under /profile */}
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          >
            {/* Nested routes */}
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
