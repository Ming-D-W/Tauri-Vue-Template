<template>
  <div class="app-container">
    <!-- 自定义标题栏 -->
    <div class="custom-titlebar app-title" data-tauri-drag-region>
      {{ currentTabLabel }}
    </div>

    <!-- 主布局容器 -->
    <div class="app-main-layout">
      <!-- 主内容区域 -->
      <div class="main-content">
        <!-- 标签内容 -->
        <main class="tab-content-container">
          <!-- 控制台 -->
          <div v-show="currentTab === 'popup'" class="tab-content">
            <PopupTab />
          </div>

          <!-- 组件示例 -->
          <div v-show="currentTab === 'examples'" class="tab-content">
            <ExamplesTab />
          </div>

          <!-- 系统工具 -->
          <div v-show="currentTab === 'tools'" class="tab-content">
            <ToolsTab />
          </div>

          <!-- 应用设置 -->
          <div v-show="currentTab === 'config'" class="tab-content">
            <ConfigTab />
          </div>
        </main>

        <!-- 底部组件 -->
        <MainFooter />
      </div>

      <!-- 右侧垂直标签导航 -->
      <nav class="tab-navigation">
        <div class="tab-buttons">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            class="tab-btn"
            :class="{ active: currentTab === tab.id }"
            :data-label="tab.label"
            @click="switchTab(tab.id)"
          >
            <i class="tab-icon iconfont" :class="tab.icon"></i>
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
// ref, computed 等 Vue API 已通过 unplugin-auto-import 自动导入
// 组件导入保留（也可以配置自动导入，但为了清晰性暂时保留）
import PopupTab from './components/PopupTab.vue'
import ExamplesTab from './components/ExamplesTab.vue'
import ToolsTab from './components/ToolsTab.vue'
import ConfigTab from './components/ConfigTab.vue'
import MainFooter from './components/MainFooter.vue'
import ThemeToggle from './components/common/ThemeToggle.vue'
import Toast from './components/common/Toast.vue'

// 响应式数据
const currentTab = ref('examples')

// 标签配置
const tabs = [
  { id: 'popup', label: '控制台', icon: 'icon-kaishiliucheng' },
  { id: 'examples', label: '组件示例', icon: 'icon-fangwenlingpai' },
  { id: 'tools', label: '系统工具', icon: 'icon-youxiang' },
  { id: 'config', label: '应用设置', icon: 'icon-shezhi' },
]

// 计算属性
const currentTabLabel = computed(() => {
  const activeTab = tabs.find(tab => tab.id === currentTab.value)
  return activeTab ? activeTab.label : '控制台'
})

// 方法
const switchTab = tabId => {
  currentTab.value = tabId
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
