import {React, useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import noteContext from '../Context/Notes/noteContext' 
import Noteitem from './NoteItem'

const Notecomponent = () => {
  let sendTo  = useNavigate()
  const theNotes = useContext(noteContext)
  const {getAllNotes , Note} = theNotes
  useEffect(() => {
    if( localStorage.getItem("token") != null )
    {
          getAllNotes()
    }else{
      sendTo("/login")
    }
  }, [])

  return (
    <>
    <h1 className='text-center mt-5 ml-11  top-48 text-green-400 font-semibold text-[24px]' >Your Notes</h1>
    <h1 className='text-center mt-5 ml-11  top-48 text-green-400  text-[20px]'>{ Note.length==0  && 'NO NOTES TO DISPLAY START ADDING SOME NOTES' }</h1>
    <div className='text-center  grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 rounded-xl w-50 h-auto mx-20 ' >
     
      { Note.map((elem)=>{ return <Noteitem   key={elem._id} elem={elem} /> }) }
    </div>
    </>
  )
}

export default Notecomponent
