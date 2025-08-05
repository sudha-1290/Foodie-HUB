import React, { useState } from 'react';
import { Star, Clock, Truck, Filter } from 'lucide-react';
import { restaurants } from '../data/restaurants';

interface RestaurantListProps {
  onRestaurantSelect: (restaurant: any) => void;
}

const RestaurantList: React.FC<RestaurantListProps> = ({ onRestaurantSelect }) => {
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const [sortBy, setSortBy] = useState('rating');

  const cuisines = ['All', 'Indian', 'Italian', 'Chinese', 'Mexican', 'Thai', 'American'];

  const filteredRestaurants = restaurants
    .filter(restaurant => selectedCuisine === 'All' || restaurant.cuisine === selectedCuisine)
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'deliveryTime') return a.deliveryTime - b.deliveryTime;
      if (sortBy === 'deliveryFee') return a.deliveryFee - b.deliveryFee;
      return 0;
    });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Filters */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <h2 className="text-3xl font-bold text-gray-900">Popular Restaurants</h2>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="rating">Rating</option>
                <option value="deliveryTime">Delivery Time</option>
                <option value="deliveryFee">Delivery Fee</option>
              </select>
            </div>
          </div>
        </div>

        {/* Cuisine Filter */}
        <div className="mt-6 flex flex-wrap gap-2">
          {cuisines.map((cuisine) => (
            <button
              key={cuisine}
              onClick={() => setSelectedCuisine(cuisine)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCuisine === cuisine
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cuisine}
            </button>
          ))}
        </div>
      </div>

      {/* Restaurant Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRestaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            onClick={() => onRestaurantSelect(restaurant)}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
          >
            <div className="relative">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {restaurant.isPromoted && (
                <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                  Promoted
                </div>
              )}
              {restaurant.discount && (
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                  {restaurant.discount}% OFF
                </div>
              )}
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{restaurant.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{restaurant.cuisine}</p>
              
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-900">{restaurant.rating}</span>
                  <span className="text-sm text-gray-500">({restaurant.reviews})</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{restaurant.deliveryTime} min</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Truck className="w-4 h-4" />
                    <span>₹{restaurant.deliveryFee}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {restaurant.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;