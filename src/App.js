import "./App.css";
import ROUTES, { RenderRoutes } from "./routes/root-route";
import Footer from "./shared-components/footer";
import Header from "./shared-components/header";
import Navbar from "./shared-components/navbar";

function App() {
	return (
		<>
			<Navbar />
			<Header />	
			<Footer />
		</>
	);
}

export default App;
