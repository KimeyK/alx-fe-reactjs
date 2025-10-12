import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../App.jsx";

export default function Layout() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div style={{ fontFamily: "ui-sans-serif, system-ui" }}>
      <header
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          padding: "12px 16px",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <nav style={{ display: "flex", gap: 12 }}>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/posts/42">Dynamic Post (42)</Link>
          <Link to="/profile">Profile</Link>
        </nav>
        <div style={{ marginLeft: "auto" }}>
          {isAuthenticated ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </header>

      <main style={{ padding: 24 }}>
        {/* Where child routes render */}
        <Outlet />
      </main>
    </div>
  );
}
