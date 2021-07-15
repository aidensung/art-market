import './App.css';
import ROUTES, { RenderRoutes } from './routes/root-route';

import Footer from './shared-components/footer';
import Header from './shared-components/header';
import Navbar from './shared-components/navbar';
import Sidebar from './shared-components/sidebar';

function App() {
	return (
		<>
			<Navbar />
			<Sidebar />
			<Header />
			<RenderRoutes routes={ROUTES} />
			<Footer />
		</>
	);
}

export default App;
