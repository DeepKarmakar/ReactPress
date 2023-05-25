import { Link, useNavigate } from "react-router-dom";
import Brand from "../Content/Components/Brand";
import { useState } from "react";
import Utilities from '../Helper/utilities';
import { toast } from 'react-toastify';
import { userRegistration } from '../services/api/auth';
import { AiFillInfoCircle } from "react-icons/ai";

const Register = () => {
	const [register, setRegister] = useState({});
	const navigate = useNavigate();

	const handleInputChange = (event) => {
		const name = event.target.name;
		const value = name == 'terms' ? event.target.checked : event.target.value;
		setRegister({ ...register, [name]: value })
	}
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(register);
		if (
			Utilities.isNotEmpty(register.name, 'Name') &&
			Utilities.isValidateEmail(register.email) &&
			Utilities.isValidatePassword(register.password) &&
			Utilities.isPasswordMatch(register.password, register.confirm_password)
		) {
			delete register.confirm_password;
			userRegistration(register).then(res => {
				if (res.status) {
					toast.success(res.message);
					navigate('/login')
				} else {
					toast.error(res.message);
				}
			})
			console.log(register)
		}
	}

	return (
		<section className="bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<Brand />
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-5 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Create an account
						</h1>
						<form className="space-y-4 md:space-y-6" action="#">
							<div>
								<label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
								<input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required onChange={handleInputChange} />
							</div>
							<div>
								<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
								<input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required onChange={handleInputChange} />
							</div>
							<div>
								<label htmlFor="password" className="flex items-center gap-1 mb-2 text-sm font-medium text-gray-900 dark:text-white" title="Password must be 10 characters, which contain at least one numeric digit, one uppercase and one lowercase letter">Password <AiFillInfoCircle /></label>
								<input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={handleInputChange} />
							</div>
							<div>
								<label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
								<input type="password" name="confirm_password" id="confirm_password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={handleInputChange} />
							</div>
							<button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleSubmit}>Create an account</button>
							<p className="text-sm font-light text-gray-500 dark:text-gray-400">
								Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Register;