import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

// Define destination data structure
type Destination = {
  name: string;
  path: string;
  description: string;
  image: string;
  tags: string[];
};

// Define available destinations
const destinations: Destination[] = [
  {
    name: "Kashmir",
    path: "/destinations/kashmir",
    description: "Paradise on Earth with stunning lakes and gardens",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Neeulm_Valley_AJK_%28Arang_Kel%29.jpg/800px-Neeulm_Valley_AJK_%28Arang_Kel%29.jpg",
    tags: ["mountains", "lakes", "gardens", "culture", "paradise"]
  },
  {
    name: "Jibhi & Trithan Valley",
    path: "/destinations/jibhi-trithan",
    description: "Hidden gems of Himachal with traditional architecture",
    image: "https://journeybasket.com/wp-content/uploads/2023/05/main-banner.jpg",
    tags: ["peaceful", "offbeat", "nature", "hiking", "traditional"]
  },
  {
    name: "Manali",
    path: "/destinations/manali",
    description: "Adventure paradise with snow-capped peaks",
    image: "https://risingkashmir.blr1.digitaloceanspaces.com/wp-content/uploads/2024/05/10010628/Image-View-1-30.png",
    tags: ["adventure", "snow", "mountains", "sports", "hiking"]
  },
  {
    name: "Kasol",
    path: "/destinations/kasol",
    description: "Mini Israel of India in Parvati Valley",
    image: "https://cdn.abhibus.com/2024/05/Things-to-Do-in-Kasol.jpg",
    tags: ["backpacking", "trekking", "culture", "nature", "hippie"]
  },
  {
    name: "Sissu",
    path: "/destinations/sissu",
    description: "Gateway to Spiti with dramatic landscapes",
    image: "https://static.thehosteller.com/hostel/images/sissu%20lake.jpg/sissu%20lake-1721310104493.jpg",
    tags: ["remote", "peaceful", "mountains", "buddhist", "scenic"]
  },
  {
    name: "Chopta-Tungnath",
    path: "/destinations/chopta-tungnath",
    description: "Trek to the highest Shiva temple",
    image: "https://imgcld.yatra.com/ytimages/image/upload/t_yt_blog_w_800_c_fill_g_auto_q_auto:good_f_jpg/v1481019868/DO_NOT_USE_DISCOVER_INDIA_EDITORIAL/Chopta_Blog1.jpg",
    tags: ["trekking", "spiritual", "nature", "adventure", "scenic"]
  }
];

export function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';

  // Filter destinations based on search query
  const filteredDestinations = destinations.filter(destination => {
    const searchString = `${destination.name} ${destination.description} ${destination.tags.join(' ')}`.toLowerCase();
    return searchString.includes(query);
  });

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          Search Results for "{query}"
        </h1>

        {filteredDestinations.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No destinations found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <Link
                key={destination.path}
                to={destination.path}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <div className="relative h-48">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{destination.name}</h2>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {destination.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 