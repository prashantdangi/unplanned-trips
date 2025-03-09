import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar, Users, TrendingUp, Globe, Camera, Phone, Backpack, Plane, Mountain, Heart, Briefcase, Sun, MapPinned, PhoneCall, Luggage, Share2, MessageCircle, Star, MessageSquare as WhatsappIcon, User } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export function Home() {
  const location = useLocation();
  const state = location.state as { defaultMessage?: string } | null;
  const [searchQuery, setSearchQuery] = React.useState('');
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    phone: '',
    message: state?.defaultMessage || ''
  });

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

    // Create WhatsApp URL (replace YOUR_PHONE_NUMBER with your actual number including country code, e.g., 919145823035)
    const whatsappUrl = `https://wa.me/919145823035?text=${encodeURIComponent(message)}`;
    
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=80"
            alt="Travel Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">Discover Your Next Adventure</h1>
          <p className="text-xl md:text-2xl text-center mb-8">Explore the world's most exciting destinations</p>
          
          <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-xl p-4 w-full max-w-4xl">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex items-center space-x-2 border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-4">
                <Search className="w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  className="w-full text-gray-800 focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center space-x-4">
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </header>

      {/* Trip Categories Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Explore Our Trip Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/backpacking" className="block group">
              <div className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=800&q=80"
                    alt="Backpacking"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition"></div>
                </div>
                <div className="relative p-8 flex flex-col items-center text-white text-center">
                  <Backpack className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Backpacking Trips</h3>
                  <p className="text-lg">Adventure on a budget with like-minded travelers</p>
                </div>
              </div>
            </Link>

            <Link to="/weekend-getaways" className="block group">
              <div className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
                    alt="Weekend Getaways"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition"></div>
                </div>
                <div className="relative p-8 flex flex-col items-center text-white text-center">
                  <Calendar className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Weekend Getaways</h3>
                  <p className="text-lg">Perfect short breaks to recharge</p>
                </div>
              </div>
            </Link>

            <Link to="/solo-travels" className="block group">
              <div className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1503221043305-f7498f8b7888?auto=format&fit=crop&w=800&q=80"
                    alt="Solo Travels"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition"></div>
                </div>
                <div className="relative p-8 flex flex-col items-center text-white text-center">
                  <User className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Solo Travels</h3>
                  <p className="text-lg">Embark on your personal journey</p>
                </div>
              </div>
            </Link>

            <Link to="/adventure-treks" className="block group">
              <div className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
                    alt="Adventure Treks"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition"></div>
                </div>
                <div className="relative p-8 flex flex-col items-center text-white text-center">
                  <Mountain className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Adventure Treks</h3>
                  <p className="text-lg">Challenge yourself in nature</p>
                </div>
              </div>
            </Link>

            <Link to="/honeymoon" className="block group">
              <div className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80"
                    alt="Honeymoon Trips"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition"></div>
                </div>
                <div className="relative p-8 flex flex-col items-center text-white text-center">
                  <Heart className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Honeymoon Trips</h3>
                  <p className="text-lg">Romantic getaways for couples</p>
                </div>
              </div>
            </Link>

            <Link to="/corporate" className="block group">
              <div className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                    alt="Corporate Trips"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition"></div>
                </div>
                <div className="relative p-8 flex flex-col items-center text-white text-center">
                  <Briefcase className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Corporate Trips</h3>
                  <p className="text-lg">Team building and business retreats</p>
                </div>
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

      {/* Hottest Destinations */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-16">
            <Sun className="w-8 h-8 text-yellow-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">Popular Destinations</h2>
          </div>
          
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 }
            }}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="pb-12"
          >
            <SwiperSlide>
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  src="/images/Jibhi_tirthan_valley.jpg"
                  alt="Jibhi and Trithan Valley"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white mb-1">Jibhi & Trithan Valley</h3>
                  <p className="text-gray-200">Hidden gems of Himachal</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  src="images/manali.jpg"
                  alt="Manali"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white mb-1">Manali</h3>
                  <p className="text-gray-200">Adventure paradise</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  src="images/kasol.jpg"
                  alt="Kasol"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white mb-1">Kasol</h3>
                  <p className="text-gray-200">Mini Israel of India</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  src="images/sissu.jpg"
                  alt="Sissu"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white mb-1">Sissu</h3>
                  <p className="text-gray-200">Gateway to Spiti</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  src="images/Chopta-Tungnath.jpg"
                  alt="Chopta-Tungnath"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white mb-1">Chopta-Tungnath</h3>
                  <p className="text-gray-200">Trek to heaven</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  src="images/Sangla-Valley.jpg"
                  alt="Sangla"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white mb-1">Sangla</h3>
                  <p className="text-gray-200">Valley of tranquility</p>
                </div>
              </div>
            </SwiperSlide>
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
              <a href="tel:+15551234567" className="text-blue-600 font-semibold">
                (+91 9145823035)
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-16">
            <Camera className="w-8 h-8 text-red-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">Watch Our Travel Stories</h2>
          </div>
          
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{ delay: 3000 }}
            loop={true}
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

      {/* Contact Form Section - Add id for scrolling */}
      <section id="contact-form" className="py-20 px-6 bg-white">
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
    </>
  );
}