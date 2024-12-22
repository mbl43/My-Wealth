import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import Navbar from "./Navbar/Navbar";
const Protected = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  // const user =auth.currentUser
  const navigate = useNavigate();
  const handlelogout = async () => {
    await signOut(auth);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      <Navbar />
      Your are logged in
      <h2 className="text-xl font-semibold text-gray-700">
        {user && user.email}
      </h2>
      <button
        onClick={handlelogout}
        className="border-2 border-gray-300 m-2 p-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Logout
      </button>
    </div>
  );
};

export default Protected;
