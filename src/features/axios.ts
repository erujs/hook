import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fgrctu.deta.dev/api/'
});

export default instance;
