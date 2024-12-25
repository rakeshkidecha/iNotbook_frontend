import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/NoteContext'

const AddNote = () => {

  const {addNote} = useContext(noteContext);
  const [note,setNote] = useState({title:'',description:''});

  const handleSubmit = (e) =>{
    e.preventDefault();
    addNote(note.title,note.description);
    setNote({title:'',description:''});
  }
  const onchange = (e)=>{
    setNote({...note,[e.target.name]:e.target.value})
  }

  return (
    <>
        <div className='my-4'>
          <h3>add notes</h3>

          <form action="">
              <label>Title: </label>
              <input type="text" name='title' className='form-control' value={note.title} onChange={onchange}/>
              <label>description: </label>
              <input type="text" name='description' className='form-control' value={note.description} onChange={onchange}/>
              <button onClick={handleSubmit} className='btn btn-success my-3'>Add</button>
          </form>
        </div>
    </>
  )
}

export default AddNote
