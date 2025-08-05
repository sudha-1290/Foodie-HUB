import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Utensils } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { View } from '../App';

interface HeaderProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onViewChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { items } = useCart();
  const { user, login, logout } = useAuth();

  const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const navItems = [
    { id: 'home', label: 'Restaurants', icon: Utensils },
    { id: 'mess', label: 'Mess Plans', icon: Menu },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => onViewChange('home')}>
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">FoodieHub</span>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for restaurants, cuisines, or dishes..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onViewChange(item.id as View)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentView === item.id
                      ? 'text-orange-600 bg-orange-50'
                      : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <button
              onClick={() => onViewChange('cart')}
              className="relative p-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* User Menu */}
            <div className="relative">
              {user ? (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onViewChange('profile')}
                    className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors"
                  >
                    <User className="w-6 h-6" />
                    <span className="hidden sm:block text-sm font-medium">{user.name}</span>
                  </button>
                  <button
                    onClick={logout}
                    className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => login('john@example.com', 'password')}
                  className="flex items-center space-x-1 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden px-4 pb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search restaurants..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onViewChange(item.id as View);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      currentView === item.id
                        ? 'text-orange-600 bg-orange-50'
                        : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;