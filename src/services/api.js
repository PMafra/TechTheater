import axios from 'axios';

const API_URL = '';

const createHeaders = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const example = (body, token) => axios.post(`${API_URL}/example`, body, createHeaders(token));

export {
  example,
};
