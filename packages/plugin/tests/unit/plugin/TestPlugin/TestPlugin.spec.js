import { createLocalVue } from '@vue/test-utils'
// Import makes use of aliases setup in jest.config.js, see moduleNameMapper
import TestPlugin from '@/plugin/TestPlugin'

describe('TestPlugin', () => {
  it('should mount the $tst method on the Vue prototype', () => {
    const localVue = createLocalVue()
    localVue.use(TestPlugin)
    expect(typeof localVue.prototype.$tst).toBe('object')
  })

  it('should have the plugin name', () => {
    const localVue = createLocalVue()
    localVue.use(TestPlugin)
    expect(localVue.prototype.$tst.pluginName).toBe('TestPlugin')
  })

  it('should have the plugin version', () => {
    const expectedVersion = require('@/package.json').version
    const localVue = createLocalVue()
    localVue.use(TestPlugin)
    expect(localVue.prototype.$tst.version).toBe(expectedVersion)
  })
})
