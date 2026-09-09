import { Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import "../styles/navbar.css";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="navbar">
      <Link to="/home" className="navbar-brand">
        <div className="brand-logo">C</div>
        <div className="brand-text">
          <h2>Campus Portal</h2>
          <span>UNIVERSITY DIGITAL HUB</span>
        </div>
      </Link>

      <div className="navbar-right">
        <div className="navbar-user">
          <div className="navbar-avatar">
            {user?.name?.charAt(0) || "U"}
          </div>
          <div className="navbar-user-text">
            <strong>{user?.name || "User"}</strong>
            <span>{user?.role || "guest"}</span>
          </div>
        </div>

        <button type="button" className="logout-button" onClick={logout}>
          Sign out
        </button>
      </div>
    </header>
  );
}

export default Navbar;