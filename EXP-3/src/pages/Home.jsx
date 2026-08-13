import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

import "../styles/dashboard.css";

function Home() {
  const { user } = useAuth();

  const portals = [
    {
      id: "student",
      title: "Student Portal",
      icon: "🎓",
      description:
        "View attendance, grades, courses and assignments.",
      access: [
        "student",
        "parent",
        "staff",
        "management",
      ],
    },

    {
      id: "parent",
      title: "Parent Portal",
      icon: "👨‍👩‍👧",
      description:
        "Monitor attendance, academic performance, fees and messages.",
      access: [
        "parent",
        "staff",
        "management",
      ],
    },

    {
      id: "staff",
      title: "Staff Portal",
      icon: "🧑‍🏫",
      description:
        "Manage students, attendance, grades and class schedules.",
      access: [
        "staff",
        "management",
      ],
    },

    {
      id: "management",
      title: "Management Portal",
      icon: "🏢",
      description:
        "Manage users, analytics, reports and system settings.",
      access: [
        "management",
      ],
    },
  ];

  // Show only portals available to the logged-in user's role
  const availablePortals = portals.filter((portal) =>
    portal.access.includes(user?.role)
  );

  return (
    <div className="dashboard-page">

      {/* NAVBAR */}
      <Navbar />

      <main className="dashboard-content">

        {/* HEADER */}
        <section className="dashboard-hero">

          <div className="dashboard-hero-icon">
            🎓
          </div>

          <div>

            <span>
              UNIVERSITY DIGITAL CAMPUS
            </span>

            <h1>
              Welcome, {user?.name || "User"}
            </h1>

            <p>
              Your personalized academic and
              administrative workspace.
            </p>

          </div>

        </section>

        {/* USER INFORMATION */}
        <section className="user-summary">

          <div className="user-summary-card">

            <span>
              LOGGED IN AS
            </span>

            <strong>
              {user?.name || "Unknown User"}
            </strong>

          </div>

          <div className="user-summary-card">

            <span>
              ROLE
            </span>

            <strong>
              {user?.role
                ? user.role.charAt(0).toUpperCase() +
                  user.role.slice(1)
                : "User"}
            </strong>

          </div>

          <div className="user-summary-card">

            <span>
              ACCESS LEVEL
            </span>

            <strong>
              {user?.role === "management"
                ? "Level 4"
                : user?.role === "staff"
                ? "Level 3"
                : user?.role === "parent"
                ? "Level 2"
                : "Level 1"}
            </strong>

          </div>

        </section>

        {/* PORTAL SECTION */}
        <section>

          <div className="section-heading">

            <div>

              <span>
                ROLE-BASED SERVICES
              </span>

              <h2>
                Your Available Portals
              </h2>

            </div>

            <p>
              Access is determined by your role.
            </p>

          </div>

          {/* PORTAL CARDS */}
          <div className="portal-grid">

            {availablePortals.length > 0 ? (

              availablePortals.map((portal) => (

                <Link
                  to={`/portal/${portal.id}`}
                  className="portal-card"
                  key={portal.id}
                >

                  <div className="portal-icon">
                    {portal.icon}
                  </div>

                  <div className="portal-card-content">

                    <span className="portal-label">
                      AUTHORIZED ACCESS
                    </span>

                    <h3>
                      {portal.title}
                    </h3>

                    <p>
                      {portal.description}
                    </p>

                    <div className="portal-open">
                      Open Portal →
                    </div>

                  </div>

                </Link>

              ))

            ) : (

              <div className="no-access-card">

                <div>
                  🔒
                </div>

                <h3>
                  No Portal Available
                </h3>

                <p>
                  Your current role does not have
                  access to any portal.
                </p>

              </div>

            )}

          </div>

        </section>

        {/* SECURITY INFORMATION */}
        <section className="security-card">

          <div className="security-icon">
            🛡️
          </div>

          <div>

            <span>
              ACCESS CONTROL
            </span>

            <h3>
              Role-Based Access is Active
            </h3>

            <p>
              Your access is controlled according to
              your assigned role. Unauthorized portal
              access is automatically restricted.
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Home;