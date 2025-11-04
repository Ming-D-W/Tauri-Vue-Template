// defineStore 已通过 unplugin-auto-import 自动导入
// ref, watch 已通过 unplugin-auto-import 自动导入
import { logger } from '@/utils/logger'

/**
 * 设置 Store
 * 管理应用设置，如主题、语言、自动更新等
 */
export const useSettingsStore = defineStore('settings', () => {
  // ==================== State ====================
  const theme = ref('light')
  const language = ref('zh-CN')
  const autoUpdate = ref(true)
  const enableNotifications = ref(true)
  const enableSounds = ref(true)
  const fontSize = ref('medium') // small, medium, large

  // ==================== Constants ====================
  const STORAGE_KEY = 'app-settings'
  const AVAILABLE_THEMES = ['light', 'dark', 'auto']
  const AVAILABLE_LANGUAGES = ['zh-CN', 'en-US']
  const AVAILABLE_FONT_SIZES = ['small', 'medium', 'large']

  // ==================== Actions ====================

  /**
   * 设置主题
   * @param {string} newTheme - 主题名称 (light, dark, auto)
   */
  function setTheme(newTheme) {
    if (!AVAILABLE_THEMES.includes(newTheme)) {
      logger.warn(`Invalid theme: ${newTheme}`)
      return
    }

    theme.value = newTheme
    applyTheme(newTheme)
    logger.info(`Theme changed to: ${newTheme}`)
  }

  /**
   * 应用主题到 DOM
   * @param {string} themeName - 主题名称
   */
  function applyTheme(themeName) {
    let actualTheme = themeName

    // 如果是 auto，根据系统偏好设置
    if (themeName === 'auto') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      actualTheme = prefersDark ? 'dark' : 'light'
    }

    document.documentElement.setAttribute('data-theme', actualTheme)
    logger.debug(`Applied theme: ${actualTheme}`)
  }

  /**
   * 切换主题
   */
  function toggleTheme() {
    const currentIndex = AVAILABLE_THEMES.indexOf(theme.value)
    const nextIndex = (currentIndex + 1) % AVAILABLE_THEMES.length
    setTheme(AVAILABLE_THEMES[nextIndex])
  }

  /**
   * 设置语言
   * @param {string} lang - 语言代码
   */
  function setLanguage(lang) {
    if (!AVAILABLE_LANGUAGES.includes(lang)) {
      logger.warn(`Invalid language: ${lang}`)
      return
    }

    language.value = lang
    logger.info(`Language changed to: ${lang}`)
  }

  /**
   * 设置自动更新
   * @param {boolean} enabled - 是否启用
   */
  function setAutoUpdate(enabled) {
    autoUpdate.value = enabled
    logger.info(`Auto update ${enabled ? 'enabled' : 'disabled'}`)
  }

  /**
   * 切换自动更新
   */
  function toggleAutoUpdate() {
    setAutoUpdate(!autoUpdate.value)
  }

  /**
   * 设置通知
   * @param {boolean} enabled - 是否启用
   */
  function setNotifications(enabled) {
    enableNotifications.value = enabled
    logger.info(`Notifications ${enabled ? 'enabled' : 'disabled'}`)
  }

  /**
   * 切换通知
   */
  function toggleNotifications() {
    setNotifications(!enableNotifications.value)
  }

  /**
   * 设置声音
   * @param {boolean} enabled - 是否启用
   */
  function setSounds(enabled) {
    enableSounds.value = enabled
    logger.info(`Sounds ${enabled ? 'enabled' : 'disabled'}`)
  }

  /**
   * 切换声音
   */
  function toggleSounds() {
    setSounds(!enableSounds.value)
  }

  /**
   * 设置字体大小
   * @param {string} size - 字体大小 (small, medium, large)
   */
  function setFontSize(size) {
    if (!AVAILABLE_FONT_SIZES.includes(size)) {
      logger.warn(`Invalid font size: ${size}`)
      return
    }

    fontSize.value = size
    applyFontSize(size)
    logger.info(`Font size changed to: ${size}`)
  }

  /**
   * 应用字体大小到 DOM
   * @param {string} size - 字体大小
   */
  function applyFontSize(size) {
    const sizeMap = {
      small: '14px',
      medium: '16px',
      large: '18px',
    }

    document.documentElement.style.fontSize = sizeMap[size] || sizeMap.medium
  }

  /**
   * 保存设置到 localStorage
   */
  function saveSettings() {
    const settings = {
      theme: theme.value,
      language: language.value,
      autoUpdate: autoUpdate.value,
      enableNotifications: enableNotifications.value,
      enableSounds: enableSounds.value,
      fontSize: fontSize.value,
    }

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
      logger.debug('Settings saved to localStorage')
    } catch (err) {
      logger.error('Failed to save settings:', err)
    }
  }

  /**
   * 从 localStorage 加载设置
   */
  function loadSettings() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)

      if (saved) {
        const settings = JSON.parse(saved)

        // 恢复设置
        if (settings.theme) {
          setTheme(settings.theme)
        }
        if (settings.language) {
          language.value = settings.language
        }
        if (typeof settings.autoUpdate === 'boolean') {
          autoUpdate.value = settings.autoUpdate
        }
        if (typeof settings.enableNotifications === 'boolean') {
          enableNotifications.value = settings.enableNotifications
        }
        if (typeof settings.enableSounds === 'boolean') {
          enableSounds.value = settings.enableSounds
        }
        if (settings.fontSize) {
          setFontSize(settings.fontSize)
        }

        logger.info('Settings loaded from localStorage')
      } else {
        // 首次运行，应用默认主题
        applyTheme(theme.value)
        applyFontSize(fontSize.value)
      }
    } catch (err) {
      logger.error('Failed to load settings:', err)
      // 加载失败时应用默认设置
      applyTheme(theme.value)
      applyFontSize(fontSize.value)
    }
  }

  /**
   * 重置所有设置为默认值
   */
  function resetSettings() {
    theme.value = 'light'
    language.value = 'zh-CN'
    autoUpdate.value = true
    enableNotifications.value = true
    enableSounds.value = true
    fontSize.value = 'medium'

    applyTheme('light')
    applyFontSize('medium')
    saveSettings()

    logger.info('Settings reset to defaults')
  }

  /**
   * 导出设置
   * @returns {Object} 设置对象
   */
  function exportSettings() {
    return {
      theme: theme.value,
      language: language.value,
      autoUpdate: autoUpdate.value,
      enableNotifications: enableNotifications.value,
      enableSounds: enableSounds.value,
      fontSize: fontSize.value,
    }
  }

  /**
   * 导入设置
   * @param {Object} settings - 设置对象
   */
  function importSettings(settings) {
    if (settings.theme) {
      setTheme(settings.theme)
    }
    if (settings.language) {
      setLanguage(settings.language)
    }
    if (typeof settings.autoUpdate === 'boolean') {
      setAutoUpdate(settings.autoUpdate)
    }
    if (typeof settings.enableNotifications === 'boolean') {
      setNotifications(settings.enableNotifications)
    }
    if (typeof settings.enableSounds === 'boolean') {
      setSounds(settings.enableSounds)
    }
    if (settings.fontSize) {
      setFontSize(settings.fontSize)
    }

    logger.info('Settings imported')
  }

  // ==================== Watchers ====================

  // 监听系统主题变化（仅当设置为 auto 时）
  if (window.matchMedia) {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')
    darkModeQuery.addEventListener('change', e => {
      if (theme.value === 'auto') {
        applyTheme('auto')
        logger.debug('System theme changed, reapplying auto theme')
      }
    })
  }

  // 监听设置变化，自动保存
  watch(
    [theme, language, autoUpdate, enableNotifications, enableSounds, fontSize],
    () => {
      saveSettings()
    },
    { deep: true }
  )

  // ==================== Return ====================
  return {
    // State
    theme,
    language,
    autoUpdate,
    enableNotifications,
    enableSounds,
    fontSize,

    // Constants
    AVAILABLE_THEMES,
    AVAILABLE_LANGUAGES,
    AVAILABLE_FONT_SIZES,

    // Actions
    setTheme,
    toggleTheme,
    setLanguage,
    setAutoUpdate,
    toggleAutoUpdate,
    setNotifications,
    toggleNotifications,
    setSounds,
    toggleSounds,
    setFontSize,
    loadSettings,
    saveSettings,
    resetSettings,
    exportSettings,
    importSettings,
  }
})
