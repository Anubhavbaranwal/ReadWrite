import { Link } from "react-router-dom"
import { Signup, signup } from "@spearhead08/common";
import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

   
    const handleSubmit = async() =>{
        const data = {
            username,
            email,
            password
        }
        const {success}= signup.safeParse(data);
        if(!success) {
            return alert("please Enter the right input");
        }
        else{
        //    const res = await 
        }
       
    }
  return <div className="flex justify-center items-center">
    <div className="w-1/2 ">
    <h1 className="text-3xl text-center">Create an Account</h1>

    <p className="text-md text-center"> Already Registered ! <Link to={"/signin"} className="underline text-grey-200">Login</Link></p>
    <label className="text-lg text-black font-medium mt-10">Username</label>
     <input type="text" placeholder="Username" className="border-2 border-gray-300 rounded-lg p-2 my-3 w-full" onChange={(e)=>setUsername(e.target.value)}/>
     <label className="text-lg text-black font-medium">Email</label>
     <input type="email" placeholder="Email" className="border-2 border-gray-300 rounded-lg p-2 my-3  w-full" onChange={(e)=>setEmail(e.target.value)}/>
        <label className="text-lg text-black font-medium">Password</label>
        <input type="password" placeholder="Password" className="border-2 border-gray-300 rounded-lg p-2 my-3 w-full" onChange={(e)=>setPassword(e.target.value)}/>
        <button className="bg-blue-500 text-white w-full p-2 rounded-md" onClick={()=>handleSubmit()}>Register</button>
        </div>
  </div> 
}

export default Login