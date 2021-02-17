import React from "react";

const Navbar = ({ OpenMenu }) => {
  return (
    <div className="animate__animated animate__fadeInDown journal_navbar">
      <div className="btn btn-secondary menu-button" onClick={OpenMenu}>
      <p className="menu-button-items">☰</p>
      </div>
    </div>
  );
};

export default Navbar;
