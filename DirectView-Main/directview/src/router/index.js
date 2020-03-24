import Vue from 'vue'
import Router from 'vue-router'

//routes
import frontendRoutes from './frontend';
import adminendRoutes from './admin';

// session components
const SignUp = () => import('Views/session/SignUp');
const Login = () => import('Views/session/Login');
const ForgotPassword = () => import('Views/session/ForgotPassword');
const ComingSoon = () => import('Views/session/ComingSoon');

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		frontendRoutes,
		adminendRoutes,
		{
			path: '/session/sign-up',
			component: SignUp,
			meta: {
				title: 'Signup'
				// breadcrumb: 'Session / Sign Up'
			}
		},
		{
			path: '/session/login',
			component: Login,
			meta: {
				title: 'Login'
				// breadcrumb: 'Session / Login'
			}
		},
		{
			path: '/session/forgot-password',
			component: ForgotPassword,
			meta: {
				title: 'Forgot Password'
				// breadcrumb: 'Session / Forgot Password'
			}
		},
		{
			path: '/session/coming-soon',
			component: ComingSoon,
			meta: {
				title: 'Coming Soon'
				// breadcrumb: 'Session / Reset Password'
			}
		}
	]
})
