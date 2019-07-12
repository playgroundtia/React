import axios from 'axios';

const token = localStorage.getItem('@WineRuns/TOKEN') || '';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 1000,
  headers: { Authorization: `Bearer ${token}` },
});

export default api;
