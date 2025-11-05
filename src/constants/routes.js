/**
 * 路由常量
 */
import IconMdiPalette from '~icons/mdi/palette'
import IconMdiTools from '~icons/mdi/tools'
import IconMdiCog from '~icons/mdi/cog'
import IconMdiMessageText from '~icons/mdi/message-text'

export const ROUTES = {
  EXAMPLES: '/examples',
  TOOLS: '/tools',
  CONFIG: '/config',
  POPUP: '/popup',
}

export const ROUTE_NAMES = {
  EXAMPLES: 'Examples',
  TOOLS: 'Tools',
  CONFIG: 'Config',
  POPUP: 'Popup',
}

export const ROUTE_TITLES = {
  [ROUTES.EXAMPLES]: '组件示例',
  [ROUTES.TOOLS]: '系统工具',
  [ROUTES.CONFIG]: '应用设置',
  [ROUTES.POPUP]: '弹窗示例',
}

export const ROUTE_ICONS = {
  [ROUTES.EXAMPLES]: IconMdiPalette,
  [ROUTES.TOOLS]: IconMdiTools,
  [ROUTES.CONFIG]: IconMdiCog,
  [ROUTES.POPUP]: IconMdiMessageText,
}
