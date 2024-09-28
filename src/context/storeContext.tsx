import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

interface User {
  name: string;
  email: string;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Custom hook to access the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}
const BASE_URL = "https://little-fashion-backend-kof5.onrender.com";
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signup = async (name: string, email: string, password: string) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/api/register`, {
        name,
        email,
        password,
      });
      setUser(data.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Sign-up Error:", error);
      throw error;
    }
  };

  // Login function
  const login = async (email: string, password: string) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/api/login`, {
        email,
        password,
      });
      setUser(data);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Login Error:", error);
      throw error;
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const existingUser = localStorage.getItem("user");
    if (existingUser) {
      setUser(JSON.parse(existingUser));
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
