import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCompositionAPI from "@vue/composition-api";
import "./style/index.scss";
import "./utils/rem.js";
import "./utils/component";
import "./vant-ui";
import "babel-polyfill";
import "./router/routerRight.js";
Vue.use(VueCompositionAPI);
Vue.config.productionTip = false;

new Vue({
  name: "root",
  router,
  store,
  render: h => h(App)
}).$mount("#app");
