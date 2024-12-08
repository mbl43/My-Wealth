import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false); // State to toggle mobile menu

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className="bg-[#0063c5] shadow-lg">
      <div className="w-full max-h-20 px-4">
        <div className="flex flex-row items-center max-w-7xl mx-auto justify-between py-4">
          {/* Logo Section */}
          <div className="md:text-3xl font-bold text-white sm:text-base sm:text-center">
            <h1>
              <Link
                to="/"
                className="hover:text-[#008000]-200 transition duration-300"
              >
                My Wealth
              </Link>
            </h1>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white text-3xl">
            {isMobile ?   <IoCloseSharp />: <RxHamburgerMenu />}

            </button>
          </div>

          {/* Navigation Links (Hidden in Mobile) */}
          <ul
            className={`flex-row  text-lg font-medium md:flex gap-x-3
            ${
              isMobile
                ? "flex flex-col absolute z-10 top-14 left-0 w-full bg-[#051378] p-4 justify-center  items-center"
                : "hidden"
            }`}
          >
            <Link
              to="/"
              className="text-white hover:text-[#4afc70] transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-[#4afc70] transition duration-300"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-white hover:text-[#4afc70] transition duration-300"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-[#4afc70] transition duration-300"
            >
              Contact
            </Link>
          </ul>

          {/* Buttons */}
          <div className="items-center space-x-6 hidden md:flex">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#008000",
                fontFamily: "Poppins, Arial, sans-serif",
                fontSize: "16px",
                textTransform: "capitalize",
              }}
              className="font-medium text-white text-base px-5 py-2 rounded-lg hover:bg-[#4afc70] shadow-lg transition-transform transform hover:scale-105 duration-200 capitalize"
            >
              Sign Up
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#008000",
                fontFamily: "Poppins, Arial, sans-serif",
                fontSize: "16px",
                textTransform: "capitalize",
              }}
              className="font-medium text-white text-base px-5 py-2 rounded-lg hover:bg-[#4afc70] shadow-lg transition-transform transform hover:scale-105 duration-200 capitalize"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
