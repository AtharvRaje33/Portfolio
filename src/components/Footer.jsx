import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t-2 border-yellow-400">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-center text-gray-400">
          &copy; {currentYear} Atharv Raje. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;