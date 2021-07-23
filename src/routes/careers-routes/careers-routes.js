import { RenderRoutes } from "../root-route";

const CareersRoutes = {
	path: "/careers",
	key: "CAREERS",
	component: RenderRoutes,
	routes: [
		{
			path: "/careers",
			key: "CAREERS_ROOT",
			exact: true,
			component: () => <h1>CAREERS</h1>,
		},
	],
};

export default CareersRoutes;
