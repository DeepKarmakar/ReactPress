
import { Link } from "react-router-dom";
import { CATEGORIES } from "../../data";

const Sidebar = () => {
	return (
		<div className='w-1/3 pl-10 sticky top-8 self-start'>
			<h1 className=' font-semibold'>Discover more of what matters to you</h1>
			<div className='flex flex-wrap gap-2 mt-3'>
				{CATEGORIES.map(({ name, id }) => (
					<Link to={`/archive/${name}`} className=" rounded-3xl bg-gray-200 px-3.5 py-2.5 text-sm text-black shadow-sm hover:bg-sky-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600" key={id}>{name}</Link>
				))}
			</div>
		</div>
	);
}

export default Sidebar;