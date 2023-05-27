import axios from 'axios';
import AuthHeader from '../../Helper/auth-header';
// import * as dotenv from 'dotenv';
const url = 'auth';
// dotenv.config()
// const api_url = process.env.API_URL;
const api_url = 'http://localhost:5050/api';



export const userLogin = (payload) => {
	return axios
		.post(`${api_url}/${url}/login`, payload)
		.then((res) => res.data)
		.catch((err) => err.response.data || 'Error Occurred');
};

export const userRegistration = (payload) => {
	return axios
		.post(`${api_url}/${url}/signup`, payload)
		.then((res) => res.data)
		.catch((err) => err.response.data || 'Error Occurred');
};

export const getAllUsers = (payload = {}) => {
	return axios
		.post(`${api_url}/${url}/users`, payload, { headers: AuthHeader() })
		.then((res) => res.data)
		.catch((err) => err.response.data || 'Error Occurred');
};

export const authenticateUser = () => {
	return axios
		.get(`${api_url}/${url}/isAuthnticate`, { headers: AuthHeader() })
		.then(res => res.data)
		.catch((err) => err.response.data || 'Error Occurred');
}
