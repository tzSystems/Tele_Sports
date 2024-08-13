import React from 'react';

const Header: React.FC = () => {
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
        <nav id="navbar" className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 font-medium hover:text-blue-600 transition duration-300">Nyumbani</a>
          <a href="#" className="text-gray-700 font-medium hover:text-blue-600 transition duration-300">Habari</a>
          <a href="#" className="text-gray-700 font-medium hover:text-blue-600 transition duration-300">Mechi</a>
          <a href="#" className="text-gray-700 font-medium hover:text-blue-600 transition duration-300">Timu</a>
          <a href="#" className="text-gray-700 font-medium hover:text-blue-600 transition duration-300">Mawasiliano</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button 
            id="theme-toggle" 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Badilisha Mandhari
          </button>
          <button 
            id="menu-toggle" 
            className="text-gray-800 md:hidden focus:outline-none">
            <span className="text-2xl">&#9776;</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
