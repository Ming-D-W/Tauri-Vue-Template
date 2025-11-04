// ref 已通过 unplugin-auto-import 自动导入
import { logger } from '@/utils/logger'

/**
 * Toast 通知 Composable
 * 提供全局的 Toast 通知功能
 */

// 全局状态（单例模式）
const toastState = {
  show: ref(false),
  type: ref('info'), // success, error, warning, info
  message: ref(''),
  duration: ref(3000),
  timeoutId: null,
}

export function useToast() {
  /**
   * 显示 Toast 通知
   * @param {string} type - 通知类型 (success, error, warning, info)
   * @param {string} message - 通知消息
   * @param {number} duration - 显示时长（毫秒），0 表示不自动关闭
   */
  function showToast(type, message, duration = 3000) {
    // 清除之前的定时器
    if (toastState.timeoutId) {
      clearTimeout(toastState.timeoutId)
      toastState.timeoutId = null
    }

    // 设置新的 Toast
    toastState.type.value = type
    toastState.message.value = message
    toastState.duration.value = duration
    toastState.show.value = true

    logger.debug(`Toast shown: [${type}] ${message}`)

    // 如果 duration > 0，自动关闭
    if (duration > 0) {
      toastState.timeoutId = setTimeout(() => {
        hideToast()
      }, duration)
    }
  }

  /**
   * 隐藏 Toast 通知
   */
  function hideToast() {
    toastState.show.value = false

    if (toastState.timeoutId) {
      clearTimeout(toastState.timeoutId)
      toastState.timeoutId = null
    }

    logger.debug('Toast hidden')
  }

  /**
   * 显示成功通知
   * @param {string} message - 通知消息
   * @param {number} duration - 显示时长
   */
  function success(message, duration = 3000) {
    showToast('success', message, duration)
  }

  /**
   * 显示错误通知
   * @param {string} message - 通知消息
   * @param {number} duration - 显示时长
   */
  function error(message, duration = 4000) {
    showToast('error', message, duration)
  }

  /**
   * 显示警告通知
   * @param {string} message - 通知消息
   * @param {number} duration - 显示时长
   */
  function warning(message, duration = 3500) {
    showToast('warning', message, duration)
  }

  /**
   * 显示信息通知
   * @param {string} message - 通知消息
   * @param {number} duration - 显示时长
   */
  function info(message, duration = 3000) {
    showToast('info', message, duration)
  }

  return {
    // State
    show: toastState.show,
    type: toastState.type,
    message: toastState.message,
    duration: toastState.duration,

    // Methods
    showToast,
    hideToast,
    success,
    error,
    warning,
    info,
  }
}
