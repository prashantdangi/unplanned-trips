import React from 'react';
import { Plane } from 'lucide-react';

export function InternationalTrips() {
  const trips = [
    {
      title: "Japanese Cultural Tour",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
      description: "Immerse yourself in Japanese culture, from ancient temples to modern cities.",
      price: 2999,
      duration: "12 days"
    },
    {
      title: "Italian Adventure",
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
      description: "Experience the best of Italy: Rome, Florence, Venice, and the Amalfi Coast.",
      price: 3499,
      duration: "14 days"
    },
    {
      title: "Australian Outback",
      image: "https://images.unsplash.com/photo-1529108190281-9d6ebf35a79e?auto=format&fit=crop&w=800&q=80",
      description: "Discover the unique landscapes and wildlife of the Australian Outback.",
      price: 3999,
      duration: "15 days"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Plane className="w-12 h-12 text-blue-600 mr-4" />
          <h1 className="text-4xl font-bold">International Trips</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={trip.image} alt={trip.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{trip.title}</h3>
                <p className="text-gray-600 mb-4">{trip.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">${trip.price}</span>
                    <span className="text-gray-500 ml-2">/ {trip.duration}</span>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}