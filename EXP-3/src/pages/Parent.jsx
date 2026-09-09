import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import "../styles/dashboard.css";

function Parent() {

  const [activeModule, setActiveModule] =
    useState(null);

  const modules = [
    {
      id: "attendance",
      icon: "📅",
      title: "Child Attendance",
      description:
        "Monitor your child's attendance."
    },

    {
      id: "performance",
      icon: "📊",
      title: "Academic Performance",
      description:
        "View marks and academic progress."
    },

    {
      id: "fees",
      icon: "💳",
      title: "Fee Status",
      description:
        "Check current fee payment status."
    },

    {
      id: "messages",
      icon: "💬",
      title: "Messages",
      description:
        "Communicate with teachers."
    }
  ];

  const renderModule = () => {

    if (activeModule === "attendance") {
      return (
        <div className="module-panel">

          <h2>📅 Child Attendance</h2>

          <div className="attendance-summary">

            <strong>87%</strong>

            <span>
              Overall Attendance
            </span>

          </div>

          <table>

            <thead>
              <tr>
                <th>Subject</th>
                <th>Attendance</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Machine Learning</td>
                <td>90%</td>
              </tr>

              <tr>
                <td>Soft Computing</td>
                <td>87%</td>
              </tr>

              <tr>
                <td>Database Systems</td>
                <td>84%</td>
              </tr>

            </tbody>

          </table>

        </div>
      );
    }

    if (activeModule === "performance") {
      return (
        <div className="module-panel">

          <h2>📊 Academic Performance</h2>

          <table>

            <thead>
              <tr>
                <th>Subject</th>
                <th>Grade</th>
                <th>Marks</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Machine Learning</td>
                <td>A+</td>
                <td>90</td>
              </tr>

              <tr>
                <td>Soft Computing</td>
                <td>A</td>
                <td>85</td>
              </tr>

              <tr>
                <td>Database Systems</td>
                <td>A+</td>
                <td>88</td>
              </tr>

            </tbody>

          </table>

        </div>
      );
    }

    if (activeModule === "fees") {
      return (
        <div className="module-panel">

          <h2>💳 Fee Status</h2>

          <div className="course-list">

            <div>
              Tuition Fee — ₹75,000
              <strong> ✓ Paid</strong>
            </div>

            <div>
              Examination Fee — ₹3,500
              <strong> ✓ Paid</strong>
            </div>

            <div>
              Library Fee — ₹2,000
              <strong> ✓ Paid</strong>
            </div>

          </div>

        </div>
      );
    }

    if (activeModule === "messages") {
      return (
        <div className="module-panel">

          <h2>💬 Messages</h2>

          <div className="assignment-list">

            <div>
              <strong>
                Class Teacher
              </strong>

              <span>
                Parent-teacher meeting scheduled
                for 20 August.
              </span>
            </div>

            <div>
              <strong>
                Academic Office
              </strong>

              <span>
                Mid-semester results are now available.
              </span>
            </div>

          </div>

        </div>
      );
    }

    return null;
  };

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
            👨‍👩‍👧
          </div>

          <div>

            <span>
              PARENT PORTAL
            </span>

            <h1>
              Family Dashboard
            </h1>

            <p>
              Monitor your child's academic journey.
            </p>

          </div>

        </section>

        <h2 className="feature-title">
          Parent Services
        </h2>

        <div className="feature-grid">

          {modules.map((module) => (

            <div
              className="feature-card"
              key={module.id}
              onClick={() =>
                setActiveModule(module.id)
              }
            >

              <div className="feature-icon">
                {module.icon}
              </div>

              <h3>
                {module.title}
              </h3>

              <p>
                {module.description}
              </p>

              <button>
                Open →
              </button>

            </div>

          ))}

        </div>

        {activeModule && renderModule()}

      </main>

    </div>
  );
}

export default Parent;