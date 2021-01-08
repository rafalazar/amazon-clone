import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-3ae96.cloudfunctions.net/api' //the API (cloud function) URL
});

//https://us-central1-clone-3ae96.cloudfunctions.net/api


export default instance;