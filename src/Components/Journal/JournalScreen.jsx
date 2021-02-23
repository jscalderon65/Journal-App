import React, { useState } from "react";
import "../../Styles/styles.scss";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import NothingSelected from "./NothingSelected";
import NoteScreen from "../notes/NoteScreen";
import { useSelector } from "react-redux";
const JournalScreen = () => {
  const { active } = useSelector((state) => state.notes);
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
        {active ? <NoteScreen /> : <NothingSelected />}
      </main>
    </div>
  );
};

export default JournalScreen;
