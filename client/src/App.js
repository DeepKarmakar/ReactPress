import { useEffect } from 'react';
import './App.css';
import Utilities from './Helper/utilities';
import Routers from './Routers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authenticateUser } from './services/api/auth';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './Redux/UserSlice';



function App() {
	const dispatch = useDispatch()


	useEffect(() => {
		const isAuthenticUser = async () => {
			const token = Utilities.getToken();
			if (token) {
				await authenticateUser().then(res => {
					dispatch(setUserDetails(res.data))
				}).catch(err => {
					console.log(err);
				})
			} else {
				console.log('notLogged in');
			}
		}
		isAuthenticUser();
	}, [])

	return (
		<>
			<Routers />

			<ToastContainer
				position='bottom-center'
				autoClose={2000}
				hideProgressBar={true}
				theme={'dark'}
			/>
		</>
	);
}

export default App;
