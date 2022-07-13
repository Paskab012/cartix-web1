import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://13.68.243.74/api/v1/',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

instance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem('access');
    config.headers['Authorization'] = accessToken ? `Bearer ${accessToken}` : '';

    return config;
});

export default instance;
