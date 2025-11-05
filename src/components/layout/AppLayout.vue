<template>
  <div class="app-container">
    <!-- 自定义标题栏 -->
    <Titlebar />

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
      <Sidebar />
    </div>

    <!-- 全局 Toast 通知 -->
    <Toast />
  </div>
</template>

<script setup>
import Titlebar from './Titlebar.vue'
import Sidebar from './Sidebar.vue'
import MainFooter from './MainFooter.vue'
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

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
  background: var(--bg-secondary);
  margin: 4px;
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
  padding: var(--spacing-lg);
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
</style>
