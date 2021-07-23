import { RenderRoutes } from "../root-route";

const ContactUsRoutes = {
	path: "/contact",
	key: "CONTACTUS",
	component: RenderRoutes,
	routes: [
		{
			path: "/contact",
			key: "CONTACT_ROOT",
			exact: true,
			component: () => <h1>Contact Us</h1>,
		},
	],
};

export default ContactUsRoutes;
