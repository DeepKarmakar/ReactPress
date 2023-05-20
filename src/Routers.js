import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Content/Pages/Home/Home";
import Post from "./Content/Pages/Post/Post";
import Login from "./Auth/Login";
import HomeContent from "./Content/Pages/Home/HomeContent";
import Dashboard from "./Admin/Pages/Dashboard/Dashboard";
import ScrollToTop from "./Helper/ScrollToTop";
import Archive from "./Content/Pages/Archive/Archive";
import Register from "./Auth/Register";
import ResetPassword from "./Auth/ResetPassword";
import Posts from "./Admin/Pages/Posts/Posts";
import NewPost from "./Admin/Pages/Posts/NewPost";


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
				<Route path="/register" element={<Register />} />
				<Route path="/reset-password" element={<ResetPassword />} />
				<Route path="/admin" element={<Dashboard />}>
					<Route path="" element={<Posts />} />
					<Route path="new-post" element={<NewPost />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Routers