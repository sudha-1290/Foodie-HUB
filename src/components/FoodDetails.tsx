import React, { useState } from 'react';
import { ArrowLeft, Star, Clock, Truck, Plus, Minus, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface FoodDetailsProps {
  restaurant: any;
  onBack: () => void;
}

const FoodDetails: React.FC<FoodDetailsProps> = ({ restaurant, onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const { addItem } = useCart();

  const categories = ['All', 'Starters', 'Main Course', 'Desserts', 'Beverages'];

  const handleQuantityChange = (itemId: string, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] || 0) + change)
    }));
  };

  const handleAddToCart = (item: any) => {
    const quantity = quantities[item.id] || 1;
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      restaurantName: restaurant.name,
      quantity
    });
    setQuantities(prev => ({ ...prev, [item.id]: 0 }));
  };

  const filteredItems = restaurant.menu.filter((item: any) => 
    selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 py-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">{restaurant.name}</h1>
              <p className="text-sm text-gray-600">{restaurant.cuisine}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="relative">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 text-white">
            <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>{restaurant.rating} ({restaurant.reviews} reviews)</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{restaurant.deliveryTime} min</span>
              </div>
              <div className="flex items-center space-x-1">
                <Truck className="w-4 h-4" />
                <span>₹{restaurant.deliveryFee} delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-6">
          {filteredItems.map((item: any) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="text-lg font-bold text-orange-600">₹{item.price}</span>
                        {item.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">₹{item.originalPrice}</span>
                        )}
                        {item.isVeg && (
                          <div className="w-4 h-4 border-2 border-green-500 flex items-center justify-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span>{item.rating}</span>
                        <span>•</span>
                        <span>{item.orders} orders</span>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Heart className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                      disabled={!quantities[item.id]}
                    >
                      <Minus className="w-4 h-4 text-gray-600" />
                    </button>
                    <span className="w-8 text-center font-medium">
                      {quantities[item.id] || 0}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                    >
                      <Plus className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors text-sm font-medium"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;