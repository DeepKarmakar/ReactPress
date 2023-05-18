import { useParams } from "react-router-dom";
import PostListWithSidebar from "../../Components/PostListWithSidebar";
import { AiFillTag } from "react-icons/ai";


const Archive = () => {
	const { category } = useParams();
	return (
		<div>
			<hr />
			<section className='py-12'>
				<div className='container mx-auto px-20 flex border-b-2 pb-5'>
					<div className="flex items-center gap-3">
						<AiFillTag size={30} />
						<h1 className=" text-4xl font-semibold">{category}</h1>
					</div>
					<hr />
				</div>
			</section>
			<PostListWithSidebar />
		</div>
	);
}

export default Archive;