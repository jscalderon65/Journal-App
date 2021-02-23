import React, { useEffect, useRef } from "react";
import NotesAppBar from "./NotesAppBar";
import { useForm } from "my-customhook-collection";
import { Image } from "antd";
import { useSelector, useDispatch } from "react-redux";
import "antd/dist/antd.css";
import { activeNote } from "../../Redux/Actions/notes";
const NoteScreen = () => {
  const dispatch = useDispatch();
  const { active: note } = useSelector((state) => state.notes);
  const {url} = note;
  const [formValues, handleInputChange, setForm] = useForm(note);
  const { body, title} = formValues;
  const activeId = useRef(note.id);
  useEffect(() => {
    if (note.id !== activeId.current) {
      setForm(note);
      activeId.current = note.id;
    }
  }, [note, setForm]);
  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);
  return (
    <div className="notes__main-content animate__animated animate__fadeInRight">
      <NotesAppBar date={note.date} />
      <div className="notes_content">
        <input
          type="text"
          placeholder="Some Awesome Title"
          className="notes__input-title"
          autoComplete="off"
          name="title"
          maxLength={25}
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="What happened today?"
          className="notes__text-area"
          name="body"
          value={body}
          onChange={handleInputChange}
        ></textarea>
        {url && <Image width="100px" height="100px" src={url} alt="image1" />}
      </div>
    </div>
  );
};

export default NoteScreen;
