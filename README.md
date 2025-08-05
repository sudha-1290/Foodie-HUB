# FoodieHub - Food Delivery App with Mess Subscription

A modern, full-featured food delivery application built with React, TypeScript, and Tailwind CSS. FoodieHub combines traditional restaurant ordering with innovative monthly mess subscription plans, offering users flexibility between occasional dining and regular meal subscriptions.

## 🚀 Live Demo

Visit the live application: [https://dynamic-marzipan-1bc9c7.netlify.app](https://dynamic-marzipan-1bc9c7.netlify.app)

## ✨ Features

### Core Functionality
- **Restaurant Discovery**: Browse restaurants with advanced filtering by cuisine, rating, delivery time, and fees
- **Menu Browsing**: Detailed restaurant menus with categories, ratings, and nutritional information
- **Shopping Cart**: Real-time cart management with quantity updates and order summary
- **User Authentication**: Complete user registration, login, and profile management
- **Order Management**: Order history, tracking, and rating system

### Unique Features
- **Monthly Mess Subscription**: Subscribe to daily home-style meals from partner mess providers
- **Flexible Plans**: Weekly, monthly, and quarterly subscription options with significant savings
- **Mess Partner Selection**: Choose from multiple mess providers with different cuisines and specialties
- **Meal Tracking**: Monitor remaining meals and subscription status
- **Delivery Scheduling**: Fixed meal delivery times for breakfast, lunch, and dinner

### Technical Features
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, intuitive interface with smooth animations and micro-interactions
- **Type Safety**: Full TypeScript implementation for better code quality
- **State Management**: Context API for cart and authentication state
- **Performance Optimized**: Fast loading with optimized images and efficient rendering

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify
- **Code Quality**: ESLint, TypeScript strict mode

## 📦 Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd foodiehub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Header.tsx       # Navigation header with search
│   ├── Hero.tsx         # Landing page hero section
│   ├── RestaurantList.tsx # Restaurant grid with filters
│   ├── FoodDetails.tsx  # Restaurant menu and ordering
│   ├── Cart.tsx         # Shopping cart management
│   ├── MessSubscription.tsx # Mess subscription plans
│   └── Profile.tsx      # User profile and order history
├── context/             # React Context providers
│   ├── CartContext.tsx  # Shopping cart state management
│   └── AuthContext.tsx  # User authentication state
├── data/               # Static data and mock APIs
│   └── restaurants.ts  # Restaurant and menu data
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎨 Design System

### Color Palette
- **Primary**: Orange (#FF6B35) - Main brand color for CTAs and highlights
- **Secondary**: Red (#FF4757) - Accent color for promotions and alerts
- **Success**: Green (#2ECC71) - Success states and vegetarian indicators
- **Neutral**: Gray scale for text and backgrounds
- **Warning**: Yellow (#F39C12) - Ratings and warning states

### Typography
- **Headings**: Bold, clear hierarchy with proper contrast
- **Body Text**: Readable font sizes with 150% line height
- **UI Text**: Consistent sizing for buttons, labels, and navigation

### Components
- **Cards**: Subtle shadows with hover effects
- **Buttons**: Consistent styling with hover and focus states
- **Forms**: Clean inputs with proper validation styling
- **Navigation**: Intuitive with clear active states

## 🔧 Configuration

### Environment Variables
Currently, the app uses mock data and doesn't require environment variables. For production deployment with real APIs, you would typically need:

```env
VITE_API_BASE_URL=your_api_endpoint
VITE_STRIPE_PUBLIC_KEY=your_stripe_key
VITE_GOOGLE_MAPS_API_KEY=your_maps_key
```

### Customization
- **Restaurant Data**: Modify `src/data/restaurants.ts` to add/edit restaurants and menus
- **Styling**: Update Tailwind configuration in `tailwind.config.js`
- **Components**: All components are modular and easily customizable

## 📱 Features Overview

### Restaurant Ordering
1. **Browse Restaurants**: Filter by cuisine, rating, delivery time
2. **View Menus**: Detailed items with descriptions, prices, and ratings
3. **Add to Cart**: Quantity selection and real-time cart updates
4. **Checkout**: Order summary with delivery details and payment

### Mess Subscription
1. **Plan Selection**: Choose from weekly, monthly, or quarterly plans
2. **Mess Partner**: Select from multiple mess providers
3. **Subscription Management**: Track meals, view history, manage renewals
4. **Delivery Schedule**: Fixed timing for breakfast, lunch, and dinner

### User Management
1. **Authentication**: Login/signup with profile management
2. **Order History**: Track past orders with ratings and reordering
3. **Addresses**: Save multiple delivery addresses
4. **Preferences**: Dietary restrictions and favorite cuisines

## 🚀 Deployment

### Netlify (Recommended)
The app is optimized for Netlify deployment:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Deploy automatically on push to main branch

### Other Platforms
The app can be deployed to any static hosting service:
- **Vercel**: Zero-config deployment with GitHub integration
- **GitHub Pages**: Free hosting for open source projects
- **AWS S3 + CloudFront**: Scalable hosting with CDN
- **Firebase Hosting**: Google's hosting platform

## 🔮 Future Enhancements

### Planned Features
- **Real-time Order Tracking**: Live GPS tracking for deliveries
- **Payment Integration**: Stripe/Razorpay integration for payments
- **Push Notifications**: Order updates and promotional offers
- **Social Features**: Reviews, photos, and social sharing
- **Admin Dashboard**: Restaurant and order management interface

### Technical Improvements
- **Backend Integration**: REST API or GraphQL backend
- **Database**: User data, orders, and restaurant information
- **Authentication**: OAuth integration (Google, Facebook)
- **Performance**: Code splitting and lazy loading
- **Testing**: Unit tests and end-to-end testing

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain component modularity
- Write clear, descriptive commit messages
- Test your changes thoroughly

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Swiggy, Zomato, and modern food delivery apps
- **Images**: High-quality food photography from Pexels
- **Icons**: Beautiful icons from Lucide React
- **UI Components**: Custom components built with Tailwind CSS

## 📞 Support

For support, questions, or feature requests:
- Create an issue on GitHub
- Contact the development team
- Check the documentation for common solutions

---

**Built with ❤️ for food lovers everywhere**