import PostList from "./PostList";
import Sidebar from "./Sidebar";

const PostListWithSidebar = () => {
	return (
		<section className='py-12'>
			<div className='container mx-auto px-20 flex'>
				<PostList />
				<Sidebar />
			</div>
		</section>
	);
}

export default PostListWithSidebar;