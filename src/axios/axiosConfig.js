import axios from 'axios';

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_BNR_API_URL}/api/v1/`,
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
