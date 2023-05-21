import PostEditor from "./PostEditor";

const NewPost = () => {

	return (
		<div>
			<div className="mb-6">
				<label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
				<input type="text" id="large-input" placeholder="Your post title" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
			</div>
			<PostEditor />

			<div className="flex mt-20">
				<button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save Draft</button>
				<button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900">Publish</button>
			</div>
		</div>
	);
}

export default NewPost;