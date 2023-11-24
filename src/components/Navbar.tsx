"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className="bg-red-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          <img src="/images/logo.png" className="w-24  h-24 rounded-full" alt="" />
        </div>
        <div className="hidden md:flex space-x-4 text-blue-900">
          <a href="#" className="text-blue-900  hover:bg-blue-900 rounded-full transition duration-300 hover:text-white px-2 py-1">
            Home
          </a>
          <a href="#" className="text-blue-900 hover:bg-blue-900 rounded-full transition duration-300 hover:text-white px-2 py-1">
            About us
          </a>
          <a href="#" className="text-blue-900 hover:bg-blue-900 rounded-full transition duration-300 hover:text-white px-2 py-1">
            Services
          </a>
          <a href="#" className="text-blue-900 hover:bg-blue-900 rounded-full transition duration-300 hover:text-white px-2 py-1">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          {/* Mobile menu icon */}
          <button className="text-white" onClick={toggleMobileMenu}>
            <i className="fas fa-bars"><AiOutlineMenu/></i>
          </button>
        </div>
      </div>
      <div
        className={`md:hidden ${showMobileMenu ? 'block' : 'hidden'}`}
      >
        {/* Mobile menu content */}
        <ul className="text-white space-y-2  ">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
