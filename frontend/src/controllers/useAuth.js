import { useContext, useState } from 'react';
import { AuthContext } from '../models/AuthContext';
import api from '../services/api';

export const useAuth = () => {
  const { user, login: contextLogin, logout: contextLogout } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/users/login', { email, password });
      contextLogin(response.data);
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || 'Login failed');
      throw err;
    }
  };

  const register = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/users/register', userData);
      contextLogin(response.data);
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || 'Registration failed');
      throw err;
    }
  };

  const logout = async () => {
    try {
      await api.post('/users/logout');
      contextLogout();
    } catch (err) {
      console.error('Logout error', err);
    }
  };

  return { user, login, register, logout, error, loading };
};
