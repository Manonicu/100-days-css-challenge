import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import "@/icons";
import "@/assets/global.less";

Vue.config.productionTip = false;
Vue.config.devtools = true;
new Vue({
	router,
	render: h => h(App)
}).$mount("#app");
