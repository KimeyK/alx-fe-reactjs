import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <section>
      <h1>Profile</h1>
      <nav style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        <Link to="">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested routes render here */}
      <Outlet />
    </section>
  );
}
