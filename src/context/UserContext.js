import { data } from "autoprefixer";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(!localStorage.getItem("token") || localStorage.getItem("token") < Date.now());

  const login = (data) => {
    localStorage.setItem("token", data);
    setUser(data);
    navigate("/admin");
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token", data);
    navigate("/");
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };