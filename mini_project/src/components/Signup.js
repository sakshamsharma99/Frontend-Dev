import React, { useState } from "react";
import "./Signup.css"; // ← Create this CSS file (I'll give it below)

function Signup({ onBackToLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!username.trim() || !password.trim()) {
      setError("Username and password are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3002/users");

      if (!res.ok) {
        setError("Failed to connect to JSON Server.");
        return;
      }

      const users = await res.json();

      const exists = users.find(
        (u) => u.username?.toLowerCase() === username.toLowerCase()
      );

      if (exists) {
        setError("Username already exists!");
        return;
      }

      const addRes = await fetch("http://localhost:3002/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, role }),
      });

      if (!addRes.ok) {
        setError("Failed to create account.");
        return;
      }

      setSuccess("Account created successfully! Redirecting...");

      setTimeout(() => onBackToLogin(), 1200);
    } catch (err) {
      console.error("Signup error:", err);
      setError("Error connecting to server.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <div className="signup-icon">📝</div>
                  <h1 style={{ color: "black"}}>Create Account</h1>
          <p>Register to continue</p>
        </div>

        {error && <div className="error-alert">⚠️ {error}</div>}
        {success && <div className="success-alert">✅ {success}</div>}

        <form onSubmit={handleSignup} className="signup-form">
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

          {/* Role Buttons Same Style as Login */}
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

          <button type="submit" className="signup-btn">
            Create Account
          </button>

          <p className="switch-auth">
            Already have an account?
            <button type="button" onClick={onBackToLogin}>
              Go to Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
