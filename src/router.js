import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const routes = [{ path: "*", redirect: "/day01" }];
importPages(require.context("./views", true, /\.vue$/, "lazy"));
function importPages(r) {
	r.keys().forEach((key) => {
		routes.push({ path: key.split(".")[1], component: () => r(key) });
	});
}
console.log(routes);
export default new Router({
	routes,
});
