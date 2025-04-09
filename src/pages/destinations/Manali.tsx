import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Manali() {
  const navigate = useNavigate();
  
  const handleSendQuery = () => {
    const message = "I'm interested in the Manali tour package";
    navigate('/?scroll=contact', { state: { defaultMessage: message } });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative h-[60vh]">
        <img
          src="https://risingkashmir.blr1.digitaloceanspaces.com/wp-content/uploads/2024/05/10010628/Image-View-1-30.png"
          alt="Manali"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Manali</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Adventure Paradise</h2>
        
        <div className="prose max-w-none">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4">Unplanned Trips Special Package (4N/5D)</h3>
            <p className="mb-4"><strong>Every Friday Departure</strong></p>
            
            <h4 className="font-semibold mb-2">Brief Itinerary:</h4>
            <ul className="space-y-2 mb-4">
              <li>Day 0: Departure from Delhi/Chandigarh</li>
              <li>Day 1: Manali arrival, Mall Road & Old Manali exploration</li>
              <li>Day 2: Atal Tunnel, Sissu visit with bonfire & music</li>
              <li>Day 3: Manali to Kasol (Campside stay)</li>
              <li>Day 4: Kasol to Manikaran (Parvati Valley)</li>
              <li>Day 5: Delhi arrival</li>
            </ul>

            <div className="mt-4">
              <p><strong>Includes:</strong> Transportation, Hotels, Breakfast & Dinner, Expert Guides, Bonfire</p>
              <p className="mt-2">
                <strong>Contact:</strong> +91 7568381776<br />
                <strong>Website:</strong> www.unplannedtrips.co
              </p>
              <a 
                href="https://drive.google.com/file/d/1nbaLZWj3o_FgC0Qj7lOauQ89x8XEoX0W/view?usp=sharing" 
                download
                className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition flex items-center"
              >
                <svg 
                  className="w-4 h-4 mr-2" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
                </svg>
                Get Itinerary PDF
              </a>
            </div>
          </div>

          <p className="text-lg mb-6">
            Manali, a vibrant hill station nestled in the mountains of Himachal Pradesh, is a perfect blend of adventure, nature, and culture. From snow-capped peaks to rushing rivers, ancient temples to modern cafes, Manali offers something for every type of traveler.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Highlights</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Rohtang Pass - Snow-covered paradise with stunning views</li>
            <li>Solang Valley - Hub for adventure sports</li>
            <li>Hadimba Temple - Ancient wooden temple amidst cedar forest</li>
            <li>Old Manali - Vibrant cafes and bohemian culture</li>
            <li>River Rafting - Thrilling adventures on River Beas</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Best Time to Visit</h3>
          <p className="mb-6">
            Manali is a year-round destination. Summer (March-June) is perfect for outdoor activities, monsoon (July-August) brings lush greenery, and winter (December-February) offers snow activities and sports.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4">Package Details</h3>
            <ul className="space-y-2">
              <li><strong>Duration:</strong> 4-6 days</li>
              <li><strong>Starting from:</strong> ₹6,999 per person</li>
              <li><strong>Includes:</strong> Hotel stay, sightseeing, adventure activities</li>
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