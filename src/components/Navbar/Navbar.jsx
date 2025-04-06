import React, { useState, useEffect } from 'react';
import { FaSearch, FaPhoneAlt, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import Logo1 from '../../assets/Logo1.png';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 w-full text-white py-4 px-6 md:px-10 flex items-center justify-between z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-700/70 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="flex items-center gap-4 md:gap-10">
        <FaSearch className="text-xl cursor-pointer" />
        <div className="hidden md:flex gap-6">
          <a href="#home" className="text-lg font-medium tracking-wide hover:text-gray-300 border-b-2 border-white pb-1">HOME</a>
          <a href="#about" className="text-lg font-medium tracking-wide hover:text-gray-300">ABOUT US</a>
          <a href="#design" className="text-lg font-medium tracking-wide hover:text-gray-300">DESIGN</a>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <img src={Logo1} alt="Logo" className="w-10 md:w-12" />
        <span className="text-lg font-semibold tracking-wide">The Wadhwa Group</span>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="hidden md:flex gap-6">
          <a href="#residential" className="text-lg font-medium tracking-wide hover:text-gray-300">RESIDENTIAL</a>
          <a href="#commercial" className="text-lg font-medium tracking-wide hover:text-gray-300">COMMERCIAL</a>
          <a href="#township" className="text-lg font-medium tracking-wide hover:text-gray-300">TOWNSHIP</a>
          <a href="#redevelopment" className="text-lg font-medium tracking-wide hover:text-gray-300">REDEVELOPMENT</a>
          <FaPhoneAlt className="text-xl cursor-pointer" />
          <FaEnvelope className="text-xl cursor-pointer" />
        </div>
        <FaBars className="text-xl cursor-pointer" onClick={toggleMenu} />
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-gray-800/90 backdrop-blur-lg text-white transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50 p-5`}> 
        <div className="flex justify-between items-center mb-5">
          <span className="text-lg font-semibold">Menu</span>
          <FaTimes className="text-xl cursor-pointer" onClick={toggleMenu} />
        </div>
        <nav className="flex flex-col gap-5">
          <a href="#home" className="text-lg hover:text-gray-300" onClick={toggleMenu}>HOME</a>
          <a href="#about" className="text-lg hover:text-gray-300" onClick={toggleMenu}>ABOUT US</a>
          <a href="#design" className="text-lg hover:text-gray-300" onClick={toggleMenu}>DESIGN</a>
          <a href="#residential" className="text-lg hover:text-gray-300" onClick={toggleMenu}>RESIDENTIAL</a>
          <a href="#commercial" className="text-lg hover:text-gray-300" onClick={toggleMenu}>COMMERCIAL</a>
          <a href="#township" className="text-lg hover:text-gray-300" onClick={toggleMenu}>TOWNSHIP</a>
          <a href="#redevelopment" className="text-lg hover:text-gray-300" onClick={toggleMenu}>REDEVELOPMENT</a>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;