import React, { useState } from "react";
import "../../Styles/styles.scss";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import NothingSelected from './NothingSelected'
const JournalScreen = () => {
  const [sideBar, setSideBar] = useState(true);
  const OpenMenu = () => setSideBar(!sideBar);
  return (
    <div
      className={
        sideBar ? "journal__main-content" : "journal__second-main-content"
      }
    >
      {sideBar ? (
        <SideBar setSideBar={setSideBar} />
      ) : (
        <Navbar OpenMenu={OpenMenu} />
      )}
      <main className="journal__main">
        <NothingSelected />
      </main>
    </div>
  );
};

export default JournalScreen;
