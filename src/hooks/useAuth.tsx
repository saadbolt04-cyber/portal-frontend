import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { apiService, User } from '../services/api';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string, rememberMe?: boolean) => Promise<{ success: boolean; message: string }>;
  signup: (userData: any) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<{ success: boolean; message: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isAuthenticated = !!user && !!token;

  useEffect(() => {
    // Check for stored token on app load
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setToken(storedToken);
      // Verify token and get user data
      apiService.getCurrentUser(storedToken).then((response) => {
        if (response.success && response.data) {
          setUser(response.data.user);
        } else {
          // Token is invalid, remove it
          localStorage.removeItem('authToken');
          setToken(null);
        }
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = async (email: string, password: string, rememberMe = false) => {
    try {
      const response = await apiService.login({ email, password, rememberMe });
      
      if (response.success && response.data) {
        const { token: authToken, user: userData } = response.data;
        setToken(authToken);
        setUser(userData);
        localStorage.setItem('authToken', authToken);
        return { success: true, message: response.message };
      } else {
        return { success: false, message: response.message };
      }
    } catch (error) {
      return { success: false, message: 'An unexpected error occurred' };
    }
  };

  const signup = async (userData: any) => {
    try {
      const response = await apiService.signup(userData);
      return { success: response.success, message: response.message };
    } catch (error) {
      return { success: false, message: 'An unexpected error occurred' };
    }
  };

  const logout = async () => {
    if (token) {
      await apiService.logout(token);
    }
    setUser(null);
    setToken(null);
    localStorage.removeItem('authToken');
  };

  const forgotPassword = async (email: string) => {
    try {
      const response = await apiService.forgotPassword({ email });
      return { success: response.success, message: response.message };
    } catch (error) {
      return { success: false, message: 'An unexpected error occurred' };
    }
  };

  const value = {
    user,
    token,
    isLoading,
    isAuthenticated,
    login,
    signup,
    logout,
    forgotPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};