import React, { useState } from 'react';
import {auth} from "../../firebase/firebase"
import {createUserWithEmailAndPassword} from "firebase/auth"
import {Link, useNavigate} from "react-router-dom"
const SignUp = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate=useNavigate()
    const handlesubmit = async (e) => {
      e.preventDefault();
      try {
        const userCredential=await createUserWithEmailAndPassword(auth,email,password)
        console.log(userCredential);
        const user=userCredential.user
        localStorage.setItem("token",user.accessToken)
        localStorage.setItem("user",JSON.stringify(user))
        navigate("/")
         
      } catch (error) {
        console.error(error)
      }
    };
  return (
    <>
  <form
    onSubmit={handlesubmit}
    className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg space-y-4"
  >
    <h2 className="text-2xl font-bold text-center text-gray-800">Signup</h2>
    <input
      type="email"
      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter email"
      onChange={(e) => setemail(e.target.value)}
      value={email}
    />
    <input
      type="password"
      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter password"
      value={password}
      onChange={(e) => setpassword(e.target.value)}
    />
    <button
      type="submit"
      className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
    >
      Signup
    </button>
    <Link to="/login">Allready have account? Login</Link>
  </form>
</>

  )
}

export default SignUp