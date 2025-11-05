import { createRouter, createWebHashHistory } from 'vue-router'

// 路由配置
const routes = [
  {
    path: '/',
    redirect: '/examples',
  },
  {
    path: '/console',
    name: 'Console',
    component: () => import('@/components/PopupTab.vue'),
    meta: {
      title: '控制台',
      icon: 'icon-kaishiliucheng',
    },
  },
  {
    path: '/examples',
    name: 'Examples',
    component: () => import('@/components/ExamplesTab.vue'),
    meta: {
      title: '组件示例',
      icon: 'icon-fangwenlingpai',
    },
  },
  {
    path: '/tools',
    name: 'Tools',
    component: () => import('@/components/ToolsTab.vue'),
    meta: {
      title: '系统工具',
      icon: 'icon-youxiang',
    },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/components/ConfigTab.vue'),
    meta: {
      title: '应用设置',
      icon: 'icon-shezhi',
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

