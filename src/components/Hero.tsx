import React from 'react';
import { MapPin, Clock, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Delicious food spread"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Delicious Food
            <span className="block text-yellow-300">Delivered Fast</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Order from your favorite restaurants or subscribe to our monthly mess plans for daily home-style meals
          </p>
          
          {/* Location Selector */}
          <div className="bg-white rounded-lg p-4 max-w-2xl mx-auto mb-8 shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 flex-1">
                <MapPin className="w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Enter your delivery address"
                  className="flex-1 text-gray-900 placeholder-gray-500 focus:outline-none"
                />
              </div>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors font-medium">
                Find Food
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-2">
                <Clock className="w-5 h-5 text-yellow-300" />
                <span className="text-2xl font-bold">30 min</span>
              </div>
              <p className="text-gray-200">Average Delivery Time</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-2">
                <Star className="w-5 h-5 text-yellow-300" />
                <span className="text-2xl font-bold">500+</span>
              </div>
              <p className="text-gray-200">Partner Restaurants</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-2">
                <MapPin className="w-5 h-5 text-yellow-300" />
                <span className="text-2xl font-bold">15+</span>
              </div>
              <p className="text-gray-200">Cities Covered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;