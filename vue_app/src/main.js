import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import ModalWindow from "./plugins/ModalWindow";

import vuetify from "./plugins/vuetify";

Vue.use(ModalWindow);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  vuetify,
  store,
  router
}).$mount("#app");
