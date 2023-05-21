import { FcLike } from "react-icons/fc";

const Footer = () => {
	return (
		<footer className='flex items-center justify-center p-5 bg-black text-white'>
			<h1>Made with</h1>
			<FcLike className='mx-2' />
			<h1>by Deep</h1>
		</footer>
	);
}

export default Footer;