import React, { useState } from 'react';
import './App.css';
import ROUTES, { RenderRoutes } from './routes/root-route';

import Footer from './shared-components/footer';
import Header from './shared-components/header';
import Navbar from './shared-components/navbar';
import Sidebar from './shared-components/sidebar';

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Navbar toggle={toggle} />
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Header />
			<RenderRoutes routes={ROUTES} />
			<Footer />
		</>
	);
}

export default App;
