import React, { useContext } from "react";
import noteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  const {deleteNote}= useContext(noteContext);
  const { note,updateNote } = props;
  return (
    <>
      <div className="col-md-3">
        <div className="card">
          <div className="card-body">
            <h4>{note.title}</h4>
            <p>{note.description}</p>
            <div className="d-flex justify-content-center">
              <i className="fa-solid fa-trash mx-2" onClick={()=>deleteNote(note._id)}></i>
              <i className="fa-solid fa-pen-to-square mx-2"  onClick={()=>updateNote(note)}></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteItem;
