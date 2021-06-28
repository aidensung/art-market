import './App.css';
import ROUTES, { RenderRoutes } from './routes';

function App() {
	return <RenderRoutes routes={ROUTES} />;
}

export default App;
