import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;