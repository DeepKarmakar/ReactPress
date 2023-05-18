import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Content/Pages/Home/Home";
import Post from "./Content/Pages/Post/Post";
import Login from "./Auth/Login";
import HomeContent from "./Content/Pages/Home/HomeContent";
import Dashboard from "./Admin/Pages/Dashboard/Dashboard";
import ScrollToTop from "./Helper/ScrollToTop";
import Archive from "./Content/Pages/Archive/Archive";


const Routers = () => {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />}>
					<Route path="/" element={<HomeContent />} />
					<Route path="/archive/:category" element={<Archive />} />
					<Route path="/post/:id" element={<Post />} />
				</Route>
				<Route path="/login" element={<Login />} />
				<Route path="/admin" element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Routers