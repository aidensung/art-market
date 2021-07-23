import { Route, Switch } from "react-router-dom";

import AuthRoutes from "./auth-routes";
import ProfileRoutes from "./profile-routes";
import AccountSettingRoutes from "./account-setting-routes";
import PostRoutes from "./post-routes/post-routes";
import ArtworksRoutes from "./artworks-routes";
import JobsRoutes from "./jobs-routes";
import CheckoutRoutes from "./checkout-routes";
import ShopRoutes from "./shop-routes";
import CareersRoutes from "./careers-routes";

import HomePage from "../pages/home-page";
import SamplePage from "../pages/sample";
import AboutRoutes from "./about-routes/about-routes";
import ContactUsRoutes from "./contactus-routes";

const ROUTES = [
	{ path: "/", key: "ROOT", exact: true, component: HomePage },
	{ path: "/sample", key: "SAMPLE", exact: true, component: SamplePage },
	AuthRoutes,
	ProfileRoutes,
	AccountSettingRoutes,
	PostRoutes,
	ArtworksRoutes,
	JobsRoutes,
	CheckoutRoutes,
	ShopRoutes,
	AboutRoutes,
	ContactUsRoutes,
	CareersRoutes,
];

export default ROUTES;

const RouteWithSubRoutes = (route) => {
	return (
		<Route
			path={route.path}
			exact={route.exact}
			render={(props) => <route.component {...props} routes={route.routes} />}
		/>
	);
};

export function RenderRoutes({ routes }) {
	return (
		<Switch>
			{routes.map((route) => {
				return <RouteWithSubRoutes key={route.key} {...route} />;
			})}
			<Route component={() => <h1>Not Found!</h1>} />
		</Switch>
	);
}
