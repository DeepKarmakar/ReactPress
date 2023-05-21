import { Link } from "react-router-dom";
import Brand from "./Brand";

const Header = () => {
	return (
		<header className='py-4'>
			<div className='container mx-auto flex justify-between items-center'>
				<Brand />
				<Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">Login <span aria-hidden="true">→</span></Link>
			</div>
		</header>
	);
}

export default Header;