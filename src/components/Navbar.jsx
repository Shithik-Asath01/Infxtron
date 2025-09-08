import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">INXTRON25</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/event">Events</Link>
        <Link to="/">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
