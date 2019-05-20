import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://crud-968a6.firebaseio.com/'
});

export default instance;