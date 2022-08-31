import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css"; // tailwind css
import "./plugins/FontAwesome"; // importing fa icons

Vue.config.productionTip = false;

new Vue({
	router,
	render: function (h) {
		return h(App);
	},
}).$mount("#app");
