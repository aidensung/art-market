import { RenderRoutes } from "../root-route";

const AboutRoutes = {
	path: "/about",
	key: "ABOUT",
	component: RenderRoutes,
	routes: [
		{
			path: "/about",
			key: "ABOUT_ROOT",
			exact: true,
			component: () => <h1>ABOUT US</h1>,
		},
	],
};

export default AboutRoutes;
