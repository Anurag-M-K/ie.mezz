'use client'
import React from 'react';
import { FaInstagram } from "react-icons/fa";
import Image from 'next/image'; // Import the Image component from 'next/image'
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 texy-gray-500">
      <div className="container mx-auto py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className='flex justify-center items-center'>
            <img src="/images/logo.png" alt="Logo" className="w-36 h-36 mb-2" />
            <div className='flex flex-col  items-start'>
              <div>

                <h2 className="text-2xl font-serif ">Enjoy your</h2>
              </div>
              <span className='flex flex-row justify-center items-center mt-5'>

                <MdEmail className="text-red-500" /><p className="text-gray-400 text-sm">Iemezz3102@gmail.com</p>
              </span>
              <span className='flex flex-row justify-center items-center'>

                <FaPhoneVolume className="text-red-500" /><p className="text-gray-400 text-sm">+919535363102</p>
              </span>

            </div>
          </div>
          <div className='flex justify-center items-center'>
            <ul>
              <li><a className="text-gray-100  hover:text-white">Links</a></li>
              <li><a className="text-gray-400 text-sm hover:text-white" onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: 'smooth', block: "start" })}>Home</a></li>
              <li><a className="text-gray-400 text-sm hover:text-white" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: 'smooth', block: "start" })}>About</a></li>
              <li> <a onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: 'smooth', block: "start" })} className="text-gray-400 text-sm hover:text-white">
                Our work
              </a></li>
            </ul>
          </div>
          <div className='flex justify-center items-center'>
            <div className="flex flex-col space-x-2">
              <a className="text-gray-400 hover:text-white"><i className="fab fa-twitter">follow us</i></a>
              <a href="https://instagram.com/ie.mezz?igshid=OGQ5ZDc2ODk2ZA==" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"><FaInstagram /></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="text-center text-[12px] text-gray-400 ">
          &copy; {new Date().getFullYear()} ie mezz. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
