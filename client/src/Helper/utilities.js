import { toast } from "react-toastify";
import moment from 'moment';

const Utilities = {
	isValidateEmail: (email) => {
		const isValid = String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
		if (isValid) {
			return true
		} else {
			toast.error("Please enter correct Email");
			return
		}
	},
	isValidatePassword: (password) => {
		// 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
		const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
		if (password.match(passwordPattern)) {
			return true
		} else {
			toast.error("Please enter correct password");
			return
		}
	},

	isPasswordMatch: (password, confirmPassword) => {
		if (password === confirmPassword) {
			return true;
		} else {
			toast.error("Password and Confirm Password didn't match");
		}
	},
	isNotEmpty: (str = '', fieldName) => {
		if (str.match(/\S/)) {
			return true
		} else {
			toast.error(`${fieldName} is Required`);
			return false;
		}
	},
	isCharectorLimitMatch: (str) => {
		if (str.match(/^.{6,20}$/)) {
			return true;
		}
		return false;
	},
	isOneNumericMatch: (str) => {
		if (str.match(/.*[0-9].*/)) {
			return true;
		}
		return false;
	},
	isOneUppercaseMatch: (str) => {
		if (str.match(/.*[A-Z].*/)) {
			return true;
		}
		return false;
	},
	isOneLowercaseMatch: (str) => {
		if (str.match(/.*[a-z].*/)) {
			return true;
		}
		return false;
	},
	setToken: (token) => {
		localStorage.setItem('token', token)
	},
	getToken: () => {
		return localStorage.getItem('token');
	},
	isValidUser: () => {
		return this.getToken() ? true : false;
	},
	getFormatedDate: (date) => {
		return new Date(date).toLocaleDateString()
	},
	getUsername: () => {
		return localStorage.getItem('userName');
	},
	setUserName(token) {
		const getData = this.parseJwt(token);
		if (getData?.data?.name) {
			localStorage.setItem('userName', getData.data.name);
		} else {
			console.log('User name error');
		}
	},
	parseJwt: (token) => {
		if (!token) { return; }
		const base64Url = token.split('.')[1];
		const base64 = base64Url.replace('-', '+').replace('_', '/');
		return JSON.parse(window.atob(base64));
	},
	toDateFormat: (date) => {
		return moment(date).format('Do MMM, YYYY');
	},
	getReadingTime: (text) => {
		const wpm = 225;
		const words = text.trim().split(/\s+/).length;
		return Math.ceil(words / wpm);
	}
}

export default Utilities;