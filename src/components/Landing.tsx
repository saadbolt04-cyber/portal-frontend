import React from 'react';
import { Link } from 'react-router-dom';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700">
      {/* Header */}
      <header className="relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="https://saherflow.com/wp-content/uploads/2021/06/Artboard-1-copy100.svg"
                alt="Saher Flow Solutions"
                className="h-10 w-auto"
              />
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-white hover:text-yellow-400 transition-colors text-sm font-medium px-4 py-2"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-yellow-500 hover:bg-yellow-400 text-navy-900 px-6 py-2 rounded-md text-sm font-semibold transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-16 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Saher Flow Solutions
            <span className="block text-yellow-400 mt-2">Dashboard Portal</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-4 max-w-3xl mx-auto leading-relaxed">
            Advanced multiphase flow measurement and monitoring platform for oil and gas operations
          </p>

          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Real-time data visualization • Remote monitoring • Comprehensive analytics
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/signup"
              className="bg-yellow-500 hover:bg-yellow-400 text-navy-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
            >
              Start Monitoring Your Assets
            </Link>
            <Link
              to="/login"
              className="border-2 border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Access Your Dashboard
            </Link>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-navy-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">Real-time Monitoring</h3>
              <p className="text-gray-300 text-sm">
                Monitor your multiphase flow meters and devices in real-time with instant alerts and notifications
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-navy-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">Data Analytics</h3>
              <p className="text-gray-300 text-sm">
                Advanced analytics and reporting tools to optimize your production and operational efficiency
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-navy-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">Device Management</h3>
              <p className="text-gray-300 text-sm">
                Centralized management of all your flow measurement devices with remote configuration capabilities
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;