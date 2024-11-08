import React from 'react';
import logo from '../assets/image.png';
import resume from '../assets/resume.pdf';


const Header = () => {
  return (
    <header className="w-full bg-black shadow-md fixed top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-auto hover:opacity-80 transition-opacity"
            />
          </div>

          {/* Navigation Links - Always visible */}
          <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8 text-sm sm:text-base">
            <a href="#home" className="text-white hover:text-yellow-400 transition-colors whitespace-nowrap">
              Home
            </a>
            <a href="#about" className="text-white hover:text-yellow-400 transition-colors whitespace-nowrap">
              About me
            </a>
            <a href="#education" className="text-white hover:text-yellow-400 transition-colors whitespace-nowrap">
              Education
            </a>
            <a href="#projects" className="text-white hover:text-yellow-400 transition-colors whitespace-nowrap">
              Projects
            </a>
            <a href="#skills" className="text-white hover:text-yellow-400 transition-colors whitespace-nowrap">
              Skills
            </a>
            <a href="#contact" className="text-white hover:text-yellow-400 transition-colors whitespace-nowrap">
              Contact
            </a>
            
            {/* CV Button */}
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-3 py-1 sm:px-4 sm:py-2 rounded-md hover:bg-yellow-500 transition-colors text-sm sm:text-base font-medium"
            >
              CV
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;