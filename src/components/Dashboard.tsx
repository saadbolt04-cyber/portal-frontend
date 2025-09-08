import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { LogOut, User, Mail, Building, Shield, Calendar, Globe } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <img
                src="https://saherflow.com/wp-content/uploads/2021/06/Artboard-1-copy100.svg"
                alt="Saher Flow Solutions"
                className="h-8"
              />
              <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome back, {user.firstName}!
          </h2>
          <p className="text-gray-600">
            Access your Saher Flow Solutions professional monitoring dashboard.
          </p>
        </div>

        {/* User Info Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <User className="mr-2" size={20} />
            Account Information
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <User className="text-gray-400" size={16} />
                <div>
                  <p className="text-sm text-gray-500">Full Name</p>
                  <p className="font-medium">{user.firstName} {user.lastName}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="text-gray-400" size={16} />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{user.email}</p>
                  {user.isEmailVerified ? (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1">
                      Verified
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mt-1">
                      Pending Verification
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Building className="text-gray-400" size={16} />
                <div>
                  <p className="text-sm text-gray-500">Company</p>
                  <p className="font-medium">{user.company}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Shield className="text-gray-400" size={16} />
                <div>
                  <p className="text-sm text-gray-500">Role</p>
                  <p className="font-medium capitalize">{user.role}</p>
                </div>
              </div>
              
              {user.lastLogin && (
                <div className="flex items-center space-x-3">
                  <Calendar className="text-gray-400" size={16} />
                  <div>
                    <p className="text-sm text-gray-500">Last Login</p>
                    <p className="font-medium">
                      {new Date(user.lastLogin).toLocaleString()}
                    </p>
                  </div>
                </div>
              )}
              
              {user.lastLoginIP && (
                <div className="flex items-center space-x-3">
                  <Globe className="text-gray-400" size={16} />
                  <div>
                    <p className="text-sm text-gray-500">Last Login IP</p>
                    <p className="font-medium">{user.lastLoginIP}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Email Verification Notice */}
        {!user.isEmailVerified && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <div className="flex items-center">
              <Mail className="text-yellow-600 mr-3" size={20} />
              <div>
                <h4 className="text-yellow-800 font-medium">Email Verification Required</h4>
                <p className="text-yellow-700 text-sm mt-1">
                  Please check your email and click the verification link to access all features.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Dashboard Content Placeholder */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Monitoring Dashboard
          </h3>
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Building size={48} className="mx-auto" />
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-2">
              Dashboard Coming Soon
            </h4>
            <p className="text-gray-600">
              Your flow measurement monitoring tools will be available here.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;