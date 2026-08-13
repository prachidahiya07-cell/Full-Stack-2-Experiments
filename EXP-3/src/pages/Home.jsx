import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import "../styles/home.css";

function Home() {
  const { user } = useAuth();

  const portals = [
    {
      id: "student",
      title: "Student Portal",
      icon: "🎓",
      description:
        "Courses, attendance, grades and academic resources.",
      roles: [
        "student",
        "parent",
        "staff",
        "management"
      ]
    },

    {
      id: "parent",
      title: "Parent Portal",
      icon: "👨‍👩‍👧",
      description:
        "Monitor student progress, attendance and communication.",
      roles: [
        "parent",
        "staff",
        "management"
      ]
    },

    {
      id: "staff",
      title: "Staff Portal",
      icon: "🧑‍🏫",
      description:
        "Manage students, classes and academic activities.",
      roles: [
        "staff",
        "management"
      ]
    },

    {
      id: "management",
      title: "Management Portal",
      icon: "🏢",
      description:
        "University administration and system controls.",
      roles: [
        "management"
      ]
    }
  ];

  const accessiblePortals =
    portals.filter((portal) =>
      portal.roles.includes(user.role)
    );

  return (
    <div className="home-page">

      <Navbar />

      <main className="home-content">

        {/* WELCOME */}

        <section className="welcome-card">

          <div className="welcome-text">

            <span>
              {user.icon} {user.roleName} PORTAL
            </span>

            <h1>
              Welcome, {user.name.split(" ")[0]} 👋
            </h1>

            <p>
              {user.description}
            </p>

          </div>

          <div className="access-level">

            <small>
              ACCESS LEVEL
            </small>

            <strong>
              {user.accessLevel}
            </strong>

            <span>
              of 4
            </span>

          </div>

        </section>

        {/* STATUS */}

        <section className="status-grid">

          <div className="status-card">

            <div className="status-icon">
              🔐
            </div>

            <div>
              <small>
                AUTHENTICATION
              </small>

              <strong>
                Verified
              </strong>
            </div>

          </div>

          <div className="status-card">

            <div className="status-icon">
              🛡️
            </div>

            <div>
              <small>
                ROLE PROTECTION
              </small>

              <strong>
                RBAC Active
              </strong>
            </div>

          </div>

          <div className="status-card">

            <div className="status-icon">
              ⚡
            </div>

            <div>
              <small>
                SESSION
              </small>

              <strong>
                Active
              </strong>
            </div>

          </div>

        </section>

        {/* PORTALS */}

        <section className="portal-section">

          <div className="section-heading">

            <div>
              <span>
                YOUR ACCESS
              </span>

              <h2>
                Available Portals
              </h2>

              <p>
                Your available services are determined
                by your assigned role.
              </p>
            </div>

            <div className="portal-count">
              {accessiblePortals.length}
              <span>
                available
              </span>
            </div>

          </div>

          <div className="portal-grid">

            {accessiblePortals.map(
              (portal) => (
                <div
                  className="portal-card"
                  key={portal.id}
                >

                  <div className="portal-top">

                    <div className="portal-icon">
                      {portal.icon}
                    </div>

                    <span className="available-tag">
                      ● ACCESSIBLE
                    </span>

                  </div>

                  <h3>
                    {portal.title}
                  </h3>

                  <p>
                    {portal.description}
                  </p>

                  <Link
                    to={`/portal/${portal.id}`}
                    className="portal-link"
                  >
                    Open Portal
                    <span>→</span>
                  </Link>

                </div>
              )
            )}

          </div>

        </section>

        {/* SECURITY */}

        <div className="secure-banner">

          <div className="secure-banner-icon">
            🔒
          </div>

          <div>

            <strong>
              Secure Session
            </strong>

            <p>
              Your identity is verified and portal
              access is protected by role-based
              authorization.
            </p>

          </div>

          <span className="secure-status">
            ● SECURE
          </span>

        </div>

      </main>

    </div>
  );
}

export default Home;