import { useState } from "react";
import Card from "../../Components/Card";

const Posts = () => {

	const DRAFT = 'draft';
	const PUBLISHED = 'published';
	const [activeTab, setActiveTab] = useState(DRAFT);

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


			<div className="flex flex-wrap justify-start gap-5 mt-5">
				{[1, 2, 3, 4, 5].map((item, index) => (
					<Card key={index} />
				))}
			</div>
		</>

	);
}

export default Posts;