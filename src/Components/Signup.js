import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  let history = useNavigate()
  const [info, setinfo] = useState({name: "", password: "" , email:""})
  function handleRess(ress){
    if(ress.success == true){
    localStorage.setItem("token", ress.jwtDATA)
    setinfo({name: "", password: "" , email:""})
    history("/")
    }else{
      alert(ress['errors'][0].msg || ress.invalidMail)
    }
  }
  function createUser(){
    fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name:info.name, email: info.email ,password: info.password})
    })
    .then(res=>res.json())
    .then(ress=>handleRess(ress))
    .catch(err=>alert(err))
  }   
  function setOnchange(e){
    setinfo({...info, [e.target.name]:e.target.value})
  }
    
  return (
    < div className="text-center" >
    <div className="flex  justify-center">
      <div className="flex flex-col justify-center items-center md:flex-row mt-[5%] rounded-xl max-w-7xl w-[90%]  m-2">
        <div className=" w-full md:w-3/4">
          <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 py-4">
            <h1 className="font-semibold   text-xl md:text-5xl text-green-500 m-2">
              SignUp for a new  account
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center m-2 space-y-6 md:space-y-8">
            <div className="">
              <input
                value={info.name}
                name="name"
                onChange={setOnchange}
                type="text"
                placeholder="Name"
                className=" bg-gray-100 rounded-lg px-5 py-2 focus:border  border-green-600 focus:outline-none text-green-400 placeholder:text-green-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
              />
            </div>
            <div className="">
              <input
                value={info.email}
                name="email"
                onChange={setOnchange}
                type="email"
                placeholder="email"
                className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-green-600 focus:outline-none text-green-400 placeholder:text-green-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
              />
            </div>
            <div className="">
              <input
                value={info.password}
                name="password"
                onChange={setOnchange}
                type="password"
                placeholder="Password"
                className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-green-600 focus:outline-none text-green-400 placeholder:text-green-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
              />
            </div>
          </div>
          <div className="text-center mt-7">
            <button  onClick={createUser} className=" px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-green-400  font-medium m-2 mb-6 ">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
    <script src="https://cdn.tailwindcss.com"></script>
  </div>
  )
}

export default Signup
