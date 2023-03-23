import axios from 'axios';

const axiosCall = (url) => {
    return axios.get(`https://precious-teal-betta.cyclic.app/${url}`);
}

export default axiosCall