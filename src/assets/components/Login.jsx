import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; 
    import React, { useState } from "react";
    import { useRef } from "react";
    import { auth } from "../../utils/firebase";
    import { useNavigate } from "react-router";
    
    const Login = () => {
    
        const email = useRef();
        const password = useRef();
        const navigate = useNavigate()
    
      function handleClick(e){
    
        e.preventDefault();
        
        try {
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate('/browse')
        // ...
      })}
      catch(error){
        console.log(error)
      }
      finally{
        console.log("Everything is working ")
      }
      }
        
    
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold text-center mb-6">Login 🔐</h2>
    
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ref={email}
                required
              />
    
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ref={password}
                required
              />
    
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                onClick={handleClick}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      );
    };
    
    export default Login;