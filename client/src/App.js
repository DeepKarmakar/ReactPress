import { useEffect } from 'react';
import './App.css';
import Utilities from './Helper/utilities';
import Routers from './Routers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authenticateUser } from './services/api/auth';



function App() {


	useEffect(() => {
		const isAuthenticUser = () => {
			const token = Utilities.getToken();
			if (token) {
				authenticateUser().then(res => {
					console.log(res);
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
