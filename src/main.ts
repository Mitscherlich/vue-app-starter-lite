import type { Plugin, PluginContext } from './types'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

(async () => {
  const app = createApp(App)

  const pluginContext: PluginContext = { app }
  const plugins = import.meta.glob<Plugin>('./plugins/*.ts', { eager: true, import: 'default' })
  for (const pluginName in plugins) {
    const plugin = plugins[pluginName]
    await plugin.apply?.(pluginContext)
  }

  app.mount('#app')
})()
