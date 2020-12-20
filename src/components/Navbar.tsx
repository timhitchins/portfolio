import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
// import { useLocation } from "react-router-dom";

interface NavProps {
  isOpen: boolean;
}

function Navbar({ isOpen }: NavProps) {
  const isMobile: boolean = useMediaQuery({ query: "(max-width: 700px)" });
//   const { pathname } = useLocation();

  return <nav className="nav-outer-container">HELLO</nav>;
}

export default Navbar;
