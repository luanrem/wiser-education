import axios from 'axios';

const api = axios.create({
  baseURL: 'https://603040f3a1e9d20017af19ca.mockapi.io/api',
});

export default api;
