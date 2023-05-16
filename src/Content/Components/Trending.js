
import { AiOutlineRise, AiOutlineStar } from "react-icons/ai";
import { POSTS } from "../../data";

const Trending = () => {
	return (
		<section className=' py-12 divide-y'>
			<div className='container mx-auto'>
				<div className='flex items-center gap-2'>
					<AiOutlineRise />
					<h2 className=' text-lg font-semibold'>TRENDING</h2>
				</div>
				<div className='flex flex-wrap'>
					{POSTS.map(({ id, username, title, readTime, date, isStar }, index) => (
						(
							<div className='w-1/3 flex mt-6' key={id}>
								<h1 className=' text-3xl pr-4 text-slate-300'>{index + 1}</h1>
								<div>
									<p className=' text-xs'>{username}</p>
									<h2 className=' font-bold'>{title}</h2>
									<div className='flex text-xs mt-1 text-slate-500'>
										<span>{date}</span>
										<span className=' mx-2 leading-3'>.</span>
										<span> {readTime} min read</span>
										{isStar && (
											<AiOutlineStar />
										)}
									</div>
								</div>
							</div>
						)
					))}
				</div>
			</div>
		</section>
	);
}

export default Trending;