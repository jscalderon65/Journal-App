import React from "react";
import { notesActiveToNull } from "../../Redux/Actions/notes";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { startSaveNote } from "../../Redux/Actions/notes";
const NotesAppBar = ({ date }) => {
  const noteDate = moment(date);
  const { active } = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const handleSave = () => {
    dispatch(startSaveNote(active));
  };
  const handleOnClose = () => {
    dispatch(notesActiveToNull());
  };
  return (
    <div className="notes__appbar">
      <span className="notes__date">
        {noteDate.format("MMMM Do YYYY, h:mm:ss a")}
      </span>
      <div className="notes__options">
        <button className="mr-1 btn btn-options">Picture</button>
        <button onClick={handleSave} className="btn btn-options">
          Save
        </button>
        <button className=" btn btn-options" onClick={handleOnClose}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;
