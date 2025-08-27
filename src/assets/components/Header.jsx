import React from "react";
import { LogIn, LogOut } from "lucide-react";
import {  signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { Link } from "react-router";

const Header = ({ user }) => {

  function onLogout(){


signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
  }

  return (
    <header className="bg-blue-600 text-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-xl font-bold">🔥 My App</h1>

      {/* Navigation */}
      <nav className="flex space-x-6 gap-20">
        <Link to={'/browse'}>Home</Link>
       <Link to={'/now'}>Now</Link>
       <Link to={'/AiSearch'}>Ai</Link>
       <Link to={'/video'}>Trailer</Link>
      </nav>

      {/* Auth Button */}
      
        <button
          onClick={onLogout}
          className="flex items-center gap-2 bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
        >
          <LogOut size={18} /> Logout
        </button>
      
    </header>
  );
};

export default Header;