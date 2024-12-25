import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const { notes, fetchAllNotes,editNote } = useContext(noteContext);
  const [note, setNote] = useState({title:'',description:''});

  useEffect(() => {
    fetchAllNotes();
  }, [notes]);

  const ref = useRef(null);
  const updateNote = (curruntNote) => {
    ref.current.click();
    setNote(curruntNote);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    editNote(note._id, note.title, note.description);
  }
  const onchange = (e)=>{
    setNote({...note,[e.target.name]:e.target.value})
  }
  

  return (
    <>
      <AddNote />

      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        ref={ref}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                edit note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="">
                <label>Title: </label>
                <input
                  type="text"
                  name="title"
                  className="form-control" value={note.title}
                  onChange={onchange}
                />
                <label>description: </label>
                <input
                  type="text"
                  name="description"
                  className="form-control" value={note.description}
                  onChange={onchange}
                />
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" data-bs-dismiss="modal" className="btn btn-primary" onClick={handleSubmit}>Update</button>
            </div>
          </div>
        </div>
      </div>

      <h3>view notes</h3>
      <div className="row g-3 my-4">
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
