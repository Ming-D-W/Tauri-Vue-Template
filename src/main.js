// Vue 和 Pinia API 已通过 unplugin-auto-import 自动导入
// createApp, createPinia 等无需手动导入
import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './assets/styles/global.css'
import './assets/styles/dark.css'
import './assets/iconfont/iconfont.css'
import { logger } from './utils/logger'
import { handleError } from './utils/errorHandler'
// useAppStore, useSettingsStore 已通过 unplugin-auto-import 自动导入

// 创建 Vue 应用
const app = createApp(App)

// 添加 Pinia 状态管理
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

// 添加 Vue Router
app.use(router)

// 全局错误处理
app.config.errorHandler = (err, instance, info) => {
  logger.error('Global Vue error:', err, info)
  const result = handleError(err, 'Vue Global Error Handler')
  // 可以在这里显示全局错误提示
  console.error('Error details:', result)
}

// 全局警告处理
app.config.warnHandler = (msg, instance, trace) => {
  logger.warn('Global Vue warning:', msg, trace)
}

// 未捕获的 Promise 错误
window.addEventListener('unhandledrejection', event => {
  logger.error('Unhandled promise rejection:', event.reason)
  handleError(event.reason, 'Unhandled Promise Rejection')
  event.preventDefault() // 阻止默认的控制台错误输出
})

// 全局错误事件
window.addEventListener('error', event => {
  logger.error('Global error:', event.error || event.message)
  handleError(event.error || new Error(event.message), 'Global Error')
})

// 初始化 Stores（在挂载之前）
const appStore = useAppStore()
const settingsStore = useSettingsStore()

// 初始化设置（持久化插件会自动加载数据，这里只需要应用到 DOM）
settingsStore.initializeSettings()

// 初始化应用数据
appStore.initialize().catch(err => {
  logger.error('Failed to initialize app:', err)
})

// 挂载应用（在 stores 初始化之后）
app.mount('#app')

// 开发环境日志
if (import.meta.env.MODE === 'development') {
  logger.info('🚀 Tauri Vue Template 已启动')
  logger.info('📦 Vue 3 + Pinia 状态管理已加载')
  logger.info('🛣️ Vue Router 路由系统已加载')
  logger.info('⚡ Tauri 2.0 + Rust 后端已就绪')
  logger.info('🛡️ 全局错误处理已启用')
  logger.info('🎨 主题系统已加载')
  logger.info('💾 状态持久化已启用')
}
