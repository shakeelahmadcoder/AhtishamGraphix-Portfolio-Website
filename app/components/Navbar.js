"use client";
import React, { useState, useEffect } from 'react';
import logo from "../../public/Images/logo.png"
import Image from 'next/image';
import Link from 'next/link';
import { FiAlignJustify } from "react-icons/fi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [isOpn, setIsOpn] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleIsOpen = () => setIsOpn(!isOpn);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${
      scrolling ? 'bg-blue-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-4">
        
          {/* Logo */}
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex  justify-between items-center gap-8">
          <div className="z-50">
            <Image 
              height={120} 
              width={120} 
              src={logo} 
              alt='logo'
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
            <ul className="flex gap-8 text-lg justify-between">
              {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Team', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-black transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </ul>
            <button className="ml-4 py-2 px-6 border-2 border-white text-white rounded-md hover:bg-black  transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Hamburger */}
          <FiAlignJustify 
            onClick={handleIsOpen} 
            className={`md:hidden text-3xl cursor-pointer text-white transition-transform ${
              isOpn ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
            }`}
          />
        </div>
      

      {/* Mobile Menu Overlay */}
      <div className={` md:hidden fixed inset-0 z-50 transition-all duration-300 ${
        isOpn ? 'visible bg-blue-900/50' : 'invisible bg-transparent'
      }`} onClick={handleIsOpen}></div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white/95 backdrop-blur-lg z-50 transform transition-all duration-500 ease-in-out ${
        isOpn ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full p-6">
          <ImCross 
            onClick={handleIsOpen} 
            className="self-end text-2xl mb-8 cursor-pointer hover:rotate-90 transition-transform duration-300"
          />
          <ul className="flex flex-col gap-4">
            {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Team', 'Contact'].map((item, index) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-black hover:text-blue-900 py-2 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item}
              </Link>
            ))}
          </ul>
          <button className="mt-8 py-2 px-6 bg-blue-900 text-black rounded-md hover:bg-blue-900 transition-all duration-300 hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;