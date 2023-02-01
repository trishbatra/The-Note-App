import  {React, useContext, useState}  from 'react'
import Notecomponent from './Notecomponent'
import noteContext from '../Context/Notes/noteContext' 
const Home = () => {
  const [notetoadd, setnotetoadd] = useState({task: "", description : ""})
  const myNoteFuncData = useContext(noteContext)
  const {Note ,addNote}  = myNoteFuncData
  function onChange(e){
    setnotetoadd( {...notetoadd,[e.target.name]: e.target.value} )
  }
  function addOnCLick(){
    addNote(notetoadd.task, notetoadd.description)
    setnotetoadd({task: "", description : ""})
  }
  return (
    <div>
        <h2 className='text-center my-3  text-green-400  text-2xl font-bold' > My Notes : The Note Making Application </h2>
        <form className='text-center' action="">
          <label className='text-green-400 font-bold text-xl p-2 mr-2 my-4 lg:block  lg:text-4xl lg:font-normal lg:ml-4'  htmlFor="task" > Add Task </label>
          <input value={notetoadd.task} required onChange={onChange}  name='task' className='border-black border-[3px] mr-4 mb-2 rounded-xl p-2 my-4 lg:block  lg:ml-[27%] lg:rounded-md lg:w-[50%]' type="text" />
          <label className='text-green-400  font-bold text-xl p-2  my-4 lg:block lg:text-4xl lg:font-normal lg:ml-4 '  htmlFor="description">  Description </label>
          <input value={notetoadd.description}  required onChange={onChange}  className='border-black  border-[3px] mb-2 rounded-xl p-2 mr-8 my-3 lg:block  lg:ml-[27%] lg:rounded-md lg:w-[50%] 'name='description' type="text" />
        </form>
        <button  className="addTheNote  hover:transition-all p-5 mt-6 rounded-3xl ml-[37%] hover:bg-green-500 text-[#F5F5F5] bg-green-400 lg:ml-[47%]" onClick={addOnCLick} >Add Note</button>
        <Notecomponent/>
    </div>
  )
}

export default Home
