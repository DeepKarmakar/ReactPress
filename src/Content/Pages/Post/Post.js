import { postImage } from "../../../assets/images";
import { POST, CATEGORIES } from "../../../data";
import { FaUserCircle } from "react-icons/fa";
import SocialShare from "../../Components/SocialShare";
import { Link } from "react-router-dom";
import PostSuggesion from "../../Components/PostSuggesion";
import Comments from "../../Components/Comments";


const Post = () => {
	const { id, username, title, content, category, readTime, date, isStar, tags, claps, commentsCount } = POST;
	const data = 'lorem <b>ipsum</b>';

	return (
		<>
			<hr />
			<section className='py-12 bg-slate-50'>
				<div className='container mx-auto w-[1000px] max-w-full'>
					<h1 className=" text-5xl font-bold">{title}</h1>
					<div className="flex justify-between py-10">
						<div className="flex items-center gap-3">
							<FaUserCircle size={35} />
							<div className=" text-sm leading-4 text-slate-500">
								<p>By <span className=" font-semibold">{username}</span></p>
								<p>{date} . {readTime} mins read</p>
							</div>
						</div>
						<SocialShare />
					</div>
					<img src={postImage} alt="image" className='rounded-md' />
					<div className=" mb-16 mt-10 whitespace-pre-line blog-content" dangerouslySetInnerHTML={{ __html: content }} />
					<div className="flex ">
						<p>Tags:</p>
						<div className=" ml-2 flex gap-2">
							{tags.map(tag => (
								<Link to="#" className=" underline text-slate-500 italic">{tag}</Link>
							))}
						</div>
					</div>
					<div className="flex justify-between py-8">
						<div className="flex items-center text-slate-600 text-sm">
							<p>{claps} Claps</p>
							<span className=' mx-2 leading-3'>.</span>
							<p>{commentsCount} Comments</p>
						</div>
						<SocialShare />
					</div>

					<PostSuggesion />

					<Comments />

				</div>
			</section>
		</>
	);
}

export default Post;