import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d1117] via-[#161b22] to-[#21262d]">
      {/* Header */}
      <header className="border-b border-gray-700/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="https://saherflow.com/wp-content/uploads/2021/06/Artboard-1-copy100.svg"
                alt="Saher Flow"
                className="h-8 w-auto"
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Product</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Solutions</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Resources</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Open Source</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Enterprise</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            </nav>

            {/* Search and Auth */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-gray-800/50 border border-gray-700 rounded-md px-3 py-2 min-w-[300px]">
                <Search className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search or jump to..."
                  className="bg-transparent text-gray-300 placeholder-gray-500 outline-none flex-1 text-sm"
                />
                <kbd className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs ml-2">/</kbd>
              </div>
              <Link
                to="/login"
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className="bg-white text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors border border-gray-300"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Build and monitor flow systems on a{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              single, collaborative platform
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join professionals worldwide using our advanced flow measurement platform for real-time monitoring, 
            data visualization, and comprehensive system management.
          </p>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <div className="flex items-center bg-gray-800/50 border border-gray-700 rounded-md overflow-hidden min-w-[320px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-white placeholder-gray-400 px-4 py-3 outline-none flex-1"
              />
              <Link
                to="/signup"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 font-medium transition-colors"
              >
                Sign up for Saher Flow
              </Link>
            </div>
            <Link
              to="/login"
              className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Try Flow Portal
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="text-gray-400 text-sm">
            Trusted by <span className="text-white font-medium">500+</span> professionals worldwide for critical flow measurement applications
          </div>
        </div>

        {/* Features Preview */}
        <div className="mt-24 max-w-6xl mx-auto">
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm">SAHER FLOW PORTAL: DASHBOARD</span>
              </div>
              <div className="flex space-x-2">
                <div className="bg-gray-700 text-gray-300 px-3 py-1 rounded text-xs">flow-data.ts</div>
                <div className="bg-gray-700 text-gray-300 px-3 py-1 rounded text-xs">analytics.module.ts</div>
                <div className="bg-gray-700 text-gray-300 px-3 py-1 rounded text-xs">dashboard.ts</div>
              </div>
            </div>
            
            <div className="bg-gray-900/50 rounded-md p-6 font-mono text-sm">
              <div className="text-gray-500 mb-2">// Real-time flow measurement dashboard</div>
              <div className="text-blue-400">import</div> <span className="text-gray-300">{'{'} FlowMeter, Analytics, RealTimeData {'}'}</span> <div className="text-blue-400 inline">from</div> <span className="text-green-400">'@saher/flow-systems'</span>
              <br /><br />
              <div className="text-purple-400">const</div> <span className="text-yellow-400">dashboard</span> <span className="text-gray-300">=</span> <span className="text-blue-400">new</span> <span className="text-yellow-400">FlowDashboard</span><span className="text-gray-300">{'('}{'{'}</span>
              <br />
              <span className="text-gray-300 ml-4">precision: </span><span className="text-green-400">'±2-5%'</span><span className="text-gray-300">,</span>
              <br />
              <span className="text-gray-300 ml-4">monitoring: </span><span className="text-green-400">'24/7'</span><span className="text-gray-300">,</span>
              <br />
              <span className="text-gray-300 ml-4">analytics: </span><span className="text-orange-400">true</span>
              <br />
              <span className="text-gray-300">{'}'}{');'}</span>
            </div>
          </div>
        </div>

        {/* Simple Features Grid */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded"></div>
            </div>
            <h3 className="text-white font-semibold mb-2">Real-time Monitoring</h3>
            <p className="text-gray-400 text-sm">Live data visualization and system status monitoring</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-green-500 rounded"></div>
            </div>
            <h3 className="text-white font-semibold mb-2">Advanced Analytics</h3>
            <p className="text-gray-400 text-sm">Comprehensive reporting and data analysis tools</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-purple-500 rounded"></div>
            </div>
            <h3 className="text-white font-semibold mb-2">System Management</h3>
            <p className="text-gray-400 text-sm">Complete control over your measurement systems</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;