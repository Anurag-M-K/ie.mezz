'use client'
import React from 'react';
import { FaInstagram } from "react-icons/fa";
import Image from 'next/image'; // Import the Image component from 'next/image'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className='flex justify-center items-center'>
            <img src="/images/logo.png" alt="Logo" className="w-16 h-16 mb-2" />
            <p className="text-sm">ie mezz</p>
          </div>
          <div className='flex justify-center items-center'>
            <ul>
              <li><a href="#" className="text-gray-100  hover:text-white">Links</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div className='flex justify-center items-center'>
            <div className="flex flex-col space-x-2">
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter">follow us</i></a>
              <a href="https://instagram.com/ie.mezz?igshid=OGQ5ZDc2ODk2ZA==" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"><FaInstagram/></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} ie mezz. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
