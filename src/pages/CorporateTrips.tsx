import React from 'react';
import { Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function CorporateTrips() {
  const navigate = useNavigate();
  
  const handleSendQuery = (trip: any) => {
    const message = `I'm interested in the ${trip.title} (${trip.duration}) Corporate package - ₹${trip.price}`;
    navigate('/?scroll=contact', { state: { defaultMessage: message } });
  };

  const trips = [
    {
      title: "Kashmir",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Neeulm_Valley_AJK_%28Arang_Kel%29.jpg/800px-Neeulm_Valley_AJK_%28Arang_Kel%29.jpg",
      description: "Renowned for its stunning natural beauty known as Paradise on Earth",
      price: 7999,
      originalPrice: 9999,
      duration: "4 days"
    },
    {
      title: "Jibhi & Tirthan Valley",
      image: "https://journeybasket.com/wp-content/uploads/2023/05/main-banner.jpg",
      description: "Team building retreat in the serene valleys of Himachal Pradesh.",
      price: 7999,
      originalPrice: 9999,
      duration: "4 days"
    },
    {
      title: "Manali Adventure",
      image: "https://risingkashmir.blr1.digitaloceanspaces.com/wp-content/uploads/2024/05/10010628/Image-View-1-30.png",
      description: "Experience the adventure paradise with thrilling activities and snow-capped peaks.",
      price: 7999,
      originalPrice: 9999,
      duration: "5 days"
    },
    {
      title: "Kasol Backpacking",
      image: "https://cdn.abhibus.com/2024/05/Things-to-Do-in-Kasol.jpg",
      description: "Explore the Mini Israel of India with its unique culture and stunning landscapes.",
      price: 7999,
      originalPrice: 9999,
      duration: "4 days"
    },
    {
      title: "Sissu & Spiti Valley",
      image: "https://static.thehosteller.com/hostel/images/sissu%20lake.jpg/sissu%20lake-1721310104493.jpg",
      description: "Journey through the gateway to Spiti and discover the cold desert mountains.",
      price: 7999,
      originalPrice: 9999,
      duration: "7 days"
    },
    {
      title: "Chopta-Tungnath Trek",
      image: "https://imgcld.yatra.com/ytimages/image/upload/t_yt_blog_w_800_c_fill_g_auto_q_auto:good_f_jpg/v1481019868/DO_NOT_USE_DISCOVER_INDIA_EDITORIAL/Chopta_Blog1.jpg",
      description: "Trek to heaven through the magnificent Himalayan trails to the highest Shiva temple.",
      price: 7999,
      originalPrice: 9999,
      duration: "6 days"
    },
    {
      title: "Sangla Valley",
      image: "https://imgcld.yatra.com/ytimages/image/upload/t_yt_blog_c_fill_q_auto:good_f_auto_w_800_h_500/v1497334734/DO_NOT_USE_DISCOVER_INDIA_EDITORIAL/Sangla_Valleyc.jpg",
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
          <Briefcase className="w-12 h-12 text-blue-600 mr-4" />
          <h1 className="text-4xl font-bold">Corporate Trips</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
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