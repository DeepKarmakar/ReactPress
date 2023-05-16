import logo from './logo.svg';
import './App.css';
import { AiOutlineRise, AiOutlineStar } from "react-icons/ai";
import { FcLike } from "react-icons/fc";


import { CATEGORIES, POSTS } from './data';
import { postImage } from './assets/images';


function App() {



	return (
		<main className="flex min-h-screen flex-col">
			<header className='py-4'>
				<div className='container mx-auto flex justify-between items-center'>
					<p className='text-2xl'>ReactPress</p>
					<a href="#" className="text-sm font-semibold leading-6 text-gray-900">Login <span aria-hidden="true">→</span></a>
				</div>
			</header>
			<section className=' bg-yellow-300'>
				<div className="mx-auto max-w-2xl py-24">
					<div className="text-center">
						<h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">Data to enrich your online business</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<a href="#" className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400">Read More</a>
						</div>
					</div>
				</div>
			</section>

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

			<hr />

			<section className='py-12'>
				<div className='container mx-auto flex'>
					<div className='w-2/3 pr-10'>

						{POSTS.map(({ id, username, title, content, category, readTime, date, isStar }, index) => (
							(
								<div className='flex mb-10 items-center' key={id}>
									<img src={postImage} alt="post image" className='rounded-md w-[270px]' />
									<div className=' pl-8'>
										<p className=' text-xs'>{username}</p>
										<h2 className=' text-lg font-bold'>{title}</h2>
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

			<footer className='flex items-center justify-center p-5 bg-black text-white'>
				<h1>Made with</h1>
				<FcLike className='mx-2' />
				<h1>by Deep</h1>
			</footer>
		</main>
	);
}

export default App;
