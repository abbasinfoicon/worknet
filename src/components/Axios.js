import axios from 'axios';

const axiosCall = (url) => {
    return axios.get(`https://scary-puce-deer.cyclic.app/${url}`);
}

export default axiosCall