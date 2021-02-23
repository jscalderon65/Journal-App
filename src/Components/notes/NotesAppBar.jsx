import React, { useState } from "react";
import { notesActiveToNull, startDeleting, startUpLoading } from "../../Redux/Actions/notes";
import { useDispatch, useSelector } from "react-redux";
import { Popconfirm, Tooltip, Modal } from "antd";
import moment from "moment";
import { startSaveNote } from "../../Redux/Actions/notes";
const NotesAppBar = ({ date }) => {
  const { active } = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(startDeleting(active.id));
  };
  const [{ file, isFile }, setPictureUploadSecure] = useState({
    file: [],
    isFile: false,
  });
  const openInputFile = () => {
    document.querySelector("#file").click();
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleUploadPicture = (e) => {
    console.log(e.target.files[0]);
    setPictureUploadSecure({
      file: e.target.files[0],
      isFile: true,
    });
  };
  const uploadPicture = () => {
    dispatch(startUpLoading(file, handleCancel));
  };
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    setPictureUploadSecure({
      file: [],
      isFile: false,
    });
    document.querySelector("#file").value = "";
  };
  const noteDate = moment(date);
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
          <button onClick={showModal} className="mr-1 btn btn-options">
            <i className="fas fa-images"></i>
          </button>
        </Tooltip>
        <Tooltip placement="bottom" title={"Save changes"}>
          <button onClick={handleSave} className="btn btn-options">
            <i className="far fa-save"></i>
          </button>
        </Tooltip>
        <Popconfirm
          onConfirm={handleDelete}
          icon={
            <i className="fas fa-question-circle" style={{ color: "red" }}></i>
          }
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
      <Modal
        title={"Image Upload"}
        header={[]}
        onCancel={handleCancel}
        visible={isModalVisible}
        footer={[
          isFile ? (
            <button
              className="btn btn-primary"
              key="Upload"
              onClick={uploadPicture}
            >
              <i className="fas fa-check-circle"></i> Upload
            </button>
          ) : null,
          <button
            className="btn btn-primary"
            key="Cancel"
            onClick={handleCancel}
          >
            <i className="fas fa-window-close"></i> Cancel
          </button>,
        ]}
      >
        <input
          className="file"
          name="file"
          onChange={handleUploadPicture}
          type="file"
          id="file"
          accept="image/*"
        />
        <button
          onClick={openInputFile}
          className="btn btn-primary"
          value="Cargar"
          style={{ width: "100%" }}
        >
          <i className="fas fa-upload" style={{ marginRight: "20px" }}></i>
          {isFile ? file.name : "Choose an image"}
        </button>
      </Modal>
    </div>
  );
};

export default NotesAppBar;
