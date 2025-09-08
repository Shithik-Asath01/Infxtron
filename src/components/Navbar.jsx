import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="brand-link">
            <span className="brand-text">INFXTRON</span>
            <span className="brand-year">25</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="nav-links desktop-nav">
          <Link to="/" className="nav-link">
            <i className="bx bx-home"></i>
            <span>Home</span>
          </Link>
          <Link to="#events" className="nav-link">
            <i className="bx bx-calendar-event"></i>
            <span>Events</span>
          </Link>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSd4ANLjWVQzK_hyPUU-E6lVvrKWOoayVYzSU4rJulPDjnWXOw/closedform" 
            target="_blank" 
            className="nav-link register-btn"
          >
            <i className="bx bx-user-plus"></i>
            <span>Register</span>
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-nav-content">
            <Link to="/" className="mobile-nav-link" onClick={toggleMenu}>
              <i className="bx bx-home"></i>
              <span>Home</span>
            </Link>
            <Link to="#events" className="mobile-nav-link" onClick={toggleMenu}>
              <i className="bx bx-calendar-event"></i>
              <span>Events</span>
            </Link>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSd4ANLjWVQzK_hyPUU-E6lVvrKWOoayVYzSU4rJulPDjnWXOw/closedform" 
              target="_blank" 
              className="mobile-nav-link register-btn"
              onClick={toggleMenu}
            >
              <i className="bx bx-user-plus"></i>
              <span>Register Now</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && <div className="mobile-menu-overlay" onClick={toggleMenu}></div>}
      </div>
    </nav>
  );
}

export default Navbar;