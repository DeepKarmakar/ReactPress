
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
	return (
		<main className="flex min-h-screen flex-col">
			<Header />

			<Outlet />

			<Footer />
		</main>
	);
}

export default Home;