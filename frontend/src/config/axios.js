import axios from 'axios';
// import { onFailureResponse, onSuccessRequest, onSuccessResponse } from '../utils/interceptors';

const axiosClient = axios.create({
  baseURL:  'https://rickandmortyapi.com/api',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
});


export default axiosClient;
