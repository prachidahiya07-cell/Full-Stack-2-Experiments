import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import "../styles/dashboard.css";

function Viewer() {

  const [activeModule, setActiveModule] =
    useState(null);

  const studentData = {
    name: "Aarav Sharma",
    rollNo: "24BAI7001",
    course: "B.Tech AIML",
    semester: "6th Semester",
    attendance: 87,
    cgpa: 8.6
  };

  const modules = [
    {
      id: "attendance",
      icon: "📅",
      title: "View Attendance",
      description:
        "Check subject-wise attendance."
    },

    {
      id: "grades",
      icon: "📊",
      title: "View Grades",
      description:
        "Check your academic performance."
    },

    {
      id: "courses",
      icon: "📚",
      title: "My Courses",
      description:
        "View enrolled courses."
    },

    {
      id: "assignments",
      icon: "📝",
      title: "Assignments",
      description:
        "View pending assignments."
    }
  ];

  const renderModule = () => {

    if (activeModule === "attendance") {
      return (
        <div className="module-panel">

          <h2>📅 Attendance</h2>

          <div className="attendance-summary">

            <div>
              <strong>
                {studentData.attendance}%
              </strong>

              <span>
                Overall Attendance
              </span>
            </div>

          </div>

          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Present</th>
                <th>Total</th>
                <th>Percentage</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Machine Learning</td>
                <td>38</td>
                <td>42</td>
                <td>90%</td>
              </tr>

              <tr>
                <td>Soft Computing</td>
                <td>35</td>
                <td>40</td>
                <td>87.5%</td>
              </tr>

              <tr>
                <td>Database Systems</td>
                <td>32</td>
                <td>38</td>
                <td>84%</td>
              </tr>

              <tr>
                <td>Web Development</td>
                <td>36</td>
                <td>40</td>
                <td>90%</td>
              </tr>

            </tbody>
          </table>

        </div>
      );
    }

    if (activeModule === "grades") {
      return (
        <div className="module-panel">

          <h2>📊 Academic Grades</h2>

          <table>

            <thead>
              <tr>
                <th>Subject</th>
                <th>Internal</th>
                <th>External</th>
                <th>Grade</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Machine Learning</td>
                <td>28/30</td>
                <td>62/70</td>
                <td>A+</td>
              </tr>

              <tr>
                <td>Soft Computing</td>
                <td>26/30</td>
                <td>59/70</td>
                <td>A</td>
              </tr>

              <tr>
                <td>Database Systems</td>
                <td>27/30</td>
                <td>61/70</td>
                <td>A+</td>
              </tr>

            </tbody>

          </table>

          <div className="cgpa-box">
            Current CGPA: <strong>{studentData.cgpa}</strong>
          </div>

        </div>
      );
    }

    if (activeModule === "courses") {
      return (
        <div className="module-panel">

          <h2>📚 My Courses</h2>

          <div className="course-list">

            <div>Machine Learning — ML301</div>

            <div>Soft Computing — SC302</div>

            <div>Database Systems — DB303</div>

            <div>Web Development — WD304</div>

          </div>

        </div>
      );
    }

    if (activeModule === "assignments") {
      return (
        <div className="module-panel">

          <h2>📝 Assignments</h2>

          <div className="assignment-list">

            <div>
              <strong>Soft Computing Lab</strong>
              <span>Due: 15 August 2026</span>
            </div>

            <div>
              <strong>Database Project</strong>
              <span>Due: 18 August 2026</span>
            </div>

            <div>
              <strong>ML Classification Task</strong>
              <span>Due: 20 August 2026</span>
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
              Welcome back, {studentData.name}.
            </p>

          </div>

        </section>

        {/* STUDENT INFO */}

        <div className="student-info-grid">

          <div>
            <small>ROLL NUMBER</small>
            <strong>{studentData.rollNo}</strong>
          </div>

          <div>
            <small>PROGRAM</small>
            <strong>{studentData.course}</strong>
          </div>

          <div>
            <small>SEMESTER</small>
            <strong>{studentData.semester}</strong>
          </div>

          <div>
            <small>CGPA</small>
            <strong>{studentData.cgpa}</strong>
          </div>

        </div>

        <h2 className="feature-title">
          Student Services
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

export default Viewer;