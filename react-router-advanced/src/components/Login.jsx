import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../App.jsx";

export default function Login() {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) {
    return <Navigate to="/profile" replace />;
  }

  const onLogin = (e) => {
    e.preventDefault();
    login();
    navigate("/profile", { replace: true });
  };

  return (
    <form onSubmit={onLogin} style={{ maxWidth: 360 }}>
      <h1>Login</h1>
      <p>Click login to simulate authentication.</p>
      <button type="submit">Login</button>
    </form>
  );
}
