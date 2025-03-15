import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Kasol() {
  const navigate = useNavigate();
  
  const handleSendQuery = () => {
    const message = "I'm interested in the Kasol tour package";
    navigate('/?scroll=contact', { state: { defaultMessage: message } });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative h-[60vh]">
        <img
          src="https://cdn.abhibus.com/2024/05/Things-to-Do-in-Kasol.jpg"
          alt="Kasol"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Kasol</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Mini Israel of India</h2>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Kasol, nestled in the Parvati Valley of Himachal Pradesh, is a picturesque hamlet known for its stunning landscapes, vibrant culture, and Israeli influence. This backpacker's paradise offers a unique blend of natural beauty, trekking opportunities, and a distinctive cultural atmosphere.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Highlights</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Parvati River - Perfect spots for riverside camping</li>
            <li>Malana Village - Ancient village with unique culture</li>
            <li>Tosh Valley - Spectacular mountain views and treks</li>
            <li>Manikaran - Famous for hot springs and Gurudwara</li>
            <li>Cafes - Experience Israeli and local Himachali cuisine</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Best Time to Visit</h3>
          <p className="mb-6">
            March to June offers pleasant weather perfect for outdoor activities. October to February is ideal for those who enjoy cold weather and snow. Monsoon season (July-September) should be avoided due to landslides.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4">Package Details</h3>
            <ul className="space-y-2">
              <li><strong>Duration:</strong> 3-5 days</li>
              <li><strong>Starting from:</strong> ₹5,499 per person</li>
              <li><strong>Includes:</strong> Accommodation, trekking guides, local transfers</li>
            </ul>
          </div>

          <button
            onClick={handleSendQuery}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
} 