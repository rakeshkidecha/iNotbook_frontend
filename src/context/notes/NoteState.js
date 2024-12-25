import { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:8001";

  const [notes, setNotes] = useState([]);

  const fetchAllNotes = async () => {
    const res = await fetch(`${host}/api/notes/fetchAllNotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc1YzJiZDE4ODIyMjMzNzVjODczZTgwIn0sImlhdCI6MTczNDE0OTAyOX0.7Rr4oUJkHKRWBa2B2LvYRkBoGKcn32Fe7vuZ9uvzHHc",
      },
    });
    const notes = await res.json();
    setNotes(notes);
  };

  //add note
  const addNote =async (title, description) => {
    console.log("adding a note");
    const res = await fetch(`${host}/api/notes/addNot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc1YzJiZDE4ODIyMjMzNzVjODczZTgwIn0sImlhdCI6MTczNDE0OTAyOX0.7Rr4oUJkHKRWBa2B2LvYRkBoGKcn32Fe7vuZ9uvzHHc",
      },
      body:JSON.stringify({
        "title":title,
        "description":description
      }),
    });

    const addingNote = await res.json();
    console.log(addingNote);
  };

  //delete note
  const deleteNote =async (id) => {
    console.log("adding a note");
    const res = await fetch(`${host}/api/notes/deleteNote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc1YzJiZDE4ODIyMjMzNzVjODczZTgwIn0sImlhdCI6MTczNDE0OTAyOX0.7Rr4oUJkHKRWBa2B2LvYRkBoGKcn32Fe7vuZ9uvzHHc",
      },
    });
    const deletedNote = await res.json();
    console.log(deletedNote);
  };

  //edit note
  const editNote =async (id,title,description) => {
    console.log("edit a note");
    const res = await fetch(`${host}/api/notes/updateNote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc1YzJiZDE4ODIyMjMzNzVjODczZTgwIn0sImlhdCI6MTczNDE0OTAyOX0.7Rr4oUJkHKRWBa2B2LvYRkBoGKcn32Fe7vuZ9uvzHHc",
      },
      body:JSON.stringify({
        "title":title,
        "description":description
      })
    });

    const editedNote = await res.json();
    console.log(editedNote);

  };



  return (
    <noteContext.Provider value={{ notes, setNotes, fetchAllNotes, addNote ,deleteNote,editNote}}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
