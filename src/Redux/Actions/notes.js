import { db } from "../../Firebase/FirebaseConfig";
import { types } from "../Types/Types.js";
import { message } from "antd";
import "antd/dist/antd.css";
const { error, success } = message;
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

export {
  startNewNote,
  activeNote,
  setNotes,
  startSaveNote,
  refreshNotes,
  notesActiveToNull,
};
