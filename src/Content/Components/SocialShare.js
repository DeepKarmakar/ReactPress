import { FaFacebookSquare, FaTwitterSquare, FaWhatsappSquare } from "react-icons/fa";

const SocialShare = () => {
	return (
		<div className="flex text-slate-500 items-center gap-1">
			<p>Share this: </p>
			<FaFacebookSquare size={22} color="#3C5998" />
			<FaTwitterSquare size={22} color="#54ACED" />
			<FaWhatsappSquare size={22} color="#1CD03F" />
		</div>
	);
}

export default SocialShare;