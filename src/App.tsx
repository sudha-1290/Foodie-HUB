import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RestaurantList from './components/RestaurantList';
import FoodDetails from './components/FoodDetails';
import Cart from './components/Cart';
import MessSubscription from './components/MessSubscription';
import Profile from './components/Profile';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

export type View = 'home' | 'restaurant' | 'mess' | 'profile' | 'cart';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedRestaurant, setSelectedRestaurant] = useState<any>(null);

  const handleRestaurantSelect = (restaurant: any) => {
    setSelectedRestaurant(restaurant);
    setCurrentView('restaurant');
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero />
            <RestaurantList onRestaurantSelect={handleRestaurantSelect} />
          </>
        );
      case 'restaurant':
        return selectedRestaurant ? (
          <FoodDetails 
            restaurant={selectedRestaurant} 
            onBack={() => setCurrentView('home')}
          />
        ) : (
          <div>Restaurant not found</div>
        );
      case 'mess':
        return <MessSubscription />;
      case 'profile':
        return <Profile />;
      case 'cart':
        return <Cart onClose={() => setCurrentView('home')} />;
      default:
        return (
          <>
            <Hero />
            <RestaurantList onRestaurantSelect={handleRestaurantSelect} />
          </>
        );
    }
  };

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          <Header currentView={currentView} onViewChange={setCurrentView} />
          <main>
            {renderCurrentView()}
          </main>
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;