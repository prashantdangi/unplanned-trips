import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Search, MapPin, Calendar, Users, TrendingUp, Globe, Camera, Phone, Backpack, Plane, Mountain, Heart, Briefcase, Sun, MapPinned, PhoneCall, Luggage, Share2, MessageCircle, Star, User, ChevronDown } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsWhatsapp } from 'react-icons/bs';

type TripCategory = {
  title: string;
  destinations: {
    name: string;
    link: string;
  }[];
};

const tripCategories: TripCategory[] = [
  {
    title: "Backpacking Trips",
    destinations: [
      { name: "Kasol", link: "/destinations/kasol" },
      { name: "Manali", link: "/destinations/manali" },
      { name: "Jibhi", link: "/destinations/jibhi-trithan" }
    ]
  },
  {
    title: "Weekend Getaways",
    destinations: [
      { name: "Chopta-Tungnath", link: "/destinations/chopta-tungnath" },
      { name: "Sissu", link: "/destinations/sissu" }
    ]
  },
  {
    title: "Solo Travels",
    destinations: [
      { name: "Kashmir", link: "/destinations/kashmir" },
      { name: "Kasol", link: "/destinations/kasol" },
      { name: "Manali", link: "/destinations/manali" }
    ]
  },
  {
    title: "Adventure Treks",
    destinations: [
      { name: "Chopta-Tungnath", link: "/destinations/chopta-tungnath" },
      { name: "Kashmir", link: "/destinations/kashmir" }
    ]
  },
  {
    title: "Honeymoon Trips",
    destinations: [
      { name: "Kashmir", link: "/destinations/kashmir" },
      { name: "Jibhi", link: "/destinations/jibhi-trithan" }
    ]
  },
  {
    title: "Corporate Trips",
    destinations: [
      { name: "Manali", link: "/destinations/manali" },
      { name: "Sissu", link: "/destinations/sissu" }
    ]
  }
];

export function Home() {
  const location = useLocation();
  const state = location.state as { defaultMessage?: string } | null;
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    phone: '',
    message: state?.defaultMessage || ''
  });

  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    // Handle scroll to contact form when URL has ?scroll=contact
    if (location.search.includes('scroll=contact')) {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Update message when state changes
    if (state?.defaultMessage) {
      setFormData(prev => ({
        ...prev,
        message: state.defaultMessage
      }));
    }

    // Open the modal when the component mounts
    setIsModalOpen(true);
  }, [location, state]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `
New Contact Form Submission:
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}
    `.trim();

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/917494951776?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Optional: Reset the form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Modal for Contact Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-3xl mx-auto p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl font-bold"
            >
              &times;
            </button>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Have Doubts? Talk to Our Experts!</h2>
              <p className="text-xl text-gray-600">We would love to craft a trip just for you</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Update Desktop Categories Navigation Bar to only show on large screens */}
      <nav className="hidden lg:block bg-blue-600 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8">
            {tripCategories.map((category) => (
              <div
                key={category.title}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(category.title)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="flex items-center space-x-1 py-4 px-2 text-white hover:text-gray-100 font-medium"
                >
                  <span>{category.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {openDropdown === category.title && (
                  <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                    {category.destinations.map((destination) => (
                      <Link
                        key={destination.name}
                        to={destination.link}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {destination.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 h-[60vh]">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://i.imgur.com/SWe83Jn.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">Discover Your Next Adventure</h1>
          <p className="text-lg md:text-xl text-center mb-6">Explore the world's most exciting destinations</p>
        </div>
      </header>

      {/* Circular Trip Categories Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Explore Our Trip Categories</h2>
          
          <div className="grid grid-cols-3 gap-8">
            {[
              {
                title: "Backpacking Trips",
                icon: Backpack,
                link: "/backpacking"
              },
              {
                title: "Weekend Getaways",
                icon: Calendar,
                link: "/weekend-getaways"
              },
              {
                title: "Solo Travels",
                icon: User,
                link: "/solo-travels"
              },
              {
                title: "Adventure Treks",
                icon: Mountain,
                link: "/adventure-treks"
              },
              {
                title: "Honeymoon Trips",
                icon: Heart,
                link: "/honeymoon"
              },
              {
                title: "Corporate Trips",
                icon: Briefcase,
                link: "/corporate"
              }
            ].map((category, index) => (
              <Link to={category.link} key={index} className="block group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 flex items-center justify-center bg-blue-700 rounded-full mb-2">
                    <category.icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hottest Destinations - Now Static */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-16">
            <Sun className="w-8 h-8 text-yellow-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">Popular Destinations</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/destinations/kashmir" className="relative group overflow-hidden rounded-lg cursor-pointer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Neeulm_Valley_AJK_%28Arang_Kel%29.jpg/800px-Neeulm_Valley_AJK_%28Arang_Kel%29.jpg"
                alt="Kashmir"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-bold text-white mb-1">Kashmir</h3>
                <p className="text-gray-200">Paradise on Earth</p>
              </div>
            </Link>

            <Link to="/destinations/jibhi-trithan" className="relative group overflow-hidden rounded-lg cursor-pointer">
              <img
                src="https://journeybasket.com/wp-content/uploads/2023/05/main-banner.jpg"
                alt="Jibhi and Trithan Valley"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-bold text-white mb-1">Jibhi & Trithan Valley</h3>
                <p className="text-gray-200">Hidden gems of Himachal</p>
              </div>
            </Link>

            <Link to="/destinations/manali" className="relative group overflow-hidden rounded-lg cursor-pointer">
              <img
                src="https://risingkashmir.blr1.digitaloceanspaces.com/wp-content/uploads/2024/05/10010628/Image-View-1-30.png"
                alt="Manali"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-bold text-white mb-1">Manali</h3>
                <p className="text-gray-200">Adventure paradise</p>
              </div>
            </Link>

            <Link to="/destinations/kasol" className="relative group overflow-hidden rounded-lg cursor-pointer">
              <img
                src="https://cdn.abhibus.com/2024/05/Things-to-Do-in-Kasol.jpg"
                alt="Kasol"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-bold text-white mb-1">Kasol</h3>
                <p className="text-gray-200">Mini Israel of India</p>
              </div>
            </Link>

            <Link to="/destinations/sissu" className="relative group overflow-hidden rounded-lg cursor-pointer">
              <img
                src="https://static.thehosteller.com/hostel/images/sissu%20lake.jpg/sissu%20lake-1721310104493.jpg"
                alt="Sissu"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-bold text-white mb-1">Sissu</h3>
                <p className="text-gray-200">Gateway to Spiti</p>
              </div>
            </Link>

            <Link to="/destinations/chopta-tungnath" className="relative group overflow-hidden rounded-lg cursor-pointer">
              <img
                src="https://imgcld.yatra.com/ytimages/image/upload/t_yt_blog_w_800_c_fill_g_auto_q_auto:good_f_jpg/v1481019868/DO_NOT_USE_DISCOVER_INDIA_EDITORIAL/Chopta_Blog1.jpg"
                alt="Chopta-Tungnath"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-bold text-white mb-1">Chopta-Tungnath</h3>
                <p className="text-gray-200">Trek to heaven</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Unplanned Trips?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-blue-600 mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Unique Destinations</h3>
              <p className="text-gray-600">Discover hidden gems and extraordinary places around the globe</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-blue-600 mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Booking</h3>
              <p className="text-gray-600">Easy scheduling and free cancellation up to 24 hours before</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-blue-600 mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
              <p className="text-gray-600">Professional local guides to enhance your experience</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-blue-600 mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Value</h3>
              <p className="text-gray-600">Competitive prices and exclusive deals for our customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trip Categories Section - Now with Swiper */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Explore Our Trip Categories</h2>
          
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 }
            }}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="pb-12"
          >
            {[
              {
                title: "Backpacking Trips",
                description: "Adventure on a budget with like-minded travelers",
                icon: Backpack,
                image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=800&q=80",
                link: "/backpacking"
              },
              {
                title: "Weekend Getaways",
                description: "Perfect short breaks to recharge",
                icon: Calendar,
                image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
                link: "/weekend-getaways"
              },
              {
                title: "Solo Travels",
                description: "Embark on your personal journey",
                icon: User,
                image: "https://images.unsplash.com/photo-1503221043305-f7498f8b7888?auto=format&fit=crop&w=800&q=80",
                link: "/solo-travels"
              },
              {
                title: "Adventure Treks",
                description: "Challenge yourself in nature",
                icon: Mountain,
                image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
                link: "/adventure-treks"
              },
              {
                title: "Honeymoon Trips",
                description: "Romantic getaways for couples",
                icon: Heart,
                image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80",
                link: "/honeymoon"
              },
              {
                title: "Corporate Trips",
                description: "Team building and business retreats",
                icon: Briefcase,
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
                link: "/corporate"
              }
            ].map((category, index) => (
              <SwiperSlide key={index}>
                <Link to={category.link} className="block group h-full">
                  <div className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition h-[400px]">
                    <div className="absolute inset-0">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition"></div>
                    </div>
                    <div className="relative h-full flex flex-col items-center justify-center text-white text-center p-8">
                      <category.icon className="w-12 h-12 mb-4" />
                      <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                      <p className="text-lg">{category.description}</p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Plan Your Stress-Free Trip */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Plan Your Stress-Free Trip</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <MapPinned className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Choose Your Travel Destination</h3>
              <p className="text-gray-600 text-center">From a buffet of trip itineraries handcrafted by our travel experts</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <PhoneCall className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Ask Queries & Book Your Trip!</h3>
              <p className="text-gray-600 text-center">Connect with us over a call, solve your queries and book your trip</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Luggage className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Ohai, Your Trip Day Has Arrived</h3>
              <p className="text-gray-600 text-center">Keep your adventure spirit high and pack your bags for a lifetime experience</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Share2 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Share #InstaPerfect Memories</h3>
              <p className="text-gray-600 text-center">Flaunt your memories over social media with your dear ones</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg">
              Call us or drop Hi on WhatsApp at{' '}
              <a href="tel:+917494951776" className="text-blue-600 font-semibold">
                (+91 7494951776)
              </a>
            </p>
          </div>
        </div>
      </section>

       {/* Testimonials Section */}
       <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-16">
            <MessageCircle className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">Traveler Reviews</h2>
          </div>
          
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{ delay: 4000 }}
            loop={true}
            className="pb-12"
          >
            {[
              {
                name: "Priya Sharma",
                location: "Kasol & Tosh Trek",
                rating: 5,
                review: "The Kasol-Tosh trek was incredible! Our guide Rajesh was knowledgeable and made sure everyone was comfortable. The homestay experience in Tosh was authentic and the views were breathtaking. Worth every penny!",
                image: "https://i.pravatar.cc/150?img=5",
                tripDate: "March 2024"
              },
              {
                name: "Aditya Patel",
                location: "Manali Backpacking",
                rating: 4,
                review: "Great budget trip to Manali! Loved the hostel arrangements and the group activities. The paragliding experience was a highlight. Only suggestion would be to have more free time for personal exploration.",
                image: "https://i.pravatar.cc/150?img=11",
                tripDate: "February 2024"
              },
              {
                name: "Sarah & Mike",
                location: "Jibhi Valley Retreat",
                rating: 5,
                review: "Perfect honeymoon destination! The wooden cottage stay was romantic and cozy. The local food was delicious and the waterfall trek was amazing. Thank you for making our honeymoon so special!",
                image: "https://i.pravatar.cc/150?img=9",
                tripDate: "January 2024"
              },
              {
                name: "Rahul Mehra",
                location: "Spiti Valley Circuit",
                rating: 5,
                review: "An unforgettable journey through Spiti! The team handled everything perfectly - from permits to accommodations. Key Monastery visit and stargazing at Kibber were highlights. Highly recommend for adventure seekers!",
                image: "https://i.pravatar.cc/150?img=12",
                tripDate: "December 2023"
              },
              {
                name: "Aadi Sharma",
                location: "Chopta-Tungnath Trek",
                rating: 4,
                review: "Beautiful trek with amazing views of the Himalayas. The camping experience was great and food was surprisingly good. Trek was bit challenging but guides were very supportive. Would have loved more photography stops.",
                image: "https://i.pravatar.cc/150?img=3",
                tripDate: "November 2023"
              },
              {
                name: "Team TechCorp",
                location: "Corporate Retreat - Sangla",
                rating: 5,
                review: "Organized a team retreat for 15 people and it was flawless! The adventure activities helped with team bonding, and the meeting arrangements were perfect. Our team returned refreshed and motivated!",
                image: "https://i.pravatar.cc/150?img=8",
                tripDate: "October 2023"
              }
            ].map((review, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < review.rating ? 'fill-current' : 'stroke-current fill-none'}`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">{review.tripDate}</span>
                  </div>
                  <p className="text-gray-600 mb-4 h-32 overflow-y-auto">
                    "{review.review}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* YouTube Videos Section */}
     {/* <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-16">
            <Camera className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">Watch Our Travel Stories</h2>
          </div>
          
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            navigation={true}
            className="pb-12"
          >
            <SwiperSlide>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    src="https://www.youtube.com/embed/10eqIHbKQEk"
                    title="Jibhi Travel Guide"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Kashmir Solo Trip</h3>
                  <p className="text-gray-600">I Went to Kashmir Solo in Just ₹520</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    src="https://www.youtube.com/embed/lrHFu10EixM"
                    title="Manali Adventures"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Parviti Valley and Lapas village </h3>
                  <p className="text-gray-600">A Dream Trip To Kasol (Part-2)</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    src="https://www.youtube.com/embed/ddGBwns92QI"
                    title="Kasol Experience"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Kasol Travel Vlog</h3>
                  <p className="text-gray-600">My first Solo Trip</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    src="https://www.youtube.com/embed/gMSY4DsJTgo"
                    title="Spiti Valley"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Spiti Valley Guide</h3>
                  <p className="text-gray-600">Ultimate road trip adventure</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section> */}

     

      {/* Contact Form Section - Add id for scrolling */}
      <section id="contact-form" className="py-20 px-6 bg-white pb-24 lg:pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Have Doubts? Talk to Our Experts!</h2>
            <p className="text-xl text-gray-600">We would love to craft a trip just for you</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Mobile Bottom Navigation Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50">
        <div className="flex justify-around items-center h-16 px-4">
          {/* WhatsApp Button */}
          <a 
            href={`https://wa.me/917494951776`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-green-600"
          >
            <BsWhatsapp className="w-6 h-6" />
            <span className="text-xs mt-1">WhatsApp</span>
          </a>

          {/* Send Query Button */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex flex-col items-center text-blue-600"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-xs mt-1">Send Query</span>
          </button>

          {/* Call Button */}
          <a 
            href="tel:+917494951776"
            className="flex flex-col items-center text-red-600"
          >
            <Phone className="w-6 h-6" />
            <span className="text-xs mt-1">Call</span>
          </a>
        </div>
      </div>
    </>
  );
}