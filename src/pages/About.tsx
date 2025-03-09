import React from 'react';
import { Users, Award, Clock, Globe } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Unplanned Trips</h1>
          <p className="text-xl max-w-3xl mx-auto">We're passionate about creating unforgettable travel experiences that push boundaries and create lasting memories.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
            Founded in November 2024, Unplanned Trips was built on the idea that travel should be spontaneous, exciting, and accessible to all. Initially created for solo travelers and adventure enthusiasts, it has since evolved into a thriving community of passionate explorers. We believe the most unforgettable memories are made when you step outside your comfort zone and embrace the unexpected.            </p>
            {/* <p className="text-gray-600">

            </p> */}
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">20+</h3>
              <p className="text-gray-600">Happy Travelers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">10+</h3>
              <p className="text-gray-600">Locations</p>
            </div>
            {/* <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">15+</h3>
              <p className="text-gray-600">Awards Won</p>
            </div> */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7</h3>
              <p className="text-gray-600">Support</p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 place-items-center gap-8">
            {[
              // {
              //   name: "Sarah Johnson",
              //   role: "Founder & CEO",
              //   image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
              // },
              {
                name: "Ayaz",
                role: "Head of Adventures",
                image: "https://yt3.googleusercontent.com/6hRjus18aeW8WQ7q4oOt-ismu095mx05Lsg6qLzFrCuxIkoUKCrbaV4VUGnFR4Tl6TiPSTkP0A=s160-c-k-c0x00ffffff-no-rj"
              },
              // {
              //   name: "Emma Williams",
              //   role: "Travel Experience Director",
              //   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
              // }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col items-center">
                <div className="w-64 h-64 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}