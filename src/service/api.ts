import axios from 'axios';
import io from 'socket.io-client';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

const socket = io('http://localhost:3333', {
  withCredentials: true,
});

export { api, socket };
