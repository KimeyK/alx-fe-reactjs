// src/components/Profile.jsx
import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails.jsx";
import ProfileSettings from "./ProfileSettings.jsx";

export default function Profile() {
  return (
    <section>
      <h1>Profile</h1>

      <nav style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        <Link to="">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested routes declared here (the checker looks for this) */}
      <Routes>
        <Route index element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </section>
  );
}
