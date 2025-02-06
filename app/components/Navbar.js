"use client";
import React, { useState, useEffect } from 'react';
import logo from "../../public/Images/logo.png";
import Image from 'next/image';
import Link from 'next/link';
import { FiAlignJustify } from "react-icons/fi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="w-full fixed top-0 z-50 transition-all duration-300">
      <div className={`px-4 md:px-8 lg:px-16 py-4 ${scrolling ? 'bg-blue-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <Image 
              height={60} 
              width={120} 
              src={logo} 
              alt='logo'
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6 text-lg">
              {['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-blue-300 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </ul>
            <button className="ml-4 py-2 px-6 border-2 border-white text-white rounded-md hover:bg-blue-300 hover:text-black transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <FiAlignJustify 
            onClick={handleToggle} 
            className={`md:hidden text-3xl cursor-pointer text-white transition-transform ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${isOpen ? 'visible bg-black/50' : 'invisible'}`} onClick={handleToggle}></div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-all duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-6">
          <ImCross 
            onClick={handleToggle} 
            className="self-end text-2xl mb-8 cursor-pointer hover:rotate-90 transition-transform duration-300"
          />
          <ul className="flex flex-col gap-4">
            {['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((item, index) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-black hover:text-blue-900 py-2 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                {item}
              </Link>
            ))}
          </ul>
          <button className="mt-8 py-2 px-6 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-all duration-300 hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;