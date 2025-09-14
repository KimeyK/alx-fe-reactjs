@'
function Footer() {
  return (
    <footer style={{ backgroundColor: "#222", color: "white", textAlign: "center", padding: "8px" }}>
      <p>© 2023 City Lovers</p>
    </footer>
  );
}
export default Footer;
'@ | Set-Content -Encoding utf8 .\Footer.jsx
