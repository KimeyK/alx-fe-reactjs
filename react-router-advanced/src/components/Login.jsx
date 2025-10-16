// src/components/Login.jsx
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const doLogin = () => {
    localStorage.setItem("isAuthed", "true");
    navigate(from, { replace: true });
  };

  return (
    <section style={{ padding: 24 }}>
      <h2>Login</h2>
      <button onClick={doLogin}>Mock Login</button>
    </section>
  );
}
