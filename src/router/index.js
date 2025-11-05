import { createRouter, createWebHashHistory } from 'vue-router'
import { ROUTES, ROUTE_NAMES, ROUTE_TITLES, ROUTE_ICONS } from '@/constants/routes'

// 路由配置
const routes = [
  {
    path: '/',
    redirect: ROUTES.EXAMPLES,
  },
  {
    path: ROUTES.EXAMPLES,
    name: ROUTE_NAMES.EXAMPLES,
    component: () => import('@/views/ExamplesView.vue'),
    meta: {
      title: ROUTE_TITLES[ROUTES.EXAMPLES],
      icon: ROUTE_ICONS[ROUTES.EXAMPLES],
    },
  },
  {
    path: ROUTES.TOOLS,
    name: ROUTE_NAMES.TOOLS,
    component: () => import('@/views/ToolsView.vue'),
    meta: {
      title: ROUTE_TITLES[ROUTES.TOOLS],
      icon: ROUTE_ICONS[ROUTES.TOOLS],
    },
  },
  {
    path: ROUTES.CONFIG,
    name: ROUTE_NAMES.CONFIG,
    component: () => import('@/views/ConfigView.vue'),
    meta: {
      title: ROUTE_TITLES[ROUTES.CONFIG],
      icon: ROUTE_ICONS[ROUTES.CONFIG],
    },
  },
  {
    path: ROUTES.POPUP,
    name: ROUTE_NAMES.POPUP,
    component: () => import('@/views/PopupView.vue'),
    meta: {
      title: ROUTE_TITLES[ROUTES.POPUP],
      icon: ROUTE_ICONS[ROUTES.POPUP],
    },
  },
]

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 路由守卫 - 更新文档标题
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} - Tauri Vue Template`
  }
  next()
})

export default router
