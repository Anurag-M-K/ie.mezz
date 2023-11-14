"use client"

import React, { useState, useEffect } from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin' ]});

const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 100); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body  className={inter.className}>
        

        {showLogo ? (
          <div className="flex justify-center items-center bg-black">
            <img
              src="/images/logo.png"
              className="w-screen h-screen  bg-black rounded-full"
              alt="Logo"
              />
          </div>
        ) : (
          <div
            id="content-container"
            style={{
              display: showLogo ? 'none' : 'block',
            }}
            className="flex flex-col min-h-screen" // Use Tailwind classes to set minimum height
            >
            <Navbar />
            <div className="flex-grow">{children}</div> {/* Use flex-grow to push content to fill remaining space */}
          </div>
        )}
         
      </body>
    </html>
  );
}
