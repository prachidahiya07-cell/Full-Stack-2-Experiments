import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import "../styles/dashboard.css";

function Admin() {
  const features = [
    {
      icon: "👥",
      title: "User Management",
      description: "Manage students, parents and staff accounts."
    },
    {
      icon: "📈",
      title: "Analytics",
      description: "View university performance and reports."
    },
    {
      icon: "⚙️",
      title: "System Settings",
      description: "Configure university portal settings."
    },
    {
      icon: "📑",
      title: "Reports",
      description: "Generate administrative and academic reports."
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

        <section className="dashboard-hero admin-hero">

          <div className="dashboard-hero-icon">
            🏢
          </div>

          <div>
            <span>
              MANAGEMENT PORTAL
            </span>

            <h1>
              Administration Hub
            </h1>

            <p>
              Complete control over university
              operations and system resources.
            </p>
          </div>

        </section>

        <h2 className="feature-title">
          Management Services
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
                  Open Module →
                </button>

              </div>
            )
          )}

        </div>

      </main>

    </div>
  );
}

export default Admin;