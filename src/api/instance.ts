import axios from 'axios';
import { URL } from '../constants/url';

const instance = axios.create({
  baseURL: URL.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    accept: '*/*',
  },
});

export default instance;
