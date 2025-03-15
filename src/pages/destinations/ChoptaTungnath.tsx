import React from 'react';
import { useNavigate } from 'react-router-dom';

export function ChoptaTungnath() {
  const navigate = useNavigate();
  
  const handleSendQuery = () => {
    const message = "I'm interested in the Chopta-Tungnath trek package";
    navigate('/?scroll=contact', { state: { defaultMessage: message } });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative h-[60vh]">
        <img
          src="https://imgcld.yatra.com/ytimages/image/upload/t_yt_blog_w_800_c_fill_g_auto_q_auto:good_f_jpg/v1481019868/DO_NOT_USE_DISCOVER_INDIA_EDITORIAL/Chopta_Blog1.jpg"
          alt="Chopta-Tungnath"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Chopta-Tungnath</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Trek to Heaven</h2>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Chopta-Tungnath, located in Uttarakhand, is a trekker's paradise offering breathtaking views of the Himalayas. Home to the highest Shiva temple in the world, this region combines spiritual significance with natural beauty, making it a unique destination for both adventure seekers and pilgrims.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Highlights</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Tungnath Temple - Highest Shiva temple in the world</li>
            <li>Chandrashila Peak - Stunning sunrise views of Himalayan peaks</li>
            <li>Deoriatal Lake - Beautiful lake with mountain reflections</li>
            <li>Alpine Meadows - Vast stretches of bugyals (high-altitude meadows)</li>
            <li>Rich Wildlife - Spot Himalayan birds and animals</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Best Time to Visit</h3>
          <p className="mb-6">
            April to June and September to November are ideal for trekking. Summer offers pleasant weather and clear views, while autumn brings colorful landscapes. Winter (December-March) offers snow treks but requires proper equipment and guidance.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold mb-4">Package Details</h3>
            <ul className="space-y-2">
              <li><strong>Duration:</strong> 3-4 days</li>
              <li><strong>Starting from:</strong> ₹6,499 per person</li>
              <li><strong>Includes:</strong> Camping equipment, meals, trek guide, permits</li>
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