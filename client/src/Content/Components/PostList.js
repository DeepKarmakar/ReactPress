import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { POSTS } from "../../data";
import { postImage } from "../../assets/images";
import { useGetAllPostsMutation } from "../../Redux/Services/ReactPressAPI";
import { useEffect } from "react";
import Utilities from "../../Helper/utilities";

const PostList = () => {
	const [getNewPost, response] = useGetAllPostsMutation();

	useEffect(() => {
		getNewPost({})
			.unwrap()
			.then(() => { })
			.then((error) => {
				console.log(error)
			})


	}, [])

	console.log(response);



	return (
		// <div className='w-2/3 pr-10'>

		<>
			{response.isLoading ? 'loading' : (
				<div className="w-2/3 pr-10">
					{response.data?.data?.map(({ id, username, title, content, category, readTime = 3, date, isStar = false }, index) => (
						<div className='flex mb-10 items-center' key={id}>
							<img src={postImage} alt="post image" className='rounded-md w-[270px]' />
							<div className=' pl-8'>
								<p className=' text-xs'>{username}</p>
								<Link to={`/post/${id}`}><h2 className=' text-lg font-bold'>{title}</h2></Link>
								<p>{content.substring(0, 120)}</p>
								<div className='flex text-xs mt-1 text-slate-500'>
									<span>{Utilities.toDateFormat(date)}</span>
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
					))}
				</div>
			)}


			{/* {POSTS.map(({ id, username, title, content, category, readTime, date, isStar }, index) => (
				(
					<div className='flex mb-10 items-center' key={id}>
						<img src={postImage} alt="post image" className='rounded-md w-[270px]' />
						<div className=' pl-8'>
							<p className=' text-xs'>{username}</p>
							<Link to={`/post/${id}`}><h2 className=' text-lg font-bold'>{title}</h2></Link>
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
			))} */}
		</>
	);
}

export default PostList;