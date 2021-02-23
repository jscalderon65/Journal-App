import React from "react";
import { notesActiveToNull } from "../../Redux/Actions/notes";
import { useDispatch, useSelector } from "react-redux";
import { Popconfirm, Tooltip } from "antd";
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
        <Tooltip placement="bottom" title={"Upload an image"}>
          <button className="mr-1 btn btn-options">
            <i class="fas fa-images"></i>
          </button>
        </Tooltip>
        <Tooltip placement="bottom" title={"Save changes"}>
          <button onClick={handleSave} className="btn btn-options">
            <i className="far fa-save"></i>
          </button>
        </Tooltip>
        <Popconfirm
          icon={<i className="fas fa-question-circle" style={{ color: "red" }}></i>}
          title="Do you want to delete this note?"
          okText="Yes"
          cancelText="No"
        >
          <button className="btn btn-options">
            <i className="fas fa-trash-alt"></i>
          </button>
        </Popconfirm>
        <button className=" btn btn-options" onClick={handleOnClose}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;
