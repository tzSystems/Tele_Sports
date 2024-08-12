import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md fixed w-full z-10 top-0 left-0">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="logo">
          <img
            id="logo-image"
            src="./images/white-logo3.png"
            alt="Logo ya Habari za Soka la Tanzania"
            className="h-8"
          />
        </div>
        <nav id="navbar" className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-600">Nyumbani</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Habari</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Mechi</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Timu</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Mawasiliano</a>
        </nav>
        <div className="flex space-x-4">
          <button id="theme-toggle" className="bg-gray-200 text-gray-800 px-4 py-2 rounded">
            Theme
          </button>
          <button id="menu-toggle" className="text-gray-800 md:hidden">
            <span className="text-2xl">&#9776;</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
