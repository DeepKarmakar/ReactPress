import { useState } from "react";
import PostEditor from "./PostEditor";
import { useSelector } from 'react-redux';
import { useAddPostMutation } from "../../../Redux/Services/ReactPressAPI";

const NewPost = () => {
	const userdetails = useSelector((state) => state.user.userData)
	const [addnewPost, response] = useAddPostMutation();

	const [newPost, setNewPost] = useState({
		title: '',
		content: '',
		category: '',
		author: userdetails.id,
		date: new Date(),
		isDraft: false
	})

	const handleChnage = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setNewPost({ ...newPost, [name]: value })
	};

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(newPost);

		if (e.target.name === 'draft') {
			newPost.isDraft = true
		}

		addnewPost(newPost)
			.unwrap()
			.then((res) => console.log(res))
			.then((err) => console.log(err))
	};

	return (
		<div>
			<div className="mb-6">
				<label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
				<input
					type="text"
					id="large-input"
					placeholder="Your post title"
					className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					name="title"
					onChange={handleChnage} />
			</div>

			<PostEditor newPostData={newPost} setFormData={setNewPost} />

			<div className=" mt-16">
				<label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select category</label>
				<select
					id="countries"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					name="category"
					value={newPost.category}
					onChange={handleChnage} >
					<option value="">Choose a Category</option>
					<option value="Programming">Programming</option>
					<option value="Data Science">Data Science</option>
					<option value="Technology">Technology</option>
					<option value="Self Improvement">Self Improvement</option>
					<option value="Relationships">Relationships</option>
					<option value="Machine Learning">Machine Learning</option>
					<option value="Productivity">Productivity</option>
					<option value="Politics">Politics</option>
				</select>
			</div>

			<div className="flex mt-7">
				<button
					type="button"
					className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					name="draft"
					onClick={handleSubmit}>Save Draft</button>
				<button
					type="button"
					className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
					name="publish"
					onClick={handleSubmit}>Publish</button>
			</div>
		</div>
	);
}

export default NewPost;