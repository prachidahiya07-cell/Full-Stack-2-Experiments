import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import users from "../data/users";

import "../styles/login.css";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [username, setUsername] =
    useState("student");

  const [password, setPassword] =
    useState("Student@123");

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const selectRole = (user) => {
    setUsername(user.username);
    setPassword(user.password);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      login(username, password);

      navigate("/home");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      <div className="login-orb orb-one"></div>
      <div className="login-orb orb-two"></div>

      <div className="login-container">

        {/* LEFT SIDE */}

        <section className="login-intro">

          <div className="intro-logo">
            C
          </div>

          <span className="intro-label">
            UNIVERSITY DIGITAL HUB
          </span>

          <h1>
            One portal.
            <br />
            <span>Every role.</span>
          </h1>

          <p>
            A secure university platform where
            students, parents, staff and management
            get access based on their roles.
          </p>

          <div className="security-card">

            <div className="security-icon">
              🛡️
            </div>

            <div>
              <strong>
                Role-Based Security
              </strong>

              <span>
                Your access is automatically
                controlled by your role.
              </span>
            </div>

          </div>

        </section>

        {/* RIGHT SIDE */}

        <section className="login-form-section">

          <div className="login-heading">

            <span>
              WELCOME BACK
            </span>

            <h2>
              Sign in to your portal
            </h2>

            <p>
              Select your role and continue.
            </p>

          </div>

          {/* ROLE SELECTOR */}

          <div className="role-selector">

            {users.map((item) => (
              <button
                key={item.role}
                type="button"
                className={
                  username === item.username
                    ? "role-option selected"
                    : "role-option"
                }
                onClick={() =>
                  selectRole(item)
                }
              >

                <span className="role-icon">
                  {item.icon}
                </span>

                <span>
                  {item.roleName}
                </span>

              </button>
            ))}

          </div>

          <form
            onSubmit={handleSubmit}
            className="login-form"
          >

            <label>
              Username
            </label>

            <input
              type="text"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
              placeholder="Enter username"
            />

            <label>
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Enter password"
            />

            {error && (
              <div className="login-error">
                ⚠️ {error}
              </div>
            )}

            <button
              type="submit"
              className="signin-button"
              disabled={loading}
            >
              {loading
                ? "Signing in..."
                : "Continue to Portal →"}
            </button>

          </form>

          <div className="demo-info">

            <strong>
              Demo Login
            </strong>

            <p>
              Select a role above to automatically
              load its demo credentials.
            </p>

          </div>

        </section>

      </div>

    </div>
  );
}

export default Login;