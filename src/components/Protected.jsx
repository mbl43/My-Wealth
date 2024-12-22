import React from "react";
import Navbar from "./Navbar/Navbar";

const Protected = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <Navbar user={user} />
      <div className="p-4 flex justify-center items-center flex-wrap flex-col text-center">      
          <h3 className="text-xl font-semibold text-gray-700">Your Email: {user && user.email}</h3>
          <h3 className="text-xl font-semibold text-gray-700">Your Name: {user && user.displayName}</h3>
        
      </div>
    </div>
  );
};

export default Protected;
