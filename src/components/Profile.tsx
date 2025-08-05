import React, { useState } from 'react';
import { User, MapPin, Phone, Mail, CreditCard, Clock, Package, Star } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('orders');

  const orders = [
    {
      id: 'ORD001',
      restaurant: 'Spice Garden',
      items: ['Chicken Biryani', 'Raita', 'Gulab Jamun'],
      total: 450,
      status: 'delivered',
      date: '2024-01-15',
      rating: 4.5
    },
    {
      id: 'ORD002',
      restaurant: 'Pizza Corner',
      items: ['Margherita Pizza', 'Garlic Bread'],
      total: 320,
      status: 'preparing',
      date: '2024-01-15',
      rating: null
    }
  ];

  const subscriptions = [
    {
      id: 'SUB001',
      mess: 'HomeStyle Mess',
      plan: 'Monthly Plan',
      startDate: '2024-01-01',
      endDate: '2024-01-31',
      status: 'active',
      meals_remaining: 45,
      total_meals: 90
    }
  ];

  const addresses = [
    {
      id: 1,
      type: 'Home',
      address: '123 Main Street, Apartment 4B',
      city: 'Mumbai',
      pincode: '400001',
      isDefault: true
    },
    {
      id: 2,
      type: 'Office',
      address: '456 Business Park, Floor 10',
      city: 'Mumbai',
      pincode: '400070',
      isDefault: false
    }
  ];

  const tabs = [
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'subscriptions', label: 'Subscriptions', icon: Clock },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'payments', label: 'Payments', icon: CreditCard }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{user?.name}</h1>
              <div className="flex items-center space-x-4 mt-2 text-gray-600">
                <div className="flex items-center space-x-1">
                  <Mail className="w-4 h-4" />
                  <span>{user?.email}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Phone className="w-4 h-4" />
                  <span>{user?.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-orange-50 text-orange-600 border-r-2 border-orange-500'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            {activeTab === 'orders' && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900">Order History</h2>
                {orders.map((order) => (
                  <div key={order.id} className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{order.restaurant}</h3>
                        <p className="text-sm text-gray-600">Order #{order.id} • {order.date}</p>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === 'delivered' 
                            ? 'bg-green-100 text-green-800'
                            : order.status === 'preparing'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-gray-600 mb-2">Items:</p>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {order.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-gray-900">₹{order.total}</span>
                      {order.rating ? (
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600">{order.rating}</span>
                        </div>
                      ) : (
                        <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                          Rate Order
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'subscriptions' && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900">Mess Subscriptions</h2>
                {subscriptions.map((sub) => (
                  <div key={sub.id} className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{sub.mess}</h3>
                        <p className="text-sm text-gray-600">{sub.plan}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        sub.status === 'active' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {sub.status.charAt(0).toUpperCase() + sub.status.slice(1)}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Start Date</p>
                        <p className="font-medium">{sub.startDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">End Date</p>
                        <p className="font-medium">{sub.endDate}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Meals Remaining</span>
                        <span>{sub.meals_remaining} of {sub.total_meals}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-orange-500 h-2 rounded-full" 
                          style={{ width: `${(sub.meals_remaining / sub.total_meals) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                      Manage Subscription
                    </button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'addresses' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">Saved Addresses</h2>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                    Add New Address
                  </button>
                </div>
                {addresses.map((address) => (
                  <div key={address.id} className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-gray-900">{address.type}</h3>
                          {address.isDefault && (
                            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-md text-xs font-medium">
                              Default
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 mb-1">{address.address}</p>
                        <p className="text-gray-600">{address.city} - {address.pincode}</p>
                      </div>
                      <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'payments' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">Payment Methods</h2>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                    Add Payment Method
                  </button>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="text-center py-8">
                    <CreditCard className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No payment methods added</h3>
                    <p className="text-gray-600">Add a payment method to make ordering easier</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;