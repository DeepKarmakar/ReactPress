import { Link } from "react-router-dom";
import Brand from "./Brand";
import UserNav from "../../Common/Componnets/UserNav";

const Header = () => {
	return (
		<header className='py-4'>
			<div className='container mx-auto flex justify-between items-center'>
				<Brand />
				<UserNav />
			</div>
		</header>
	);
}

export default Header;