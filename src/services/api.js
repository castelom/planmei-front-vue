import axios from 'axios';
const API_URL = 'https://localhost:7151/';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export async function getOverview(month) {
  const response = await api.get(`api/Financial/getOverview?month=${month}`);
  return response.data;
}

export async function login(username, password) {
  const response = await api.post('Account/login', { username, password });
  return response.data;
}

export async function SendMessage(formData) {
  const response = await api.post('api/Contact/SendMessage', formData);
  return response.data;
}