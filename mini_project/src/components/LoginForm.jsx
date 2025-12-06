import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm({ onLogin, onSignupClick }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!username.trim()) return setError("Please enter username");
    if (!password.trim()) return setError("Please enter password");

    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:3002/users");

      // server not running
      if (!res.ok) {
        setError("Server connection failed. Please run JSON Server.");
        setIsLoading(false);
        return;
      }

      const users = await res.json();

      if (!Array.isArray(users)) {
        setError("Invalid server response (users not found).");
        setIsLoading(false);
        return;
      }

      const user = users.find(
        (u) =>
          u.username?.toLowerCase() === username.toLowerCase() &&
          u.password === password &&
          u.role === role
      );

      if (user) {
        onLogin(user);
      } else {
        setError("Invalid username, password, or role.");
      }

    } catch (err) {
      console.error("Login error:", err);
      setError("Cannot connect to server. Make sure JSON Server is running.");
    }

    setIsLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-icon">🎓</div>
          <h1>Student Result System</h1>
          <p>Please login to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">

          {/* Role Selection */}
          <div className="role-selector">
            <button
              type="button"
              className={`role-btn ${role === "student" ? "active" : ""}`}
              onClick={() => setRole("student")}
            >
              👨‍🎓 Student
            </button>

            <button
              type="button"
              className={`role-btn ${role === "teacher" ? "active" : ""}`}
              onClick={() => setRole("teacher")}
            >
              👨‍🏫 Teacher
            </button>
          </div>

          {error && <div className="error-alert">⚠️ {error}</div>}

          <div className="form-group">
            <label>👤 Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
          </div>

          <div className="form-group">
            <label>🔒 Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="login-btn" disabled={isLoading}>
            {isLoading ? "Logging in..." : `Login as ${role}`}
          </button>

          <p className="switch-auth">
            Don't have an account?
            <button type="button" onClick={onSignupClick}>
              Create Account
            </button>
          </p>
        </form>

        <div className="demo-credentials">
          <h4>📝 Demo Credentials</h4>
          <div className="credentials-grid">
            <div className="credential-box teacher">
              <strong>Teacher</strong>
              <p>Username: teacher1</p>
              <p>Password: teacher123</p>
            </div>
            <div className="credential-box student">
              <strong>Student</strong>
              <p>Username: rahul</p>
              <p>Password: student123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
