

import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
	const userdetails = useSelector((state) => state.user.userData)
	const [isValidUser, setisValidUser] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	let location = useLocation();

	useEffect(() => {
		if (Object.keys(userdetails).length !== 0) {
			setIsLoading(false)
			setisValidUser(userdetails.isValidUser)
		}
	}, [userdetails])

	if (!isLoading) {


		if (!isValidUser) {
			return <Navigate to="/login" state={{ from: location }} replace />;
		}

		return children;
	}
}

export default PrivateRoute;