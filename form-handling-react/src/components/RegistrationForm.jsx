import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const next = {};
    if (!username.trim()) next.username = "Username is required";
    if (!email.trim()) next.email = "Email is required";
    if (!password.trim()) next.password = "Password is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });
    if (!validate()) return;

    try {
      setSubmitting(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus({ type: "success", message: "Registered successfully (mock)!" });
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setStatus({ type: "error", message: "Registration failed (mock)." });
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="max-w-md mx-auto p-4 border rounded mt-8">
      <h2 className="text-xl font-semibold mb-4">Register (Controlled)</h2>

      {status.message && (
        <div
          className={
            "mb-3 rounded px-3 py-2 " +
            (status.type === "success"
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200")
          }
        >
          {status.message}
        </div>
      )}

      <form onSubmit={onSubmit} noValidate>
        <label className="block mb-2">
          <span className="block text-sm font-medium">Username</span>
          <input
            className={inputClass}
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="jane_doe"
          />
          {errors.username && (
            <span className="text-sm text-red-600">{errors.username}</span>
          )}
        </label>

        <label className="block mb-2">
          <span className="block text-sm font-medium">Email</span>
          <input
            className={inputClass}
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@example.com"
          />
          {errors.email && (
            <span className="text-sm text-red-600">{errors.email}</span>
          )}
        </label>

        <label className="block mb-4">
          <span className="block text-sm font-medium">Password</span>
          <input
            className={inputClass}
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
          {errors.password && (
            <span className="text-sm text-red-600">{errors.password}</span>
          )}
        </label>

        <button
          disabled={submitting}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {submitting ? "Submitting..." : "Register"}
        </button>
      </form>
    </div>
  );
}
