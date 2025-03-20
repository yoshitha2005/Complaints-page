import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const createComplaint = (data) => API.post('/complaints', data);
export const getComplaints = () => API.get('/complaints');
export const login = (data) => API.post('/auth/login', data);
