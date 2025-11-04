// ref 已通过 unplugin-auto-import 自动导入
import { logger } from '@/utils/logger'
import { handleError } from '@/utils/errorHandler'

/**
 * Tauri Command Composable
 * 提供统一的 Tauri 命令调用接口，包含加载状态、错误处理等
 */
export function useTauriCommand(commandFn, options = {}) {
  const {
    immediate = false, // 是否立即执行
    onSuccess = null, // 成功回调
    onError = null, // 错误回调
    throwOnError = false, // 是否抛出错误
  } = options

  // ==================== State ====================
  const loading = ref(false)
  const error = ref(null)
  const data = ref(null)
  const isExecuted = ref(false)

  // ==================== Methods ====================

  /**
   * 执行命令
   * @param {any} args - 命令参数
   * @returns {Promise<any>} 命令结果
   */
  async function execute(...args) {
    loading.value = true
    error.value = null

    try {
      logger.debug('Executing Tauri command...', args)

      const result = await commandFn(...args)
      data.value = result
      isExecuted.value = true

      logger.debug('Tauri command executed successfully', result)

      // 调用成功回调
      if (onSuccess) {
        onSuccess(result)
      }

      return result
    } catch (err) {
      const errorResult = handleError(err, 'useTauriCommand')
      error.value = errorResult

      logger.error('Tauri command failed:', errorResult)

      // 调用错误回调
      if (onError) {
        onError(errorResult)
      }

      // 是否抛出错误
      if (throwOnError) {
        throw errorResult
      }

      return null
    } finally {
      loading.value = false
    }
  }

  /**
   * 重置状态
   */
  function reset() {
    loading.value = false
    error.value = null
    data.value = null
    isExecuted.value = false
    logger.debug('Tauri command state reset')
  }

  /**
   * 清除错误
   */
  function clearError() {
    error.value = null
  }

  /**
   * 重新执行（使用上次的参数）
   */
  async function retry(...args) {
    return await execute(...args)
  }

  // 如果设置了 immediate，立即执行
  if (immediate) {
    execute()
  }

  return {
    // State
    loading,
    error,
    data,
    isExecuted,

    // Methods
    execute,
    reset,
    clearError,
    retry,
  }
}

/**
 * 批量执行 Tauri 命令
 * @param {Array<Function>} commands - 命令函数数组
 * @param {Object} options - 选项
 * @returns {Object} 批量执行结果
 */
export function useBatchTauriCommands(commands = [], options = {}) {
  const {
    parallel = true, // 是否并行执行
    stopOnError = false, // 遇到错误是否停止
  } = options

  const loading = ref(false)
  const errors = ref([])
  const results = ref([])
  const progress = ref(0)

  /**
   * 执行所有命令
   * @returns {Promise<Array>} 所有命令的结果
   */
  async function executeAll() {
    loading.value = true
    errors.value = []
    results.value = []
    progress.value = 0

    try {
      if (parallel) {
        // 并行执行
        const promises = commands.map((cmd, index) =>
          cmd()
            .then(result => {
              results.value[index] = result
              progress.value = ((index + 1) / commands.length) * 100
              return result
            })
            .catch(err => {
              errors.value[index] = err
              if (stopOnError) {
                throw err
              }
              return null
            })
        )

        await Promise.all(promises)
      } else {
        // 串行执行
        for (let i = 0; i < commands.length; i++) {
          try {
            const result = await commands[i]()
            results.value[i] = result
            progress.value = ((i + 1) / commands.length) * 100
          } catch (err) {
            errors.value[i] = err
            if (stopOnError) {
              throw err
            }
          }
        }
      }

      return results.value
    } finally {
      loading.value = false
    }
  }

  /**
   * 重置状态
   */
  function reset() {
    loading.value = false
    errors.value = []
    results.value = []
    progress.value = 0
  }

  return {
    // State
    loading,
    errors,
    results,
    progress,

    // Methods
    executeAll,
    reset,
  }
}
