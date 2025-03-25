import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Camera, Instagram, Youtube, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src="https://i.imgur.com/mweC03c.png" alt="Logo" className="w-6 h-6" />
            <span className="text-xl font-bold text-white">Unplanned Trips</span>
          </div>
          <p className="text-blue-100">Your trusted partner in creating unforgettable travel experiences.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-white">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            {/* <li><Link to="/destinations" className="hover:text-white">Destinations</Link></li> */}
            {/* <li><Link to="/adventures" className="hover:text-white">Adventures</Link></li> */}
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>
        
        <div>
          <div className="flex items-start space-x-4">
            <Phone className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <p className="text-white">+91 7494951776</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <a 
              href="https://www.instagram.com/ayaz.films/profilecard/?igsh=enhsb2NkdGhsMjFo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="https://youtube.com/@ayaz.films.?si=ZvzrK3UliL0Tv41e" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}