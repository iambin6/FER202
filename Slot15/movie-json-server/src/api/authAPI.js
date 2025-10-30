import axios from 'axios';

const authApi = axios.create({
  baseURL: 'http://localhost:3001', // Base URL của json-server
  timeout: 5000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default authApi;

