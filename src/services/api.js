import axios from 'axios';

const api = axios.create({
  baseURL: `https://api.mestrezaza.com.br`,
  validateStatus: false,
});

export default api;