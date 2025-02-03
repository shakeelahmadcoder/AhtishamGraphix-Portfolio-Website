import React from 'react';
import Link from 'next/link';
import logo from "../../public/Images/logo.png"
const Footer = () => {
  return (
    <footer className="w-full mx-auto bg-blue-900 text-white  shadow-sm ">
      <div className="w-full  mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img
              src={logo.src}
              className="h-8"
              alt="Logo"
            />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap">Ahtisham Graphix</span> */}
          </a>

          <ul className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            {['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((item, index) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-300 py-2 px-4 rounded-lg hover:bg-gray-700 transition-all duration-300"
                  style={{
                    animation: `fadeIn 0.5s ease forwards`,
                    animationDelay: `${index * 50}ms`, // Add delay based on index
                  }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <hr className="my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <span className="block text-sm text-gray-300 sm:text-center">
          © 2025 Ahtisham Graphix. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
