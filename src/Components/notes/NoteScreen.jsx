import React from "react";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  return (
    <div className="notes__main-content animate__animated animate__fadeInRight">
      <NotesAppBar />
      <div className="notes_content">
        <input type="text" placeholder="Some Awesome Title" className="notes__input-title" autoComplete="off" />
        <textarea
          placeholder="What happened today?"
          className="notes__text-area"
        ></textarea>
        <img  width="100px" height="100px" src="https://picsum.photos/seed/picsum/200/300" alt="image1"/>
      </div>
    </div>
  );
};

export default NoteScreen;
