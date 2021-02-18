import React from "react";
import JournalEntries from "./JournalEntries";

const SideBar = ({ setSideBar }) => {
  const onCloseSideBar = () => setSideBar((item) => !item);
  return (
    <aside className="animate__animated animate__fadeInLeft journal__sidebar">
      <div className="close-button-container">
        <button className="close-button mt-1" onClick={onCloseSideBar}>
        <i className="fas fa-times"></i>
        </button>
      </div>
      <div className="journal__new-entry">
        <i className="far fa-calendar-plus fa-5x"></i>
        <br />
        <p className="mt-5">New entry</p>
      </div>
      <JournalEntries />
    </aside>
  );
};

export default SideBar;
