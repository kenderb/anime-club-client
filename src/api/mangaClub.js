import axios from 'axios';

export default axios.create({
  baseURL: 'https://anime-rails-api.herokuapp.com/',
});
