import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Kashmir() {
  const navigate = useNavigate();
  
  const handleSendQuery = () => {
    const message = "I'm interested in the Kashmir tour package";
    navigate('/?scroll=contact', { state: { defaultMessage: message } });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Neeulm_Valley_AJK_%28Arang_Kel%29.jpg/800px-Neeulm_Valley_AJK_%28Arang_Kel%29.jpg"
          alt="Kashmir"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Kashmir</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Paradise on Earth</h2>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Kashmir, often referred to as "Paradise on Earth," is a region of breathtaking natural beauty located in the northernmost part of India. Known for its pristine lakes, magnificent gardens, snow-capped mountains, and rich cultural heritage, Kashmir offers visitors an unforgettable experience.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Highlights</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Dal Lake - Take a shikara ride on the famous Dal Lake</li>
            <li>Mughal Gardens - Visit the beautiful Nishat and Shalimar gardens</li>
            <li>Gulmarg - Experience one of the world's highest gondola rides</li>
            <li>Pahalgam - Explore the picturesque valley and go river rafting</li>
            <li>Sonamarg - Witness the stunning meadows and glaciers</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Best Time to Visit</h3>
          <p className="mb-6">
            The best time to visit Kashmir is from March to October. Spring (March-May) brings blooming flowers, summer (June-August) offers perfect weather for outdoor activities, and autumn (September-October) paints the valley in golden hues.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4">Package Details</h3>
            <ul className="space-y-2">
              <li><strong>Duration:</strong> 4-7 days</li>
              <li><strong>Starting from:</strong> ₹7,999 per person</li>
              <li><strong>Includes:</strong> Accommodation, transfers, some meals, sightseeing</li>
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