import axios from 'axios';

const corsOrigin = 'https://cors-anywhere.herokuapp.com/';
const baseUrl = 'https://saqsini-api.herokuapp.com'

const instance = axios.create({
    baseURL: `${corsOrigin}${baseUrl}`
})

export default instance