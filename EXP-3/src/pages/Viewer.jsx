import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import "../styles/dashboard.css";

function Viewer() {
  const features = [
    {
      icon: "📚",
      title: "My Courses",
      description: "View enrolled subjects and course details."
    },
    {
      icon: "📅",
      title: "Attendance",
      description: "Check your current attendance percentage."
    },
    {
      icon: "📊",
      title: "Grades",
      description: "View examination results and academic performance."
    },
    {
      icon: "📥",
      title: "Study Resources",
      description: "Access notes, assignments and learning material."
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

        <section className="dashboard-hero">

          <div className="dashboard-hero-icon">
            🎓
          </div>

          <div>
            <span>
              STUDENT PORTAL
            </span>

            <h1>
              Academic Space
            </h1>

            <p>
              Everything you need to manage
              your academic journey.
            </p>
          </div>

        </section>

        <h2 className="feature-title">
          Student Services
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
                  View Details →
                </button>

              </div>
            )
          )}

        </div>

      </main>

    </div>
  );
}

export default Viewer;