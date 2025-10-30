import axios from 'axios';

const movieApi = axios.create({
  baseURL: 'http://localhost:3001', // Base URL của json-server
  timeout: 5000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor để log requests
movieApi.interceptors.request.use(
  (config) => {
    console.log('📤 API Request:', config.method.toUpperCase(), config.url, config.data);
    return config;
  },
  (error) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

// Interceptor để log responses
movieApi.interceptors.response.use(
  (response) => {
    console.log('📥 API Response:', response.status, response.data);
    return response;
  },
  (error) => {
    console.error('❌ Response Error:', error.response?.status, error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default movieApi;
