import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Camera, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Compass className="w-6 h-6" />
            <span className="text-xl font-bold">Unplanned Trips</span>
          </div>
          <p className="text-gray-400">Your trusted partner in creating unforgettable travel experiences.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/destinations" className="hover:text-white">Destinations</Link></li>
            {/* <li><Link to="/adventures" className="hover:text-white">Adventures</Link></li> */}
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-2 text-gray-400">
            <li>C1-602 Plot Nos 8, 11</li>
            <li>Greater Noida, Uttar Pardesh (UP)</li>
            <li>Phone: +91 9145823035</li>
            {/* <li>Email: info@unplannedtrips.com</li> */}
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a 
              href="https://www.instagram.com/ayaz.films/profilecard/?igsh=enhsb2NkdGhsMjFo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-pink-400"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="https://youtube.com/@ayaz.films.?si=ZvzrK3UliL0Tv41e" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-red-400"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}