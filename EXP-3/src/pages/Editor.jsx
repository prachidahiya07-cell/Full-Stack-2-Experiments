import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import "../styles/dashboard.css";

function Editor() {

  const [activeModule, setActiveModule] =
    useState(null);

  const modules = [
    {
      id: "students",
      icon: "👨‍🎓",
      title: "Manage Students",
      description:
        "View and manage student records."
    },

    {
      id: "attendance",
      icon: "📅",
      title: "Mark Attendance",
      description:
        "Record today's student attendance."
    },

    {
      id: "grades",
      icon: "📝",
      title: "Manage Grades",
      description:
        "Enter and update student grades."
    },

    {
      id: "schedule",
      icon: "🗓️",
      title: "Class Schedule",
      description:
        "View your teaching schedule."
    }
  ];

  const renderModule = () => {

    if (activeModule === "students") {
      return (
        <div className="module-panel">

          <h2>👨‍🎓 Student Management</h2>

          <table>

            <thead>
              <tr>
                <th>Name</th>
                <th>Roll No.</th>
                <th>Program</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Aarav Sharma</td>
                <td>24BAI7001</td>
                <td>AIML</td>
                <td>Active</td>
              </tr>

              <tr>
                <td>Prachi Dahiya</td>
                <td>24BAI70816</td>
                <td>AIML</td>
                <td>Active</td>
              </tr>

              <tr>
                <td>Rahul Verma</td>
                <td>24BAI7012</td>
                <td>AIML</td>
                <td>Active</td>
              </tr>

            </tbody>

          </table>

        </div>
      );
    }

    if (activeModule === "attendance") {
      return (
        <div className="module-panel">

          <h2>📅 Mark Attendance</h2>

          <div className="course-list">

            <div>
              Aarav Sharma
              <button>Present</button>
            </div>

            <div>
              Prachi Dahiya
              <button>Present</button>
            </div>

            <div>
              Rahul Verma
              <button>Absent</button>
            </div>

          </div>

        </div>
      );
    }

    if (activeModule === "grades") {
      return (
        <div className="module-panel">

          <h2>📝 Grade Management</h2>

          <table>

            <thead>
              <tr>
                <th>Student</th>
                <th>Subject</th>
                <th>Grade</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Aarav Sharma</td>
                <td>Machine Learning</td>
                <td>A+</td>
              </tr>

              <tr>
                <td>Prachi Dahiya</td>
                <td>Machine Learning</td>
                <td>A</td>
              </tr>

            </tbody>

          </table>

        </div>
      );
    }

    if (activeModule === "schedule") {
      return (
        <div className="module-panel">

          <h2>🗓️ Today's Schedule</h2>

          <div className="course-list">

            <div>
              09:00 AM — Machine Learning
            </div>

            <div>
              11:00 AM — Soft Computing
            </div>

            <div>
              02:00 PM — Database Systems
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
              Manage students, attendance and grades.
            </p>

          </div>

        </section>

        <h2 className="feature-title">
          Staff Services
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

export default Editor;