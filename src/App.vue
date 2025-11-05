<template>
  <div class="app-container">
    <!-- 自定义标题栏 -->
    <div class="custom-titlebar app-title" data-tauri-drag-region>
      {{ currentPageTitle }}
    </div>

    <!-- 主布局容器 -->
    <div class="app-main-layout">
      <!-- 主内容区域 -->
      <div class="main-content">
        <!-- 路由视图 -->
        <main class="tab-content-container">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" class="tab-content" />
            </transition>
          </router-view>
        </main>

        <!-- 底部组件 -->
        <MainFooter />
      </div>

      <!-- 右侧垂直标签导航 -->
      <nav class="tab-navigation">
        <div class="tab-buttons">
          <button
            v-for="route in navRoutes"
            :key="route.path"
            class="tab-btn"
            :class="{ active: isActiveRoute(route.path) }"
            :data-label="route.meta.title"
            @click="navigateTo(route.path)"
          >
            <i class="tab-icon iconfont" :class="route.meta.icon"></i>
          </button>
        </div>

        <!-- 主题切换按钮 -->
        <div class="tab-navigation-footer">
          <ThemeToggle />
        </div>
      </nav>
    </div>

    <!-- 全局 Toast 通知 -->
    <Toast />
  </div>
</template>

<script setup>
// ref, computed, useRouter, useRoute 等 API 已通过 unplugin-auto-import 自动导入
// 组件已通过 unplugin-vue-components 自动导入，无需手动导入

const router = useRouter()
const route = useRoute()

// 导航路由配置（从路由表中过滤出需要显示在导航中的路由）
const navRoutes = computed(() => {
  return router.getRoutes().filter(r => r.meta && r.meta.title && r.path !== '/')
})

// 当前页面标题
const currentPageTitle = computed(() => {
  return route.meta.title || 'Tauri Vue Template'
})

// 判断路由是否激活
const isActiveRoute = path => {
  return route.path === path
}

// 导航到指定路由
const navigateTo = path => {
  router.push(path)
}
</script>

<style scoped>
.app-container {
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--bg-secondary);
  font-family: var(--font-family);
  overflow: hidden;
  box-sizing: border-box;
  user-select: none;
}

.app-main-layout {
  flex: 1;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

/* 自定义标题栏样式 */
.custom-titlebar {
  display: flex;
  align-items: center;
  height: 32px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  /*cursor: default;*/
  padding-left: 80px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-light);
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
  background: var(--bg-secondary);
  margin: 4px;
}

.current-tab-header {
  background: var(--bg-primary);
  color: var(--text-light);
  padding: var(--spacing-md) var(--spacing-lg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-bottom: 1px solid var(--border-light);
}

.current-tab-header h1 {
  margin: 0;
  font-size: var(--font-size-lg);
  font-weight: 600;
  word-break: break-word;
  position: relative;
  z-index: 1;
  color: var(--text-primary);
}

.tab-content {
  padding: var(--spacing-lg);
  height: 100%;
  overflow-y: auto;
  width: 100%;
}

/* 路由过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


.tab-navigation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: var(--bg-secondary);
  overflow: visible;
  flex-shrink: 0;
  width: 44px;
  height: 100vh;
  box-sizing: border-box;
  scrollbar-width: none;
  -ms-overflow-style: none;
  margin-left: -4px;
}

.tab-navigation::-webkit-scrollbar {
  display: none;
}

.tab-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.tab-navigation-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: var(--spacing-sm) 0;
  border-top: 1px solid var(--border-light);
}

.tab-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  cursor: pointer;
  margin-top: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-left: 2px solid transparent;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  text-align: center;
  border-radius: 4px;
}

.tab-btn::before {
  content: attr(data-label);
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  background: var(--bg-dark);
  color: var(--text-light);
  padding: 6px 8px;
  border-radius: 6px;
  font-size: var(--font-size-sm);
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  box-shadow: var(--shadow-md);
  margin-right: 8px;
  z-index: var(--z-tooltip);
}

.tab-btn:hover::before {
  opacity: 1;
  visibility: visible;
  transform: translateY(-50%) translateX(-4px);
}

.tab-btn:hover {
  background: var(--bg-secondary);
  color: var(--primary-hover);
  transform: scale(1.05);
}

.tab-btn:hover .tab-icon {
  transform: scale(1.2, 1.2);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.tab-btn.active {
  background: var(--bg-accent);
  border-left-color: var(--primary-color);
  color: var(--primary-dark);
  box-shadow: var(--shadow-sm);
}

.tab-icon {
  font-size: var(--font-size-lg);
  flex-shrink: 0;
  line-height: 1;
  margin-left: -1px;
}

.tab-content-container {
  flex: 1;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
}

.tab-content {
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
}
</style>
