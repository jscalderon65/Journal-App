import { db } from "../../Firebase/FirebaseConfig";
import { types } from "../Types/Types.js";
import { message } from "antd";
import "antd/dist/antd.css";
const { error,loading, success } = message;
const notesActiveToNull = () => ({
  type: types.notesActiveToNull,
});
const startNewNote = () => {
  return async (dispatch, getState) => {
    const {
      auth: { uid },
    } = getState();
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };
    try {
      const date = JSON.stringify(new Date());
      const doc = await db
        .collection(`${uid}/journal/notes`)
        .doc(date)
        .set(newNote);
      success("New note created !");
      dispatch(activeNote(date, newNote));
      dispatch({ type: types.notesAddNew, payload: { id: date, ...newNote } });
      console.log(doc);
    } catch (Error) {
      error(Error);
    }
  };
};
const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});
const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});
const refreshNotes = (id, note) => ({
  type: types.notesUpdate,
  payload: {
    id,
    note: { id, ...note },
  },
});
const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    if (!note.url) {
      delete note.url;
    }
    const noteToFirestore = { ...note };
    delete noteToFirestore.id;
    try {
      await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
      success("Note successfully updated !");
      dispatch(refreshNotes(note.id, noteToFirestore));
    } catch (Error) {
      error(Error);
    }
  };
};
const fileUpload = async (file, handleCancel) => {
  const cloudUrl = "https://api.cloudinary.com/v1_1/dy8uwlhgf/upload";
  const formData = new FormData();
  formData.append("upload_preset", "react-journal");
  formData.append("file", file);
  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });
    if (resp.ok) {
      const cloudResp = await resp.json();
      success("File uploaded successfully");
      handleCancel();
      return cloudResp.secure_url;
    } else {
      handleCancel();
      error("Error uploading file");
      throw await resp.json();
    }
  } catch (e) {
    handleCancel();
    error("Error uploading file");
    console.log(e);
  }
};
const startUpLoading = (file, handleCancel) => {
  return async (dispatch, getState) => {
    loading("Wait ...", 4);
    const { active: activeNote } = getState().notes;
    const fileUrl = await fileUpload(file, handleCancel);
    activeNote.url = fileUrl;
    dispatch(startSaveNote(activeNote));
  };
};

const startDeleting = (id) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    try {
      await db.doc(`${uid}/journal/notes/${id}`).delete();
      dispatch(deleteNote(id));
      success("Note deleted successfully");
    } catch (Error) {
      error(Error);
    }
  };
};

const deleteNote = (id) => ({
  type: types.notesDelete,
  payload: id,
});

const notesLogoutCleaning = () => ({
  type: types.notesLogoutCleaning,
});

export {
  deleteNote,
  startDeleting,
  startUpLoading,
  startNewNote,
  activeNote,
  setNotes,
  startSaveNote,
  refreshNotes,
  notesActiveToNull,
  notesLogoutCleaning,
};
