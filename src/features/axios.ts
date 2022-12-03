import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://fgrctu.deta.dev/api/'
  baseURL: 'http://localhost:8000/api/'
});

export default instance;
