import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white text-sm px-4 py-3">
      <div >
        
        {/* Address Section */}
        <div className="mb-2 md:mb-0 text-left">
          <p className="font-semibold">Clothly</p>
          <p>123, 4th Cross, Indiranagar</p>
          <p>Bangalore, India - 560038</p>
          <p>Email: support@clothly.com</p>
        </div>

        {/* Links + Social Icons (Right Side) */}
        <div className="flex flex-col items-end text-right">
          <div className="flex gap-4 mb-1">
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
          <div className="flex gap-3 text-lg">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-2 text-xs text-gray-300">
        © {new Date().getFullYear()} Clothly. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
