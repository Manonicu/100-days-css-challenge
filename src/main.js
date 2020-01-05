import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import "@/icons";
import "@/assets/global.less";
import * as Sentry from "@sentry/browser";
import * as Integrations from "@sentry/integrations";

Sentry.init({
	dsn: "https://15439da9f58d40c1b0884afa4f51e16b@sentry.io/1871899",
	integrations: [new Integrations.Vue({ Vue, attachProps: true })]
});

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App)
}).$mount("#app");
