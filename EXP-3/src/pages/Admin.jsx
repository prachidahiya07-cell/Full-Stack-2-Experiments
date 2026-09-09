import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import "../styles/dashboard.css";

function Admin() {

  const [activeModule, setActiveModule] =
    useState(null);

  const modules = [
    {
      id: "users",
      icon: "👥",
      title: "User Management",
      description:
        "Manage all university accounts."
    },

    {
      id: "analytics",
      icon: "📈",
      title: "Analytics",
      description:
        "View university performance statistics."
    },

    {
      id: "reports",
      icon: "📑",
      title: "Reports",
      description:
        "Generate academic and administrative reports."
    },

    {
      id: "settings",
      icon: "⚙️",
      title: "System Settings",
      description:
        "Manage portal configuration."
    }
  ];

  const renderModule = () => {

    if (activeModule === "users") {
      return (
        <div className="module-panel">

          <h2>👥 User Management</h2>

          <table>

            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Aarav Sharma</td>
                <td>Student</td>
                <td>Active</td>
              </tr>

              <tr>
                <td>Neha Sharma</td>
                <td>Parent</td>
                <td>Active</td>
              </tr>

              <tr>
                <td>Rahul Mehta</td>
                <td>Staff</td>
                <td>Active</td>
              </tr>

              <tr>
                <td>Priya Kapoor</td>
                <td>Management</td>
                <td>Active</td>
              </tr>

            </tbody>

          </table>

        </div>
      );
    }

    if (activeModule === "analytics") {
      return (
        <div className="module-panel">

          <h2>📈 University Analytics</h2>

          <div className="student-info-grid">

            <div>
              <small>STUDENTS</small>
              <strong>2,450</strong>
            </div>

            <div>
              <small>STAFF</small>
              <strong>180</strong>
            </div>

            <div>
              <small>AVG ATTENDANCE</small>
              <strong>86%</strong>
            </div>

            <div>
              <small>AVG CGPA</small>
              <strong>8.1</strong>
            </div>

          </div>

        </div>
      );
    }

    if (activeModule === "reports") {
      return (
        <div className="module-panel">

          <h2>📑 Reports</h2>

          <div className="course-list">

            <div>
              📄 Student Performance Report
            </div>

            <div>
              📄 Attendance Report
            </div>

            <div>
              📄 Faculty Activity Report
            </div>

            <div>
              📄 Financial Report
            </div>

          </div>

        </div>
      );
    }

    if (activeModule === "settings") {
      return (
        <div className="module-panel">

          <h2>⚙️ System Settings</h2>

          <div className="course-list">

            <div>
              🔐 Authentication Settings
            </div>

            <div>
              🛡️ Role Permissions
            </div>

            <div>
              🔔 Notification Settings
            </div>

            <div>
              💾 Backup & Recovery
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
              Monitor and manage university operations.
            </p>

          </div>

        </section>

        <h2 className="feature-title">
          Management Services
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

export default Admin;