import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://backend-clone-tinder.herokuapp.com'
})

export default instance;