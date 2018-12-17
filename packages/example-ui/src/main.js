import Vue from "vue";
import App from "./App.vue";

import "./plugins/vue-test-plugin";

Vue.config.productionTip = false;

window.Vue = new Vue({
  render: h => h(App)
}).$mount("#app");

window.Vue.$tst &&
  console.log(
    `main: ${window.Vue.$tst.pluginName} v${window.Vue.$tst.version}`
  );
