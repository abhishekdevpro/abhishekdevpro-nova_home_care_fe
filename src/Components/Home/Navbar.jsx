import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assests/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="w-full mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-8 w-auto"
              src={logo}
              alt="Nova Home Care"
            />
          </div>
          <div className="hidden sm:flex items-center space-x-8">
            {/* Updated navigation items */}
            {['About Us', 'Services', 'Careers', "FAQ's", 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium"
              >
                {item}
              </a>
            ))}
            {/* New buttons for desktop view */}
            <a
              href="#"
              className="bg-teal-700 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Partner with Us
            </a>
            <a
              href="#"
              className="bg-teal-700 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Login
            </a>
            <a
              href="#"
              className="bg-teal-700 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Signup
            </a>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Updated navigation items for mobile view */}
            {['About Us', 'Services', 'Careers', "FAQ's", 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="block bg-teal-700 text-white px-4 py-2 rounded-full text-base font-medium hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Partner with Us
            </a>
            <a
              href="#"
              className="block bg-teal-700 text-white px-4 py-2 rounded-full text-base font-medium hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Login
            </a>
            <a
              href="#"
              className="block bg-teal-700 text-white px-4 py-2 rounded-full text-base font-medium hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Signup
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
