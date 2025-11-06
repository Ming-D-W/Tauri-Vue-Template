/**
 * 路由常量
 */
import IconProiconsHome from '~icons/proicons/home'
import IconProiconsBox from '~icons/proicons/box'
import IconProiconsWrench from '~icons/proicons/wrench'
import IconProiconsSettings from '~icons/proicons/settings'

export const ROUTES = {
  HOME: '/',
  EXAMPLES: '/examples',
  TOOLS: '/tools',
  CONFIG: '/config',
}

export const ROUTE_NAMES = {
  HOME: 'Home',
  EXAMPLES: 'Examples',
  TOOLS: 'Tools',
  CONFIG: 'Config',
}

export const ROUTE_TITLES = {
  [ROUTES.HOME]: '首页',
  [ROUTES.EXAMPLES]: '组件示例',
  [ROUTES.TOOLS]: '系统工具',
  [ROUTES.CONFIG]: '应用设置',
}

export const ROUTE_ICONS = {
  [ROUTES.HOME]: IconProiconsHome,
  [ROUTES.EXAMPLES]: IconProiconsBox,
  [ROUTES.TOOLS]: IconProiconsWrench,
  [ROUTES.CONFIG]: IconProiconsSettings,
}
