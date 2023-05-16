import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className='py-4'>
			<div className='container mx-auto flex justify-between items-center'>
				<Link to="/" className='text-2xl'>ReactPress</Link>
				<Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">Login <span aria-hidden="true">→</span></Link>
			</div>
		</header>
	);
}

export default Header;