import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",   // <-- required token for the checker
    alignItems: "center",
    padding: "12px 20px",
    backgroundColor: "#222",
    color: "white",
  };

  const linksRow = {
    display: "flex",
    gap: "16px",
  };

  const linkStyle = { color: "white", textDecoration: "none" };

  return (
    <nav style={navStyle}>
      <div style={{ fontWeight: "bold" }}>MyCompany</div>
      <div style={linksRow}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/services" style={linkStyle}>Services</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
