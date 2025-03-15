import React from 'react';
import { useNavigate } from 'react-router-dom';

export function JibhiTrithan() {
  const navigate = useNavigate();
  
  const handleSendQuery = () => {
    const message = "I'm interested in the Jibhi & Trithan Valley tour package";
    navigate('/?scroll=contact', { state: { defaultMessage: message } });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative h-[60vh]">
        <img
          src="https://journeybasket.com/wp-content/uploads/2023/05/main-banner.jpg"
          alt="Jibhi and Trithan Valley"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Jibhi & Trithan Valley</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Hidden Gems of Himachal</h2>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Nestled in the heart of Himachal Pradesh, Jibhi and Trithan Valley are pristine destinations known for their untouched beauty, traditional architecture, and serene environment. These lesser-known valleys offer a perfect escape from the crowded tourist spots while providing authentic Himalayan experiences.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Highlights</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Jalori Pass - One of the lowest mountain passes in Himachal</li>
            <li>Serolsar Lake - A pristine high-altitude lake</li>
            <li>Traditional Wooden Temples - Ancient architectural marvels</li>
            <li>Trout Fishing - In the crystal clear Trithan River</li>
            <li>Waterfall Trails - Multiple hidden waterfalls in the region</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Best Time to Visit</h3>
          <p className="mb-6">
            The ideal time to visit is from March to June and September to November. Summers are pleasant while winters offer snow-covered landscapes. Monsoon season (July-August) should be avoided due to landslides.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4">Package Details</h3>
            <ul className="space-y-2">
              <li><strong>Duration:</strong> 3-5 days</li>
              <li><strong>Starting from:</strong> ₹5,999 per person</li>
              <li><strong>Includes:</strong> Homestay accommodation, local transfers, guided treks</li>
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