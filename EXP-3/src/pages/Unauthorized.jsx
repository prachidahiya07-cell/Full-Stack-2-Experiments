import { Link } from "react-router-dom";

import "../styles/unauthorized.css";

function Unauthorized() {
  return (
    <div className="unauthorized-page">

      <div className="unauthorized-card">

        <div className="lock-icon">
          🔒
        </div>

        <span className="error-code">
          ERROR 403
        </span>

        <h1>
          Access Restricted
        </h1>

        <p>
          Your current role does not have permission
          to access this portal. Please return to your
          dashboard and select an available service.
        </p>

        <Link
          to="/home"
          className="return-button"
        >
          ← Return to Dashboard
        </Link>

      </div>

    </div>
  );
}

export default Unauthorized;