// computed 已通过 unplugin-auto-import 自动导入
// useSettingsStore 已通过 unplugin-auto-import 自动导入
import { logger } from '@/utils/logger'

/**
 * Theme Composable
 * 提供主题相关的功能，基于 Settings Store
 */
export function useTheme() {
  const settingsStore = useSettingsStore()

  // ==================== Computed ====================

  /**
   * 当前主题
   */
  const theme = computed(() => settingsStore.theme)

  /**
   * 是否为暗色主题
   */
  const isDark = computed(() => {
    if (settingsStore.theme === 'auto') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return settingsStore.theme === 'dark'
  })

  /**
   * 是否为亮色主题
   */
  const isLight = computed(() => !isDark.value)

  /**
   * 主题图标组件名称
   */
  const themeIcon = computed(() => {
    const iconMap = {
      light: 'light',
      dark: 'dark',
      auto: 'auto',
    }
    return iconMap[settingsStore.theme] || 'light'
  })

  /**
   * 主题名称
   */
  const themeName = computed(() => {
    const nameMap = {
      light: '亮色',
      dark: '暗色',
      auto: '自动',
    }
    return nameMap[settingsStore.theme] || '亮色'
  })

  // ==================== Methods ====================

  /**
   * 设置主题
   * @param {string} newTheme - 主题名称 (light, dark, auto)
   */
  function setTheme(newTheme) {
    settingsStore.setTheme(newTheme)
    logger.info(`Theme set to: ${newTheme}`)
  }

  /**
   * 切换主题
   */
  function toggleTheme() {
    settingsStore.toggleTheme()
    logger.info(`Theme toggled to: ${settingsStore.theme}`)
  }

  /**
   * 切换亮色/暗色主题（不包括 auto）
   */
  function toggleLightDark() {
    const newTheme = isDark.value ? 'light' : 'dark'
    setTheme(newTheme)
  }

  /**
   * 获取系统主题偏好
   * @returns {string} 系统主题 (light 或 dark)
   */
  function getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  }

  /**
   * 监听系统主题变化
   * @param {Function} callback - 回调函数
   * @returns {Function} 取消监听的函数
   */
  function watchSystemTheme(callback) {
    if (!window.matchMedia) {
      logger.warn('matchMedia not supported')
      return () => {}
    }

    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handler = e => {
      const systemTheme = e.matches ? 'dark' : 'light'
      callback(systemTheme)
      logger.debug(`System theme changed to: ${systemTheme}`)
    }

    darkModeQuery.addEventListener('change', handler)

    // 返回取消监听的函数
    return () => {
      darkModeQuery.removeEventListener('change', handler)
    }
  }

  /**
   * 应用主题类到元素
   * @param {HTMLElement} element - 目标元素
   */
  function applyThemeClass(element = document.documentElement) {
    const actualTheme = isDark.value ? 'dark' : 'light'
    element.classList.remove('light', 'dark')
    element.classList.add(actualTheme)
    logger.debug(`Applied theme class: ${actualTheme}`)
  }

  return {
    // Computed
    theme,
    isDark,
    isLight,
    themeIcon,
    themeName,

    // Methods
    setTheme,
    toggleTheme,
    toggleLightDark,
    getSystemTheme,
    watchSystemTheme,
    applyThemeClass,

    // Constants
    availableThemes: settingsStore.AVAILABLE_THEMES,
  }
}
