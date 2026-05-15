import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-blue-900
     shadow-md px-8 py-2">
      
      <div className="flex items-center justify-between">
        
        
        <div className="flex items-center gap-3 mr-6 px-10">
          <span className="text-2xl" role="img" aria-label="bee">🐝</span>

          <span className="text-2xl font-bold text-[#ffcc00]">SkillHive</span>
        </div>

        
        <div className="flex items-center gap-8  text-white">
          
          <Link
            to="/Dashboard"
            className="text-white-700 font-medium hover:text-indigo-600 transition duration-300"
          >
            Dashboard
          </Link>

          <Link
            to="/how-it-works"
            className="text-white-700 font-medium hover:text-indigo-600 transition duration-300"
          >
            How It Works
          </Link>

          <Link
            to="/community"
            className="text-white-700 font-medium hover:text-indigo-600 transition duration-300"
          >
            Community
          </Link>
        </div>
            <div className="flex items-center justify-between px-15 py-4 gap-6 text-white">
                {/* <Link
            to="/logIn"
            className="text-white font-medium hover:text-indigo-600 transition duration-300"
          >
            Log In
          </Link> */}

        {/* Sign Up Button */}
        <button
          onClick={() => navigate("/signup")}
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-indigo-700 transition duration-300"
        >
          Sign Up
        </button>
            </div>
      </div>
    </div>
  );
};

export default Navbar;