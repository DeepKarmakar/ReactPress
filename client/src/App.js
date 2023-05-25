import './App.css';


import { CATEGORIES, POSTS } from './data';
import { postImage } from './assets/images';
import Routers from './Routers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

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
