import type { App } from 'vue'

export interface PluginContext {
  app: App
}

export interface Plugin {
  apply(context: PluginContext): void | Promise<void>
}
