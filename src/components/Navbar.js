import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { StyledNav } from "./styles/Navbar.styled";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const navLinksContainerRef = useRef(null);
  const navLinksRef = useRef(null);

  useEffect(() => {
    const linksHeight = navLinksRef.current.getBoundingClientRect().height;
    console.log(linksHeight);
    if (showLinks) {
      navLinksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      navLinksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <StyledNav>
      <header>
        <div class="social-icons">
          <ul>
            <li>
              <FaInstagram />
            </li>
            <li>
              <SiGmail />
            </li>
          </ul>
        </div>
        <div className="nav-header">
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
          <div class="logo">
            <span>Your Site Title</span>
          </div>
        </div>
        <nav
          ref={navLinksContainerRef}
          className="links-container show-container"
        >
          <ul class="links" ref={navLinksRef}>
            <li class="link">
              <a href="#">Blog</a>
            </li>
            <li class="link">
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </header>
    </StyledNav>
  );
};

export default Navbar;
