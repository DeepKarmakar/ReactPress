
import { AiOutlineStar } from "react-icons/ai";
import { POSTS, CATEGORIES } from "../../../data";
import { postImage } from "../../../assets/images";
import { Link } from "react-router-dom";
import Banner from "../../Components/Banner";
import Trending from "../../Components/Trending";

const HomeContent = () => {
	return (
		<>

			<Banner />

			<Trending />

			<hr />

			<section className='py-12'>
				<div className='container mx-auto px-20 flex'>
					<div className='w-2/3 pr-10'>

						{POSTS.map(({ id, username, title, content, category, readTime, date, isStar }, index) => (
							(
								<div className='flex mb-10 items-center' key={id}>
									<img src={postImage} alt="post image" className='rounded-md w-[270px]' />
									<div className=' pl-8'>
										<p className=' text-xs'>{username}</p>
										<Link to={`post/${id}`}><h2 className=' text-lg font-bold'>{title}</h2></Link>
										<p>{content.substring(0, 120)}</p>
										<div className='flex text-xs mt-1 text-slate-500'>
											<span>{date}</span>
											<span className=' mx-2 leading-3'>.</span>
											<span>{readTime} min read</span>
											<span className=' mx-2 leading-3'>.</span>
											<span>{category}</span>
											{isStar && (
												<AiOutlineStar />
											)}
										</div>
									</div>
								</div>
							)
						))}
					</div>

					<div className='w-1/3 pl-10 sticky top-8 self-start'>
						<h1 className=' font-semibold'>Discover more of what matters to you</h1>
						<div className='flex flex-wrap gap-2 mt-3'>
							{CATEGORIES.map(({ name, id }) => (
								<a href="#" className=" rounded-3xl bg-gray-200 px-3.5 py-2.5 text-sm text-black shadow-sm hover:bg-sky-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600" key={id}>{name}</a>
							))}
						</div>

					</div>

				</div>
			</section>
		</>
	);
}

export default HomeContent;