import React from 'react';
import { User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function SoloTravels() {
  const navigate = useNavigate();
  
  const handleSendQuery = (trip: any) => {
    const message = `I'm interested in the ${trip.title} (${trip.duration}) Solo Travel package - ₹${trip.price}`;
    navigate('/?scroll=contact', { state: { defaultMessage: message } });
  };

  const trips = [
    {
      title: "Jibhi & Tirthan Valley",
      image: "/images/Jibhi_tirthan_valley.jpg",
      description: "Perfect for solo travelers seeking peace in Himachal's valleys.",
      price: 7999,
      originalPrice: 9999,
      duration: "4 days"
    },
    {
      title: "Manali Adventure",
      image: "/images/manali.jpg",
      description: "Experience the adventure paradise with thrilling activities and snow-capped peaks.",
      price: 7999,
      originalPrice: 9999,
      duration: "5 days"
    },
    {
      title: "Kasol Backpacking",
      image: "/images/kasol.jpg",
      description: "Explore the Mini Israel of India with its unique culture and stunning landscapes.",
      price: 7999,
      originalPrice: 9999,
      duration: "4 days"
    },
    {
      title: "Sissu & Spiti Valley",
      image: "/images/sissu.jpg",
      description: "Journey through the gateway to Spiti and discover the cold desert mountains.",
      price: 7999,
      originalPrice: 9999,
      duration: "7 days"
    },
    {
      title: "Chopta-Tungnath Trek",
      image: "/images/Chopta-Tungnath.jpg",
      description: "Trek to heaven through the magnificent Himalayan trails to the highest Shiva temple.",
      price: 7999,
      originalPrice: 9999,
      duration: "6 days"
    },
    {
      title: "Sangla Valley",
      image: "/images/Sangla-Valley.jpg",
      description: "Experience tranquility in the beautiful Sangla Valley of Kinnaur region.",
      price: 7999,
      originalPrice: 9999,
      duration: "5 days"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <User className="w-12 h-12 text-blue-600 mr-4" />
          <h1 className="text-4xl font-bold">Solo Travels</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={trip.image} alt={trip.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{trip.title}</h3>
                <p className="text-gray-600 mb-4">{trip.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-blue-600">₹{trip.price}</span>
                    <span className="text-gray-500 line-through ml-2">₹{trip.originalPrice}</span>
                    <span className="text-gray-500 ml-2">/ {trip.duration}</span>
                  </div>
                  <button 
                    onClick={() => handleSendQuery(trip)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition"
                  >
                    Send Query
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