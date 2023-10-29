import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          <Image src="/images/logo.png" width={0} height={0} className="w-16 h-16" alt="" />
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Services
          </a>
          <a href="#" className="text-white">
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
