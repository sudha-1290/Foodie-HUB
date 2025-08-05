import React, { useState } from 'react';
import { Check, Clock, Calendar, Users, Star } from 'lucide-react';

const MessSubscription: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [selectedMess, setSelectedMess] = useState(null);

  const plans = [
    {
      id: 'weekly',
      name: 'Weekly Plan',
      price: 1200,
      originalPrice: 1400,
      duration: '7 days',
      description: 'Perfect for trying out our service',
      meals: 21, // 3 meals × 7 days
      savings: 200
    },
    {
      id: 'monthly',
      name: 'Monthly Plan',
      price: 4500,
      originalPrice: 5600,
      duration: '30 days',
      description: 'Most popular choice among students',
      meals: 90, // 3 meals × 30 days
      savings: 1100,
      popular: true
    },
    {
      id: 'quarterly',
      name: 'Quarterly Plan',
      price: 12000,
      originalPrice: 16800,
      duration: '90 days',
      description: 'Best value for money',
      meals: 270, // 3 meals × 90 days
      savings: 4800
    }
  ];

  const messOptions = [
    {
      id: 1,
      name: 'HomeStyle Mess',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 1250,
      cuisine: 'North Indian',
      location: 'Sector 15, Noida',
      features: ['Home-style cooking', 'Fresh ingredients', 'Customizable meals'],
      sample_menu: ['Dal Rice', 'Roti/Chapati', 'Seasonal Vegetable', 'Pickle', 'Curd'],
      delivery_time: '7:00 AM, 1:00 PM, 8:00 PM'
    },
    {
      id: 2,
      name: 'South Spice Mess',
      image: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6,
      reviews: 890,
      cuisine: 'South Indian',
      location: 'Koramangala, Bangalore',
      features: ['Authentic South Indian', 'Oil-free options', 'Weekend specials'],
      sample_menu: ['Sambar Rice', 'Rasam', 'Vegetable Curry', 'Papad', 'Buttermilk'],
      delivery_time: '7:30 AM, 12:30 PM, 7:30 PM'
    },
    {
      id: 3,
      name: 'Healthy Bites Mess',
      image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 2100,
      cuisine: 'Multi-cuisine',
      location: 'Bandra West, Mumbai',
      features: ['Nutritionist approved', 'Organic ingredients', 'Calorie counted meals'],
      sample_menu: ['Quinoa Bowl', 'Grilled Protein', 'Steamed Vegetables', 'Fresh Salad', 'Green Tea'],
      delivery_time: '8:00 AM, 1:30 PM, 8:30 PM'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Monthly Mess Subscription</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get fresh, home-style meals delivered daily. No cooking, no hassle - just healthy, delicious food at your doorstep.
          </p>
        </div>

        {/* Subscription Plans */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all hover:shadow-lg ${
                  selectedPlan === plan.id ? 'ring-2 ring-orange-500 shadow-lg' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-orange-600">₹{plan.price}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">₹{plan.originalPrice}</span>
                    <p className="text-sm text-gray-600 mt-1">for {plan.duration}</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{plan.meals} meals included</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>3 meals per day</span>
                    </div>
                    <div className="text-sm font-medium text-green-600">
                      Save ₹{plan.savings}
                    </div>
                  </div>
                  
                  {selectedPlan === plan.id && (
                    <div className="flex items-center justify-center space-x-2 text-orange-600 mb-4">
                      <Check className="w-5 h-5" />
                      <span className="font-medium">Selected</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mess Options */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Select Your Mess Partner</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {messOptions.map((mess) => (
              <div
                key={mess.id}
                onClick={() => setSelectedMess(mess.id)}
                className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:shadow-lg ${
                  selectedMess === mess.id ? 'ring-2 ring-orange-500 shadow-lg' : ''
                }`}
              >
                <img
                  src={mess.image}
                  alt={mess.name}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{mess.name}</h3>
                    {selectedMess === mess.id && (
                      <div className="bg-orange-500 text-white p-1 rounded-full">
                        <Check className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{mess.rating}</span>
                    <span className="text-sm text-gray-500">({mess.reviews} reviews)</span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-2">{mess.cuisine} • {mess.location}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {mess.features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Sample Menu:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {mess.sample_menu.map((item, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-xs text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{mess.delivery_time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subscription Summary */}
        {selectedPlan && selectedMess && (
          <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Subscription Summary</h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Plan:</span>
                <span className="font-medium">{plans.find(p => p.id === selectedPlan)?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Mess:</span>
                <span className="font-medium">{messOptions.find(m => m.id === selectedMess)?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration:</span>
                <span className="font-medium">{plans.find(p => p.id === selectedPlan)?.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Meals:</span>
                <span className="font-medium">{plans.find(p => p.id === selectedPlan)?.meals} meals</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total Amount:</span>
                  <span className="text-orange-600">₹{plans.find(p => p.id === selectedPlan)?.price}</span>
                </div>
              </div>
            </div>
            
            <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium">
              Subscribe Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessSubscription;