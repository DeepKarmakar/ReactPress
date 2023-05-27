import { Link } from "react-router-dom";

const PageNotFound = () => {
	return (

		<div>
			<hr />
			<section className='py-12'>
				<div className='container mx-auto px-20 pb-5'>
					<div className=" text-center justify-center items-center">
						<h1 className=" text-5xl">404</h1>
						<h2 className=" text-7xl my-5 max-h-screen">Ooops!</h2>
						<h3 className=" text-xl mb-10">Page Not Found</h3>
						<Link to="/" className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400">Go to Home</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export default PageNotFound;