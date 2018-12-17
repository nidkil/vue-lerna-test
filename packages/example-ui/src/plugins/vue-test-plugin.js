import Vue from "vue";
import TestPlugin from "@vue-lerna-test/plugin";

const configTestPlugin = {
  debug: true
};

console.log(`test-plugin: ${TestPlugin.pluginName} v${TestPlugin.version}`);

Vue.use(TestPlugin, configTestPlugin);
