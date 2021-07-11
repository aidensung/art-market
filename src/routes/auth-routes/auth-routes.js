import { RenderRoutes } from '../root-route';

const AuthRoutes = {
	path: '/auth',
	key: 'AUTH',
	component: RenderRoutes,
	routes: [
		{
			path: '/auth/signup',
			key: 'AUTH_SIGN_UP',
			exact: true,
			component: () => <h1>SignUp</h1>,
		},
		{
			path: '/auth/login',
			key: 'AUTH_LOG_IN',
			exact: true,
			component: () => <h1>LogIn</h1>,
		},
	],
};

export default AuthRoutes;
