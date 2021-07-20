import ArtworksBoard from '../../pages/artworks-board';
import { RenderRoutes } from '../root-route';

const ArtworksRoutes = {
	path: '/artworks',
	key: 'ARTWORKS',
	component: RenderRoutes,
	routes: [
		{
			path: '/artworks',
			key: 'ARTWORKS_ROOT',
			exact: true,
			component: ArtworksBoard,
		},
	],
};

export default ArtworksRoutes;
