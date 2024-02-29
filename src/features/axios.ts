import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://hook-next.vercel.app/api/'
  // set baseURL to localhost for api routes to work
  // baseURL: 'http://localhost:3000/api/'
});

export default instance;
