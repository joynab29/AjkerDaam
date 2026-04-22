import axios from 'axios';

// Create an Axios instance with base URL and credentials enabled
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust port if your backend runs elsewhere
  withCredentials: true, // Important for sending/receiving cookies!
});

export default api;
