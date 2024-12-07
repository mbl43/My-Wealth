import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "../"
const Navbar = () => {
  return (
    <>
      <div className="bg-[#0063c5] shadow-lg">
        <div className="w-full max-h-20 px-4">
          <div className="flex flex-row items-center max-w-7xl mx-auto justify-between py-4">
            {/* Logo Section */}
            <div className="text-3xl font-bold text-white">
              <h1>
                <Link
                  to="/"
                  className="hover:text-gray-200 transition duration-700"
                >
                  My Wealth
                </Link>
              </h1>
            </div>

            {/* Navigation Links */}
            <ul className="flex flex-row space-x-6 text-lg font-medium">
              <Link
                to="/"
                className="text-white hover:text-gray-100 transition duration-700"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-gray-100 transition duration-700"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-white hover:text-gray-100 transition duration-700"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-gray-100 transition duration-700"
              >
                Contact
              </Link>
            </ul>

            {/* Login Button */}
            <div className="flex items-center space-x-6">
              <button className="bg-[#008000] font-medium text-white px-5 py-2 rounded-lg hover:bg-[#008000] shadow-lg transition-transform transform hover:scale-105 duration-200">
                Login
              </button>
              {/* <button className="bg-[#008000] font-medium text-white px-5 py-2 rounded-lg hover:bg-[#008000] shadow-lg transition-transform transform hover:scale-105 duration-200">
              Sign Up
            </button> */}

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#008000",
                  
                  fontFamily: 'Poppins, Arial, sans-serif' 
                }}
                className=" text-white px-5 py-2 rounded-lg hover:bg-[#008000] shadow-lg transition-transform transform hover:scale-105 duration-200"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
