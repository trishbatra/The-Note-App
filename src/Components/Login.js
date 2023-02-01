import {React,useState} from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let nav = useNavigate()
  const [creds, setcreds] = useState({email: "", password: ""})
  function onChange(e){
    setcreds({...creds, [e.target.name]: e.target.value})
  }
  function handleLoginRess(ress){
    if(ress.success == true){
    localStorage.setItem("token", ress.jwtDATA)
    setcreds({email: "", password: ""})
    nav("/")
    }else{
      alert("fill again something incorrect")
    }
  }
  function logInTheUser(){
    fetch(`http://localhost:5000/api/auth/login`,{
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body : JSON.stringify({email:creds.email, password: creds.password})
    })
    .then(res=>res.json())
    .then(ress=>handleLoginRess(ress))
    .catch(err=>alert(err))
  }
  return (
    < div className="text-center" >
    <div className="flex  justify-center">
      <div className="flex flex-col justify-center items-center md:flex-row mt-[5%] rounded-xl max-w-7xl w-[90%]  m-2">
        <div className=" w-full md:w-3/4">
          <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 py-4">
            <h1 className="font-semibold   text-xl md:text-5xl text-green-500 m-2">
              Login to your Account or signup to start using my notes
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center m-2 space-y-6 md:space-y-8">
            
            <div className="">
              <input
                onChange={onChange}
                value={creds.email}
                name="email"
                type="email"
                placeholder="email"
                className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-green-600 focus:outline-none text-green-400 placeholder:text-green-400 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
              />
            </div>
            <div className="">
              <input
                onChange={onChange}
                value={creds.password}
                name="password"
                type="password"
                placeholder="Password"
                className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-green-600 focus:outline-none text-green-400 placeholder:text-green-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
              />
            </div>
          </div>
          <div className="text-center mt-7">
            <button onClick={logInTheUser}  className=" px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-green-400  font-medium m-2 mb-6 ">
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
    <script src="https://cdn.tailwindcss.com"></script>
  </div>
  );
};

export default Login;
