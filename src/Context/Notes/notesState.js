import { useState } from "react";
import noteContext from "./noteContext";
const NoteState = (props)=>{
    function logandSet(data){
        console.log(data)
        setNote(data)
    }
    
    const [Note, setNote] = useState([])

    function handleNote(data){
        let other = Note.filter((elem)=> { return elem._id !== data._id })
        setNote(other)
    }
    function handleUpdatedNote(ress , id){
        const updatedNote  = Note.flatMap((elem)=>{
            if(elem._id === id){
                elem.task =  ress.task
                elem.description =  ress.description
            }
            return elem
        })
        setNote(updatedNote)
    }
      function getAllNotes(){
        fetch(`http://localhost:5000/api/notes/fetchallnotes`, {
            method : "GET",
            headers :{
                'Content-Type'  : 'application/json',
                'auth-token'  : localStorage.getItem("token")
            }
        })
        .then(res=>res.json())
        .then(notes=> logandSet(notes.notes))
        .catch(err => {console.log(err)})
      }
      function addNote(task, description){
        fetch(`http://localhost:5000/api/notes/addnotes`, {
            method: "POST",
            headers : {
                'Content-Type'  : 'application/json',
                'auth-token'  : localStorage.getItem("token")
            },
            body: JSON.stringify({task : task, description: description})
        })
        .then(res => res.json())
        .then(data => setNote(Note.concat(data)))
      }
      function deleteNote(id){
        fetch(`http://localhost:5000/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers : {
                'Content-Type'  : 'application/json',
                'auth-token'  : localStorage.getItem("token")
            },
        })
        .then(res=> res.json() )
        .then(data => handleNote(data))
        .catch(err => alert(err))
      }
      function editNote(id, task, description){
        fetch(`http://localhost:5000/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers : {
                'Content-Type'  : 'application/json',
                'auth-token'  : localStorage.getItem("token")
            },
            body :  JSON.stringify({
                task : task,
                description: description
            })
        })
        .then(res=> res.json())
        .then(ress=> handleUpdatedNote(ress.noteToBeUpdated, id))
        .catch(err=> console.log(err))
      }
    return(
        <noteContext.Provider value={{Note, addNote, deleteNote, editNote, getAllNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState