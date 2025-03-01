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
              {["Home", "About", "Services", "Portfolio", "Testimonials", "Contact"].map((item) => (
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
            <a 
              href="https://wa.me/923219350989" // WhatsApp direct link
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-4 py-2 px-6 border-2 border-white text-white rounded-md hover:bg-blue-300 hover:text-black transition-all duration-300 hover:scale-105"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <FiAlignJustify 
            onClick={handleToggle} 
            className="md:hidden text-3xl cursor-pointer text-white"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-50 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} overflow-hidden`}>
        <ImCross 
          onClick={handleToggle} 
          className="absolute top-5 right-5 text-3xl cursor-pointer hover:rotate-90 transition-transform duration-300"
        />
        <ul className="flex flex-col items-center gap-6 text-lg text-black">
          {["Home", "About", "Services", "Portfolio", "Testimonials", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={handleToggle}
              className="text-black hover:text-blue-900 py-2 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              {item}
            </Link>
          ))}
        </ul>
        <a 
          href="tel:+923219350989" // Direct call link
          className="mt-8 py-2 px-6 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-all duration-300 hover:scale-105"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;