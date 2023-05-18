
import { AiOutlineStar } from "react-icons/ai";
import { POSTS, CATEGORIES } from "../../../data";
import { postImage } from "../../../assets/images";
import { Link } from "react-router-dom";
import Banner from "../../Components/Banner";
import Trending from "../../Components/Trending";
import PostListWithSidebar from "../../Components/PostListWithSidebar";

const HomeContent = () => {
	return (
		<>

			<Banner />

			<Trending />

			<hr />

			<PostListWithSidebar />
		</>
	);
}

export default HomeContent;