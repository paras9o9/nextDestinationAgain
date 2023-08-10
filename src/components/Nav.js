import React from "react";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  return (
    <div>
      <nav className="nav-container">
        <div className="nav-links">
          <div className="nav-link">
            <a href="#" className="link">
              Feedback
            </a>
          </div>
          <div className="nav-link">
            <a href="#" className="link">
              Tours
            </a>
          </div>
          <div className="nav-link">
            <a href="#" className="link">
              Contact us
            </a>
          </div>
        </div>
        <div className="nav-logo-container">
          <a href="#">Next Destination</a>
        </div>
        <div className="nav-toggle">
          <button type="button">
            <FaBars />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
