import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

const ROUTES = [
	{ path: '/', key: 'ROOT', exact: true, component: Home },
	{
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
	},
	{
		path: '/profile',
		key: 'PROFILE',
		component: RenderRoutes,
		routes: [
			{
				path: '/profile',
				key: 'PROFILE_ROOT',
				exact: true,
				component: () => <h1>Profile Overview</h1>,
			},
			{
				path: '/profile/transaction-history',
				key: 'PROFILE_TRANSACTION_HISTORY',
				exact: true,
				component: () => <h1>Transaction History</h1>,
			},
			{
				path: '/profile/transaction-history/:tid',
				key: 'PROFILE_TRANSACTION_HISTORY_DETAIL',
				exact: true,
				component: () => <h1>Transaction History of OOO</h1>,
			},
			{
				path: '/profile/favourites',
				key: 'PROFILE_FAVOURITES',
				exact: true,
				component: () => <h1> List of Favourites </h1>,
			},
			{
				path: '/profile/artworks-history',
				key: 'PROFILE_ARTWORKS_HISTORY',
				exact: true,
				component: () => <h1>List of artworks</h1>,
			},
			{
				path: '/profile/artworks-history/:aid',
				key: 'PROFILE_ARTWORKS_HISTORY_DETAIL',
				exact: true,
				component: () => <h1>Detail of Artwork</h1>,
			},
			{
				path: '/profile/jobs-history',
				key: 'PROFILE_JOBS-HISTORY',
				exact: true,
				component: () => <h1>List of Jobs</h1>,
			},
			{
				path: '/profile/jobs-history/:jid',
				key: 'PROFILE_JOBS-HISTORY_DETAIL',
				exact: true,
				component: () => <h1>Detail of Job</h1>,
			},
			{
				path: '/profile/inbox',
				key: 'PROFILE_INBOX',
				exact: true,
				component: () => <h1>List of Message</h1>,
			},
			{
				path: '/profile/inbox/:mid',
				key: 'PROFILE_INBOX_DETAIL',
				exact: true,
				component: () => <h1>Detail of Message</h1>,
			},
		],
	},
	{
		path: '/account-setting',
		key: 'ACCOUNT_SETTING',
		component: RenderRoutes,
		routes: [
			{
				path: '/account-setting',
				key: 'ACCOUNT_SETTING_ROOT',
				exact: true,
				component: () => <h1>Account Setting</h1>,
			},
			{
				path: '/account-setting/payments',
				key: 'ACCOUNT_SETTING_PAYMENTS',
				exact: true,
				component: () => <h1>Payments Setting</h1>,
			},
			{
				path: '/account-setting/notifications',
				key: 'ACCOUNT_SETTING_NOTIFICATIONS',
				exact: true,
				component: () => <h1>Notification Setting</h1>,
			},
		],
	},
	{
		path: '/post',
		key: 'POST',
		component: RenderRoutes,
		routes: [
			{
				path: '/post/select-category',
				key: 'POST_SELECT-CATEGORY',
				exact: true,
				component: () => <h1>Select Category Form</h1>,
			},
			{
				path: '/post/artworks',
				key: 'POST_ARTWORKS',
				exact: true,
				component: () => <h1>Artwork Upload Form</h1>,
			},
			{
				path: '/post/jobs',
				key: 'POST_JOBS',
				exact: true,
				component: () => <h1>Job Upload Form</h1>,
			},
		],
	},
	{
		path: '/artworks',
		key: 'ARTWORKS',
		component: RenderRoutes,
		routes: [
			{
				path: '/artworks',
				key: 'ARTWORKS_ROOT',
				exact: true,
				component: () => <h1>List of Artworks</h1>,
			},
		],
	},
	{
		path: '/jobs',
		key: 'JOBS',
		component: RenderRoutes,
		routes: [
			{
				path: '/jobs',
				key: 'JOBS_ROOT',
				exact: true,
				component: () => <h1>List of jobs</h1>,
			},
		],
	},
	{
		path: '/checkout',
		key: 'CHEKOUT',
		component: RenderRoutes,
		routes: [
			{
				path: '/checkout',
				key: 'CHEKOUT_ROOT',
				exact: true,
				component: () => <h1>Check Out</h1>,
			},
		],
	},
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
			{routes.map((route, i) => {
				return <RouteWithSubRoutes key={route.key} {...route} />;
			})}
			<Route component={() => <h1>Not Found!</h1>} />
		</Switch>
	);
}
