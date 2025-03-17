import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Phone, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-10 bg-black">
      <div className="flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center space-x-2">
          <Compass className="w-8 h-8 text-white" />
          <span className="text-2xl font-bold text-white">UT</span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
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
            {/* <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>+91 9145823035</span>
            </div> */}
            <Link 
              to="/?scroll=contact" 
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg transition"
            >
              Send Query
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-black`}>
        <div className="px-4 py-2 space-y-3">
          <Link 
            to="/backpacking" 
            className="block text-white hover:text-yellow-400 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Backpacking
          </Link>
          <Link 
            to="/weekend-getaways" 
            className="block text-white hover:text-yellow-400 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Weekend Getaways
          </Link>
          <Link 
            to="/solo-travels" 
            className="block text-white hover:text-yellow-400 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Solo Travels
          </Link>
          <Link 
            to="/about" 
            className="block text-white hover:text-yellow-400 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className="block text-white hover:text-yellow-400 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="flex flex-col space-y-3 text-white py-2">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>+91 9145823035</span>
            </div>
            <Link 
              to="/?scroll=contact"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg text-center transition"
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