import { RenderRoutes } from "../root-route";

const ShopRoutes = {
	path: "/shop",
	key: "SHOP",
	component: RenderRoutes,
	routes: [
		{
			path: "/shop",
			key: "SHOP_ROOT",
			exact: true,
			component: () => <h1>SHOP</h1>,
		},
	],
};

export default ShopRoutes;
