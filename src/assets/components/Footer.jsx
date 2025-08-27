// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm">© {new Date().getFullYear()} My App. All rights reserved.</p>
        
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white">Twitter</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          <a href="/privacy" className="hover:text-white">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
