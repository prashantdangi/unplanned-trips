import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Sissu() {
  const navigate = useNavigate();
  
  const handleSendQuery = () => {
    const message = "I'm interested in the Sissu tour package";
    navigate('/?scroll=contact', { state: { defaultMessage: message } });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative h-[60vh]">
        <img
          src="https://static.thehosteller.com/hostel/images/sissu%20lake.jpg/sissu%20lake-1721310104493.jpg"
          alt="Sissu"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Sissu</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Gateway to Spiti</h2>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Sissu, a pristine village in the Lahaul Valley, serves as the gateway to the mystical Spiti Valley. Known for its dramatic landscapes, glaciers, and waterfalls, Sissu offers visitors a glimpse into the raw beauty of the Trans-Himalayan region.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Highlights</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Sissu Waterfall - Spectacular cascade amidst mountains</li>
            <li>Sissu Lake - Crystal clear waters reflecting snow peaks</li>
            <li>Khangsar Khar - Ancient fort with panoramic views</li>
            <li>Glacier View Point - Stunning views of surrounding glaciers</li>
            <li>Buddhist Monasteries - Ancient centers of spiritual learning</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Best Time to Visit</h3>
          <p className="mb-6">
            The best time to visit is from June to September when the Rohtang Pass is open. Winters (October-May) are extremely cold with limited accessibility due to heavy snowfall.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4">Package Details</h3>
            <ul className="space-y-2">
              <li><strong>Duration:</strong> 2-4 days</li>
              <li><strong>Starting from:</strong> ₹4,999 per person</li>
              <li><strong>Includes:</strong> Homestay accommodation, meals, local sightseeing</li>
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