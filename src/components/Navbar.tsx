import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styles from "../styles/global.module.scss";

interface NavProps {
  isOpen: boolean;
}

const hashLinks: string[] = ["About Me", "Portfolio", "CV", "Contact"];

function Navbar({ isOpen }: NavProps) {
  const [activeLink, setActiveLink] = useState<null | string>(null);
  const [drawerIsOpen, toggleNavDrawer] = useState<boolean>(false);
  const isMobile = useMediaQuery({ query: `(max-width: ${styles.mobileBreak}` });
  const location = useLocation();

  return (
    <nav className="nav-outer-container">
      <div
        className="nav-inner-container"
        style={isOpen ? { height: "auto" } : { height: "56px" }}
      >
        <div>
          <NavLink to="/" exact>
            <img
              src="https://timsportfolio2020.s3-us-west-2.amazonaws.com/horizontal-dark-color-270x72.png"
              alt="Logo icon"
            />
          </NavLink>
        </div>
        <div></div>
        {hashLinks.map((link) => {
          return (
            <div
              key={link}
              className={activeLink === link ? "nav-link-active" : "nav-link"}
            >
              <HashLink
                to={`#${link.replace(" ", "-").toLowerCase()}`}
                onClick={() => setActiveLink(link)}
              >
                {link}
              </HashLink>
            </div>
          );
        })}

        <div
          className="hamburger-button"
          onClick={() => {
            return null;
          }}
        >
          &#x2630;
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
