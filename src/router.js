import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
	mode: process.env.NODE_ENV === "production" ? "history" : "hash",
	routes: [
		{
			path: "/:id",
			name: "home",
			component: () => import("@/views/Home.vue")
		}
	]
});
