import {React, useContext,  useRef, useState} from 'react'
import { AiOutlineClose, AiOutlineEdit } from "react-icons/ai";
import noteContext from '../Context/Notes/noteContext';
function Noteitem(props) {
    const myNoteContext  = useContext(noteContext)
    const {deleteNote, editNote} = myNoteContext
    const {elem} = props
    const ref = useRef(null)
    const reff = useRef(null)
    const [updatedBody, setupdatedBody] = useState({updatedTask: "", updatedDescription: ""})
    function updateNote(){
      if( ref.current.classList.contains("hidden") && reff.current.classList.contains("hidden") ){
        ref.current.classList.add("block")
        ref.current.classList.remove("hidden")
        reff.current.classList.add("block")
        reff.current.classList.remove("hidden")
      }
      else{
        ref.current.classList.remove("block")
        ref.current.classList.add("hidden")
        reff.current.classList.remove("block")
        reff.current.classList.add("hidden")
      }
    }
    function afterUpdate(){
      if(ref.current.classList.contains("block") && reff.current.classList.contains("block") ){
        ref.current.classList.remove("block")
        ref.current.classList.add("hidden")
        reff.current.classList.remove("block")
        reff.current.classList.add("hidden")
        setupdatedBody({updatedTask: "", updatedDescription: ""})
        
      }
    }
    function onChangee(e){
      e.preventDefault()
      setupdatedBody( {...updatedBody,[e.target.name]: e.target.value} )
      console.log(updatedBody)
    }
  return (
    <div>
      <form ref={ref} key={elem.key} className='hidden   p-5'>
        <h2  className='text-green-500 font-bold' >Update Note</h2>
        <label  className='block text-green-500 ' htmlFor="updatedTask">ADD New Task</label>
        <input  onChange={onChangee} className='border-black border-[2px] h-9' value={updatedBody.updatedTask}  name='updatedTask' type="text" />
        <label  className='block text-green-500' htmlFor="updatedDescription">ADD New Description</label>
        <input  onChange={onChangee} className='border-black block lg:ml-28 border-[2px] h-9'  name='updatedDescription' value={updatedBody.updatedDescription} type="text" />
        
      </form>
      <button  ref={reff} onClick={()=> {{editNote(elem._id, updatedBody.updatedTask, updatedBody.updatedDescription); afterUpdate()}}} className='bg-green-400  hidden text-white mt-2 p-3 ml-[40%] hover:bg-green-500 mb-0 rounded-2xl' > Submit </button>
    <>
            <div key={elem.key} className='w-auto py-5  px-11 item-center  mx-4 my-5 rounded-lg  h-auto text-black outline outline-green-300' >
            <AiOutlineClose  onClick={()=>{deleteNote(elem._id)}} className='cursor-pointer inline relative right-11 text-3xl text-green-300' /> <AiOutlineEdit onClick={updateNote}  className='cursor-pointer inline relative right-11 text-3xl text-green-300'/>
            <b className='relative right-5' > {elem.task} </b>
            <p> {elem.description} </p>
        </div>
    </>
    </div>
  )
}
export default Noteitem