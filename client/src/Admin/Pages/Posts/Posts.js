import { useEffect, useState } from "react";
import Card from "../../Components/Card";
import { useGetAllPostsMutation } from "../../../Redux/Services/ReactPressAPI";
import { useSelector } from "react-redux";

const Posts = () => {

	const loggedinUserId = useSelector((state) => state.user.userData.id)
	const [getNewPost, response] = useGetAllPostsMutation()

	const DRAFT = 'draft';
	const PUBLISHED = 'published';
	const [activeTab, setActiveTab] = useState(DRAFT);

	console.log('response', response);
	useEffect(() => {
		const payload = {
			filter: {
				author: loggedinUserId,
				isDraft: activeTab === DRAFT ? true : false
			}
		}

		getNewPost(payload)
			.unwrap()
			.then((res) => {
				console.log(res);
			})
			.then((error) => {
				console.log(error)
			})


	}, [activeTab])


	const onTabChange = (name) => {
		setActiveTab(name)
	}

	return (
		<>
			<div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
				<ul className="flex flex-wrap -mb-px">
					<li className="mr-2">
						<a href="#"
							className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab == DRAFT ? 'text-blue-600 border-blue-600 active dark:text-blue-500 dark:border-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}
							onClick={() => onTabChange(DRAFT)}>Draft</a>
					</li>
					<li className="mr-2">
						<a href="#"
							className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab == PUBLISHED ? 'text-blue-600 border-blue-600 active dark:text-blue-500 dark:border-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}
							onClick={() => onTabChange(PUBLISHED)}>Published</a>
					</li>
				</ul>
			</div>

			{response.isLoading ? 'loading' : (
				<div className="flex flex-wrap justify-start gap-5 mt-5">{response.data?.data?.map(({ title, content, _id }) => (
					<Card key={_id} title={title} content={content} />
				))}</div>
			)}
		</>

	);
}

export default Posts;