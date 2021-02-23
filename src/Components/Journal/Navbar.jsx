import React from "react";
import { Popconfirm } from "antd";
import { FirebaseLogOut } from "../../Redux/Actions/auth";
import { useDispatch, useSelector } from "react-redux";
const Navbar = ({ OpenMenu }) => {
  const dispatch = useDispatch();
  const {
    auth: { name },
    
  } = useSelector((state) => state);
  const handleLogout = () => {
    dispatch(FirebaseLogOut());
  };
  const HourIcon = () => {
    let date = new Date();
    return date.getHours() >= 17 ? (
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

      {name && (
        <div className="journal__navbar-user-profile">
          <h2>
            {name} <HourIcon />
          </h2>
          <Popconfirm
            title="Do you want to log out?"
            onConfirm={handleLogout}
            okText="Yes"
            cancelText="No"
          >
            <button className="btn btn-warning">Logout</button>
          </Popconfirm>
        </div>
      )}
    </div>
  );
};

export default Navbar;
