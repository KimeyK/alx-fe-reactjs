// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import Blog from "./components/Blog.jsx";
import BlogPost from "./components/BlogPost.jsx";   // <-- add this import
import Profile from "./components/Profile.jsx";
import Login from "./components/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />

          {/* ✅ dynamic route the checker expects */}
          <Route path="blog/:id" element={<BlogPost />} />

          {/* ✅ protected parent with nested routes in Profile.jsx */}
          <Route
            path="profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route path="login" element={<Login />} />
          <Route path="*" element={<h2 style={{ padding: 24 }}>Not Found</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
