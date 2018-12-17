const optionsDefaults = {
  debug: false
}
const pluginName = 'TestPlugin'
const version = require('../../package.json').version
const plugin = {
  install (Vue, options) {
    options = Object.assign({}, optionsDefaults, options)
    const debug = options.debug || false
    // eslint-disable-next-line no-console
    debug &&
      console.log(`Installing ${pluginName} v${version}`, JSON.stringify(options, null, '\t'))
    // Mount the plugin on the Vue prototype, so that it can be accessed with this.$tst
    Vue.prototype.$tst = {
      pluginName,
      version
    }
  },
  pluginName,
  version
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin

export { pluginName, version }
