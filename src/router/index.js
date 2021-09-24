import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'

Vue.use(VueRouter)

let routes = [
	{
		// will match everything
		path: '*',
		component: () => import('../views/404.vue'),
	},
	{
		path: '/',
		name: 'Home',
		redirect: '/dashboard',
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		layout: "dashboard",
		component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/layout',
		name: 'Layout',
		layout: "dashboard",
		component: () => import('../views/Layout.vue'),
	},
	{
		path: '/super_item',
		name: 'Item Super Admin',
		layout: "dashboard",
		component: () => import('../views/SuperItem.vue'),
		meta: {
			requiresAuth: true,
			adminAuth: true,
			merchantAuth: false,
		},
	},
	{
		path: '/super_user',
		name: 'User',
		layout: "dashboard",
		component: () => import('../views/SuperUser.vue'),
		meta: {
			requiresAuth: true,
			adminAuth: true,
			merchantAuth: false,
		},
	},
	{
		path: '/super_merchant',
		name: 'Merchant Super',
		layout: "dashboard",
		component: () => import('../views/SuperMerchant.vue'),
	},
	{
		path: '/merchant_item',
		name: 'Item Merchant',
		layout: "dashboard",
		component: () => import('../views/MerchantItem.vue'),
		meta: {
			requiresAuth: true,
			adminAuth: false,
			merchantAuth: true,
		},
	},
	{
		path: '/merchant_merchant',
		name: 'Merchant',
		layout: "dashboard",
		component: () => import('../views/MerchantMerchant.vue'),
		meta: {
			requiresAuth: true,
			adminAuth: false,
			merchantAuth: true,
		},
	},
	
	{
		path: '/Profile',
		name: 'Profile',
		layout: "dashboard",
		meta: {
			requiresAuth: true,
			layoutClass: 'layout-profile',
		},
		component: () => import('../views/Profile.vue'),
	},
	{
		path: '/sign-in',
		name: 'Sign-In',
		component: () => import('../views/Sign-In.vue'),
	},
	{
		path: '/sign-up',
		name: 'Sign-Up',
		component: () => import('../views/Sign-Up.vue'),
	},
]

// Adding layout property from each route to the meta
// object so it can be accessed later.
function addLayoutToRoute( route, parentLayout = "default" )
{
	route.meta = route.meta || {} ;
	route.meta.layout = route.layout || parentLayout ;
	
	if( route.children )
	{
		route.children = route.children.map( ( childRoute ) => addLayoutToRoute( childRoute, route.meta.layout ) ) ;
	}
	return route ;
}

routes = routes.map( ( route ) => addLayoutToRoute( route ) ) ;

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior (to, from, savedPosition) {
		if ( to.hash ) {
			return {
				selector: to.hash,
				behavior: 'smooth',
			}
		}
		return {
			x: 0,
			y: 0,
			behavior: 'smooth',
		}
	}
})
router.beforeEach((to, from, next) => {
	let role = !store.getters.user? 'merchant' : store.getters.user.role;
	let accessToken = !store.getters.isLoggedIn? false : store.getters.isLoggedIn;
	if (to.meta.requiresAuth) {
		if (!role || !accessToken) {
		router.push({path: '/sign-in'});
		} else {
			if (to.meta.adminAuth) {
				if (role === "admin") {
				return next();
				}else {
				router.push({path: '/sign-in'});
				}
			} else if (to.meta.merchantAuth) {
				if (role === "merchant") {
				return next();
				} else {
				router.push({path: '/sign-in'});
				}
			}else{
				return next();
			}
		}
	} else {
		return next();
	}
	
	});
export default router
