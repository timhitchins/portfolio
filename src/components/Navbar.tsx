import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

interface NavProps {
  isOpen: boolean;
}
function Navbar({ isOpen }: NavProps) {
  const isMobile: boolean = useMediaQuery({ query: "(max-width: 700px)" });
  const location = useLocation();

  return (
    <nav className="nav-outer-container">
      <div
        className="nav-inner-container"
        style={isOpen ? { height: "auto" } : { height: "56px" }}
      >
        <div>
          <NavLink to="/">
            <img src="" alt="Logo icon" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
