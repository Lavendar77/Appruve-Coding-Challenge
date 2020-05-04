import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import('@/views/Home'),
		meta: {
			title: "Coding Challenge"
		}
	},
	{
		path: "/dashboard",
		name: "Dashboard",
		component: () => import('@/views/Dashboard'),
		meta: {
			title: "Dashboard"
		}
	}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
