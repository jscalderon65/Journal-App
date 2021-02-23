import React from "react";
import JournalEntries from "./JournalEntries";
import {useDispatch} from 'react-redux';
import {startNewNote} from '../../Redux/Actions/notes'
const SideBar = ({ setSideBar }) => {
  const dispatch = useDispatch();
  const onCloseSideBar = () => setSideBar((item) => !item);
  const handleAddNew = ()=>{
    dispatch(startNewNote());
  }
  return (
    <aside className="animate__animated animate__fadeInLeft journal__sidebar">
      <div className="close-button-container">
        <button className="close-button mt-1" onClick={onCloseSideBar}>
        <i className="fas fa-times"></i>
        </button>
      </div>
      <div className="journal__new-entry" onClick={handleAddNew}>
        <i className="far fa-calendar-plus fa-5x"></i>
        <p className="mt-5">New entry</p>
      </div>
      <JournalEntries />
    </aside>
  );
};

export default SideBar;
