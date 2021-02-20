import React from "react";
import { useFirebaseUser } from "my-customhook-collection";
import { firebase } from "../../Firebase/FirebaseConfig";

const Navbar = ({ OpenMenu }) => {
  const [UserInfo] = useFirebaseUser(firebase);
  const HourIcon = () => {
    let date = new Date();
    return date.getHours >= 17 ? (
      <i className="fas fa-moon"></i>
    ) : (
      <i className="fas fa-sun"></i>
    );
  };
  return (
    <div className="animate__animated animate__fadeInDown journal_navbar">
      <div className="btn btn-secondary menu-button" onClick={OpenMenu}>
        <p className="menu-button-items">☰</p>
      </div>

      {UserInfo && (
        <div className="journal__navbar-user-profile">
          <h2>
            {UserInfo.displayName} <HourIcon />
          </h2>
          <button className="btn btn-warning">Logout</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
