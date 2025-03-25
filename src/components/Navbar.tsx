import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Phone, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-10 bg-blue-900">
      <div className="flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="https://i.imgur.com/mweC03c.png" 
            alt="Logo" 
            className="h-8" 
          />
          <span className="text-white font-semibold text-xl">Unplanned Trips</span>
          {/* <img 
            src="https://i.imgur.com/mweC03c.png" 
            alt="Logo" 
            className="h-8" 
          /> */}
        </Link>

        {/* Mobile menu button */}
        <button 
          className="block md:hidden text-white hover:text-yellow-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-8 w-8" />
          ) : (
            <Menu className="h-8 w-8" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-white">
          <Link to="/backpacking" className="hover:text-yellow-400">Backpacking</Link>
          <Link to="/weekend-getaways" className="hover:text-yellow-400">Weekend Getaways</Link>
          <Link to="/solo-travels" className="hover:text-yellow-400">Solo Travels</Link>
          <Link to="/about" className="hover:text-yellow-400">About Us</Link>
          <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-white" />
              <span className="text-white">+91 7494951776</span>
            </div>
            <Link 
              to="/?scroll=contact" 
              className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition"
            >
              Send Query
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`
          md:hidden 
          ${isMenuOpen ? 'block' : 'hidden'} 
          bg-white 
          absolute 
          w-full 
          top-full 
          left-0 
          shadow-lg
        `}
      >
        <div className="px-4 py-2 space-y-3">
          <Link 
            to="/backpacking" 
            className="block text-black hover:text-yellow-400 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Backpacking
          </Link>
          <Link 
            to="/weekend-getaways" 
            className="block text-black hover:text-yellow-400 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Weekend Getaways
          </Link>
          <Link 
            to="/solo-travels" 
            className="block text-black hover:text-yellow-400 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Solo Travels
          </Link>
          <Link 
            to="/about" 
            className="block text-black hover:text-yellow-400 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className="block text-black hover:text-yellow-400 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="flex flex-col space-y-3 text-black py-2">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-black" />
              <span className="text-black">+91 7494951776</span>
            </div>
            <Link 
              to="/?scroll=contact"
              className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-center transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Send Query
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}