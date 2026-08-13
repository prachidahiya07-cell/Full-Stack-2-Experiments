import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import "../styles/dashboard.css";

function Editor() {
  const features = [
    {
      icon: "👨‍🎓",
      title: "Student Management",
      description: "View and manage student information."
    },
    {
      icon: "📋",
      title: "Attendance",
      description: "Record and monitor student attendance."
    },
    {
      icon: "📝",
      title: "Grade Management",
      description: "Upload and manage academic grades."
    },
    {
      icon: "🏫",
      title: "Class Management",
      description: "Manage classes, schedules and activities."
    }
  ];

  return (
    <div className="dashboard-page">

      <Navbar />

      <main className="dashboard-content">

        <Link
          to="/home"
          className="back-button"
        >
          ← Back to Dashboard
        </Link>

        <section className="dashboard-hero staff-hero">

          <div className="dashboard-hero-icon">
            🧑‍🏫
          </div>

          <div>
            <span>
              STAFF PORTAL
            </span>

            <h1>
              Faculty Workspace
            </h1>

            <p>
              Manage academic activities and
              student information.
            </p>
          </div>

        </section>

        <h2 className="feature-title">
          Staff Services
        </h2>

        <div className="feature-grid">

          {features.map(
            (feature, index) => (
              <div
                className="feature-card"
                key={feature.title}
              >

                <div className="feature-number">
                  0{index + 1}
                </div>

                <div className="feature-icon">
                  {feature.icon}
                </div>

                <h3>
                  {feature.title}
                </h3>

                <p>
                  {feature.description}
                </p>

                <button>
                  Manage →
                </button>

              </div>
            )
          )}

        </div>

      </main>

    </div>
  );
}

export default Editor;