import axios from 'axios';

export default axios.create({
  baseURL: 'https://covid2019-api.herokuapp.com/v2'
});