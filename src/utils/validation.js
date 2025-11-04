/**
 * 验证文件路径是否安全
 * @param {string} path - 文件路径
 * @returns {boolean} 是否为安全路径
 */
export function validateFilePath(path) {
  if (!path || typeof path !== 'string') {
    return false
  }

  // 防止路径遍历攻击
  if (path.includes('..')) {
    return false
  }

  // 防止访问系统敏感目录
  const forbiddenPaths = [
    '/etc',
    '/sys',
    '/proc',
    '/root',
    'C:\\Windows\\System32',
    'C:\\Windows\\SysWOW64',
    '/System',
    '/Library/System',
  ]

  const normalizedPath = path.toLowerCase()
  if (forbiddenPaths.some(forbidden => normalizedPath.startsWith(forbidden.toLowerCase()))) {
    return false
  }

  return true
}

/**
 * 清理用户输入，移除潜在的危险字符
 * @param {string} input - 用户输入
 * @returns {string} 清理后的字符串
 */
export function sanitizeInput(input) {
  if (typeof input !== 'string') {
    return ''
  }

  // 移除潜在的危险字符
  return input
    .replace(/[<>]/g, '') // 移除 HTML 标签字符
    .replace(/['"]/g, '') // 移除引号
    .trim()
}

/**
 * 验证文件名是否合法
 * @param {string} filename - 文件名
 * @returns {boolean} 是否为合法文件名
 */
export function validateFileName(filename) {
  if (!filename || typeof filename !== 'string') {
    return false
  }

  // 检查文件名长度
  if (filename.length > 255) {
    return false
  }

  // 检查非法字符
  const illegalChars = /[<>:"/\\|?*\x00-\x1f]/g
  if (illegalChars.test(filename)) {
    return false
  }

  // 检查保留名称（Windows）
  const reservedNames = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])$/i
  if (reservedNames.test(filename)) {
    return false
  }

  return true
}

/**
 * 验证 URL 是否安全
 * @param {string} url - URL 地址
 * @returns {boolean} 是否为安全 URL
 */
export function validateUrl(url) {
  if (!url || typeof url !== 'string') {
    return false
  }

  try {
    const urlObj = new URL(url)

    // 只允许 http 和 https 协议
    if (!['http:', 'https:'].includes(urlObj.protocol)) {
      return false
    }

    return true
  } catch {
    return false
  }
}

/**
 * 验证 JSON 字符串
 * @param {string} jsonString - JSON 字符串
 * @returns {boolean} 是否为有效 JSON
 */
export function validateJson(jsonString) {
  if (!jsonString || typeof jsonString !== 'string') {
    return false
  }

  try {
    JSON.parse(jsonString)
    return true
  } catch {
    return false
  }
}

/**
 * 验证数字范围
 * @param {number} value - 数值
 * @param {number} min - 最小值
 * @param {number} max - 最大值
 * @returns {boolean} 是否在范围内
 */
export function validateNumberRange(value, min, max) {
  if (typeof value !== 'number' || isNaN(value)) {
    return false
  }

  return value >= min && value <= max
}

/**
 * 验证字符串长度
 * @param {string} str - 字符串
 * @param {number} minLength - 最小长度
 * @param {number} maxLength - 最大长度
 * @returns {boolean} 是否符合长度要求
 */
export function validateStringLength(str, minLength, maxLength) {
  if (typeof str !== 'string') {
    return false
  }

  return str.length >= minLength && str.length <= maxLength
}
