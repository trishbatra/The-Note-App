import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
const Navbar = () => {
  let goTo = useNavigate()
  function logUserOut(){
    localStorage.removeItem("token")
    goTo("/login")
  }
  return (
    <div className='bg-green-400  text-[#F5F5F5]  lg:bg-green-400 lg:p-3'>
      <h1 className='text-center  text-2xl cursor-pointer lg:text-left lg:inline' ><Link to='/' > My Notes </Link> </h1>
            <ul className='flex flex-col lg:inline lg:relative  lg:ml-96 lg:left-[45%] lg:flex-row  ' >
              <li className='cursor-pointer text-center  lg:mx-4 lg:inline  py-2 hover:text-[#FC5185] transition-all' ><Link to='/' >Home</Link></li>
              <li className='cursor-pointer  text-center lg:mx-4 lg:inline  py-2 hover:text-[#FC5185] transition-all' ><Link to='/about' >About</Link></li>
              {!localStorage.getItem("token")?<li className='cursor-pointer  text-center lg:mx-4 lg:inline  py-2 hover:text-[#FC5185] transition-all' ><Link to='/login' >Login</Link></li>:<li className='cursor-pointer  text-center lg:mx-4 lg:inline  py-2 hover:text-[#FC5185] transition-all' onClick={logUserOut} >Logout</li>}
              <li className='cursor-pointer  text-center lg:mx-4 lg:inline  py-2 hover:text-[#FC5185] transition-all' ><Link to='/signup' >Sign-Up</Link></li>
            </ul>
    </div>
  )
}

export default Navbar