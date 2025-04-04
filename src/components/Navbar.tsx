import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Phone, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="https://i.imgur.com/mweC03c.png" 
            alt="Logo" 
            className="h-10 w-10 rounded-full object-cover" 
          />
          <span className="text-gray-900 font-semibold text-xl">Unplanned Trips</span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="block md:hidden text-gray-900 hover:text-blue-600"
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
        <div className="hidden md:flex items-center space-x-6 text-gray-900">
          <Link to="/backpacking" className="hover:text-blue-600">Backpacking</Link>
          <Link to="/weekend-getaways" className="hover:text-blue-600">Weekend Getaways</Link>
          <Link to="/solo-travels" className="hover:text-blue-600">Solo Travels</Link>
          <Link to="/about" className="hover:text-blue-600">About Us</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          <div className="flex items-center space-x-4">
            <Link 
              to="/?scroll=contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
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
          fixed
          w-full 
          top-[64px]
          left-0 
          right-0
          bottom-0
          shadow-lg
          z-40
          overflow-y-auto
        `}
      >
        <div className="px-4 py-2 space-y-3 bg-white">
          <Link 
            to="/backpacking" 
            className="block text-gray-900 hover:text-blue-600 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Backpacking
          </Link>
          <Link 
            to="/weekend-getaways" 
            className="block text-gray-900 hover:text-blue-600 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Weekend Getaways
          </Link>
          <Link 
            to="/solo-travels" 
            className="block text-gray-900 hover:text-blue-600 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Solo Travels
          </Link>
          <Link 
            to="/about" 
            className="block text-gray-900 hover:text-blue-600 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className="block text-gray-900 hover:text-blue-600 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="flex flex-col space-y-3 py-2">
            <Link 
              to="/?scroll=contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center transition"
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