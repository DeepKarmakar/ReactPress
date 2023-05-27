import { Link, redirect } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { setInvalidUser } from "../../Redux/UserSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UserNav = (props) => {
	let navigate = useNavigate();

	const dispatch = useDispatch()
	const [showUserDropdown, setShowUserDropdown] = useState(false)

	const userdetails = useSelector((state) => state.user.userData)
	console.log(userdetails);
	const { name, email, isValidUser } = userdetails

	const toggleDropdown = () => {
		setShowUserDropdown(!showUserDropdown)
	}

	const handleSignout = (e) => {
		e.preventDefault()
		localStorage.removeItem('token');
		dispatch(setInvalidUser())
		navigate("/");
		toast.success('You have been logged out');
	}

	return (
		<>
			{isValidUser ? (
				<>
					<Link to={'/admin/new-post'} className=" ml-auto mr-10 flex items-center gap-1 text-primary-600">
						<CiEdit size={21} />
						Write
					</Link>

					<div className="flex items-center">
						<div className="flex items-center ml-3 relative">
							<div>
								<button
									type="button"
									className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
									aria-expanded="false"
									data-dropdown-toggle="dropdown-user"
									onClick={toggleDropdown}
								>
									<span className="sr-only">Open user menu</span>
									<img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
								</button>
							</div>
							<div
								className="z-50 absolute top-5 right-0 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
								id="dropdown-user"
								hidden={!showUserDropdown}>
								<div className="px-4 py-3" role="none">
									<p className="text-sm text-gray-900 dark:text-white" role="none">
										{name}
									</p>
									<p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
										{email}
									</p>
								</div>
								<ul className="py-1" role="none">
									<li>
										<Link to={'/admin'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</Link>
									</li>
									{/* <li>
									<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
								</li>
								<li>
									<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
								</li> */}
									<li>
										<a href="#"
											className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem"
											onClick={(e) => handleSignout(e)}>Sign out</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</>
			) : (
				<Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">Login <span aria-hidden="true">→</span></Link>
			)}
		</>
	);
}

export default React.memo(UserNav);