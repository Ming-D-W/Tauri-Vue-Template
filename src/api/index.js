// Tauri API 适配层
// 检测运行环境并提供统一的 API 接口

import { validateFilePath, validateFileName, sanitizeInput } from '@/utils/validation'
import { createError, ERROR_CODES, handleError } from '@/utils/errorHandler'
import { logger } from '@/utils/logger'

// 动态检测是否在 Tauri 环境中
function isTauri() {
  return typeof window !== 'undefined' && window.__TAURI__ !== undefined
}

// 动态检测是否在 Electron 环境中
function isElectron() {
  return typeof window !== 'undefined' && window.electronAPI !== undefined
}

// 获取 Tauri invoke 函数
function getTauriInvoke() {
  if (isTauri()) {
    // 直接使用 window.__TAURI__.core.invoke
    return window.__TAURI__.core.invoke
  }
  return null
}

// 辅助函数：调用后端 API
async function callBackend(tauriCommand, electronMethod, params = {}) {
  if (isTauri()) {
    const invoke = getTauriInvoke()
    return await invoke(tauriCommand, params)
  } else if (isElectron()) {
    return await electronMethod()
  }
  throw new Error('Unsupported platform')
}

// API 导出
export const api = {
  // 应用信息
  app: {
    getVersion: async () => {
      if (isTauri()) {
        const invoke = getTauriInvoke()
        return await invoke('get_app_version')
      } else if (isElectron()) {
        return await window.electronAPI.getAppVersion()
      }
      throw new Error('Unsupported platform')
    },

    getDataDir: async () => {
      if (isTauri()) {
        const invoke = getTauriInvoke()
        return await invoke('get_app_data_dir')
      }
      throw new Error('Unsupported platform')
    },
  },

  // 系统操作
  system: {
    getHomeDir: async () => {
      if (isTauri()) {
        const invoke = getTauriInvoke()
        return await invoke('system_get_home_dir')
      } else if (isElectron()) {
        return await window.electronAPI.system.getHomeDir()
      }
      throw new Error('Unsupported platform')
    },

    executeCommand: async (cmd, args, options = {}) => {
      if (isTauri()) {
        const invoke = getTauriInvoke()
        return await invoke('system_execute_command', { cmd, args })
      } else if (isElectron()) {
        return await window.electronAPI.system.executeCommand(cmd, args, options)
      }
      throw new Error('Unsupported platform')
    },

    readFile: async (path, encoding = 'utf8') => {
      // 验证文件路径
      if (!validateFilePath(path)) {
        logger.error('Invalid file path:', path)
        throw createError(ERROR_CODES.INVALID_FILE_PATH, { path })
      }

      try {
        if (isTauri()) {
          const invoke = getTauriInvoke()
          logger.debug('Reading file:', path)
          return await invoke('system_read_file', { path })
        } else if (isElectron()) {
          return await window.electronAPI.system.readFile(path, encoding)
        }
        throw new Error('Unsupported platform')
      } catch (error) {
        logger.error('Failed to read file:', error)
        throw handleError(error, 'readFile')
      }
    },

    writeFile: async (path, content) => {
      // 验证文件路径
      if (!validateFilePath(path)) {
        logger.error('Invalid file path:', path)
        throw createError(ERROR_CODES.INVALID_FILE_PATH, { path })
      }

      // 清理内容
      const sanitizedContent = typeof content === 'string' ? sanitizeInput(content) : content

      try {
        if (isTauri()) {
          const invoke = getTauriInvoke()
          logger.debug('Writing file:', path)
          return await invoke('system_write_file', { path, content: sanitizedContent })
        } else if (isElectron()) {
          return await window.electronAPI.system.writeFile(path, sanitizedContent)
        }
        throw new Error('Unsupported platform')
      } catch (error) {
        logger.error('Failed to write file:', error)
        throw handleError(error, 'writeFile')
      }
    },

    fileExists: async path => {
      if (isTauri()) {
        const invoke = getTauriInvoke()
        return await invoke('system_file_exists', { path })
      } else if (isElectron()) {
        return await window.electronAPI.system.fileExists(path)
      }
      throw new Error('Unsupported platform')
    },

    backupFile: async path => {
      if (isTauri()) {
        const invoke = getTauriInvoke()
        return await invoke('system_backup_file', { path })
      } else if (isElectron()) {
        return await window.electronAPI.system.backupFile(path)
      }
      throw new Error('Unsupported platform')
    },

    restoreFile: async (backupPath, originalPath) => {
      if (isTauri()) {
        const invoke = getTauriInvoke()
        return await invoke('system_restore_file', { backupPath, originalPath })
      } else if (isElectron()) {
        return await window.electronAPI.system.restoreFile(backupPath, originalPath)
      }
      throw new Error('Unsupported platform')
    },

    getSystemInfo: async () => {
      if (isTauri()) {
        const invoke = getTauriInvoke()
        return await invoke('system_get_info')
      }
      throw new Error('Unsupported platform')
    },

    getFileSize: async path => {
      if (isTauri()) {
        const invoke = getTauriInvoke()
        return await invoke('system_get_file_size', { path })
      }
      throw new Error('Unsupported platform')
    },
  },

  // 文件操作
  file: {
    // 选择单个文件
    selectFile: async () => {
      if (isTauri()) {
        const { open } = window.__TAURI__.dialog
        const selected = await open({
          multiple: false,
          directory: false,
        })
        return selected
      } else if (isElectron()) {
        return await window.electronAPI.file.selectFile()
      }
      throw new Error('Unsupported platform')
    },

    // 选择多个文件
    selectMultipleFiles: async () => {
      if (isTauri()) {
        const { open } = window.__TAURI__.dialog
        const selected = await open({
          multiple: true,
          directory: false,
        })
        return selected || []
      } else if (isElectron()) {
        return await window.electronAPI.file.selectMultipleFiles()
      }
      throw new Error('Unsupported platform')
    },

    // 选择目录
    selectDirectory: async () => {
      if (isTauri()) {
        const { open } = window.__TAURI__.dialog
        const selected = await open({
          multiple: false,
          directory: true,
        })
        return selected
      } else if (isElectron()) {
        return await window.electronAPI.file.selectDirectory()
      }
      throw new Error('Unsupported platform')
    },

    // 保存文本文件（显示保存对话框）
    saveTextFile: async (content, defaultFileName = 'file.txt') => {
      // 验证文件名
      if (!validateFileName(defaultFileName)) {
        logger.error('Invalid file name:', defaultFileName)
        throw createError(ERROR_CODES.INVALID_FILE_NAME, { fileName: defaultFileName })
      }

      try {
        if (isTauri()) {
          const { save } = window.__TAURI__.dialog
          const filePath = await save({
            defaultPath: defaultFileName,
          })

          if (filePath) {
            const { writeTextFile } = window.__TAURI__.fs
            logger.debug('Saving text file:', filePath)
            await writeTextFile(filePath, content)
            return filePath
          }
          return null
        } else if (isElectron()) {
          return await window.electronAPI.file.saveTextFile(content, defaultFileName)
        }
        throw new Error('Unsupported platform')
      } catch (error) {
        logger.error('Failed to save text file:', error)
        throw handleError(error, 'saveTextFile')
      }
    },

    showSaveDialog: async options => {
      if (isTauri()) {
        const invoke = getTauriInvoke()
        const defaultPath = options?.defaultPath || 'tokens.json'
        const filePath = await invoke('show_save_dialog', { defaultPath })
        return {
          canceled: filePath === null,
          filePath: filePath,
        }
      } else if (isElectron()) {
        return await window.electronAPI.file.showSaveDialog(options)
      }
      throw new Error('Unsupported platform')
    },

    writeFile: async (filePath, data) => {
      if (isTauri()) {
        const invoke = getTauriInvoke()
        await invoke('write_text_file', { path: filePath, content: data })
        return true
      } else if (isElectron()) {
        return await window.electronAPI.file.writeFile(filePath, data)
      }
      throw new Error('Unsupported platform')
    },
  },
}

// 导出环境检测函数
export const platform = {
  isTauri,
  isElectron,
  getName: () => {
    if (isTauri()) {
      return 'Tauri'
    }
    if (isElectron()) {
      return 'Electron'
    }
    return 'Unknown'
  },
}
