import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white bg-opacity-80 backdrop-blur-sm shadow-lg fixed w-full z-10 top-0 left-0">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo Section */}
        <div className="logo">
          <img
            id="logo-image"
            src="./images/white-logo3.png"
            alt="Logo ya Habari za Soka la Tanzania"
            className="h-10"
          />
        </div>

        {/* Navigation Links */}
        <nav
          id="navbar"
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex space-y-2 md:space-y-0 md:space-x-6 absolute md:relative top-16 md:top-auto left-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0`}
        >
          <a href="#" className="text-gray-700 font-medium hover:text-blue-600 transition duration-300 block">
            Nyumbani
          </a>
          <a href="#" className="text-gray-700 font-medium hover:text-blue-600 transition duration-300 block">
            Habari
          </a>
          <a href="#" className="text-gray-700 font-medium hover:text-blue-600 transition duration-300 block">
            Mechi
          </a>
          <a href="#" className="text-gray-700 font-medium hover:text-blue-600 transition duration-300 block">
            Timu
          </a>
          <a href="#" className="text-gray-700 font-medium hover:text-blue-600 transition duration-300 block">
            Mawasiliano
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button
            id="theme-toggle"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 hidden md:block"
          >
            Badilisha Mandhari
          </button>
          <button
            id="menu-toggle"
            onClick={toggleMenu}
            className="text-gray-800 md:hidden focus:outline-none"
          >
            <span className="text-2xl">&#9776;</span>
          </button>
        </div>
      </div>

      {/* Mobile Action Button */}
      {isMenuOpen && (
        <div className="block md:hidden p-4 bg-white">
          <button
            id="theme-toggle"
            className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Badilisha Mandhari
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
