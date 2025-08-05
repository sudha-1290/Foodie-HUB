export const restaurants = [
  {
    id: '1',
    name: 'Spice Garden',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    cuisine: 'Indian',
    rating: 4.5,
    reviews: 1250,
    deliveryTime: 30,
    deliveryFee: 40,
    isPromoted: true,
    discount: 20,
    tags: ['Vegetarian', 'Spicy', 'Family Restaurant'],
    menu: [
      {
        id: '1-1',
        name: 'Chicken Biryani',
        description: 'Aromatic basmati rice cooked with tender chicken and exotic spices',
        price: 280,
        originalPrice: 320,
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Main Course',
        isVeg: false,
        rating: 4.6,
        orders: 1200
      },
      {
        id: '1-2',
        name: 'Paneer Butter Masala',
        description: 'Creamy tomato-based curry with soft paneer cubes',
        price: 220,
        image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Main Course',
        isVeg: true,
        rating: 4.4,
        orders: 890
      },
      {
        id: '1-3',
        name: 'Garlic Naan',
        description: 'Soft bread topped with fresh garlic and herbs',
        price: 60,
        image: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Starters',
        isVeg: true,
        rating: 4.3,
        orders: 650
      },
      {
        id: '1-4',
        name: 'Gulab Jamun',
        description: 'Sweet dumplings in sugar syrup',
        price: 80,
        image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Desserts',
        isVeg: true,
        rating: 4.5,
        orders: 420
      }
    ]
  },
  {
    id: '2',
    name: 'Pizza Corner',
    image: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=600',
    cuisine: 'Italian',
    rating: 4.3,
    reviews: 890,
    deliveryTime: 25,
    deliveryFee: 35,
    isPromoted: false,
    tags: ['Pizza', 'Fast Food', 'Cheesy'],
    menu: [
      {
        id: '2-1',
        name: 'Margherita Pizza',
        description: 'Classic pizza with tomato sauce, mozzarella, and fresh basil',
        price: 180,
        image: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Main Course',
        isVeg: true,
        rating: 4.4,
        orders: 980
      },
      {
        id: '2-2',
        name: 'Pepperoni Pizza',
        description: 'Loaded with pepperoni slices and mozzarella cheese',
        price: 250,
        image: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Main Course',
        isVeg: false,
        rating: 4.5,
        orders: 1100
      }
    ]
  },
  {
    id: '3',
    name: 'Dragon Palace',
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600',
    cuisine: 'Chinese',
    rating: 4.2,
    reviews: 650,
    deliveryTime: 35,
    deliveryFee: 45,
    isPromoted: false,
    discount: 15,
    tags: ['Chinese', 'Noodles', 'Soup'],
    menu: [
      {
        id: '3-1',
        name: 'Hakka Noodles',
        description: 'Stir-fried noodles with vegetables and soy sauce',
        price: 160,
        image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Main Course',
        isVeg: true,
        rating: 4.2,
        orders: 750
      },
      {
        id: '3-2',
        name: 'Chicken Manchurian',
        description: 'Crispy chicken balls in tangy sauce',
        price: 220,
        image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Main Course',
        isVeg: false,
        rating: 4.3,
        orders: 620
      }
    ]
  },
  {
    id: '4',
    name: 'Taco Bell Express',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    cuisine: 'Mexican',
    rating: 4.1,
    reviews: 420,
    deliveryTime: 28,
    deliveryFee: 30,
    isPromoted: true,
    tags: ['Mexican', 'Spicy', 'Quick Bites'],
    menu: [
      {
        id: '4-1',
        name: 'Chicken Burrito',
        description: 'Grilled chicken wrapped in tortilla with beans and rice',
        price: 200,
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Main Course',
        isVeg: false,
        rating: 4.2,
        orders: 380
      }
    ]
  },
  {
    id: '5',
    name: 'Healthy Bowls',
    image: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=600',
    cuisine: 'American',
    rating: 4.6,
    reviews: 780,
    deliveryTime: 20,
    deliveryFee: 25,
    isPromoted: false,
    tags: ['Healthy', 'Salads', 'Organic'],
    menu: [
      {
        id: '5-1',
        name: 'Quinoa Buddha Bowl',
        description: 'Nutritious bowl with quinoa, vegetables, and tahini dressing',
        price: 240,
        image: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Main Course',
        isVeg: true,
        rating: 4.7,
        orders: 450
      }
    ]
  },
  {
    id: '6',
    name: 'Thai Garden',
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600',
    cuisine: 'Thai',
    rating: 4.4,
    reviews: 560,
    deliveryTime: 32,
    deliveryFee: 50,
    isPromoted: false,
    discount: 10,
    tags: ['Thai', 'Curry', 'Coconut'],
    menu: [
      {
        id: '6-1',
        name: 'Pad Thai',
        description: 'Stir-fried rice noodles with shrimp, tofu, and peanuts',
        price: 260,
        image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Main Course',
        isVeg: false,
        rating: 4.5,
        orders: 520
      }
    ]
  }
];