<template>
  <div class="config-tab-container">
    <div class="header-section">
      <h2><icon-mdi-cog /> 应用设置</h2>
      <p class="description">管理应用的各项配置和偏好设置</p>
    </div>

    <!-- 配置分类 -->
    <div class="config-sections">
      <!-- 数据存储 -->
      <div class="config-section">
        <h3>💾 数据存储</h3>
        <div class="config-items">
          <div class="config-item">
            <label class="config-label">数据目录:</label>
            <span class="info-text">{{ appDataDir }}</span>
          </div>
          <div class="config-item">
            <label class="config-label">配置文件:</label>
            <span class="info-text">config.json</span>
          </div>
          <div class="config-item">
            <label class="config-label">操作:</label>
            <div class="database-actions">
              <button class="btn btn-danger" :disabled="isClearing" @click="clearLocalStorage">
                <icon-mdi-loading v-if="isClearing" class="spinning" />
                <icon-mdi-delete v-else />
                {{ isClearing ? '清空中...' : '清空 LocalStorage' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 系统信息 -->
      <div class="config-section">
        <h3><icon-mdi-information /> 系统信息</h3>
        <div class="config-items">
          <div class="config-item">
            <label class="config-label">应用版本:</label>
            <span class="info-text">v{{ appVersion }}</span>
          </div>
          <div class="config-item">
            <label class="config-label">操作系统:</label>
            <span class="info-text">{{ systemInfo.os }} ({{ systemInfo.arch }})</span>
          </div>
          <div class="config-item">
            <label class="config-label">系统版本:</label>
            <span class="info-text">{{ systemInfo.os_version }}</span>
          </div>
          <div class="config-item">
            <label class="config-label">数据目录:</label>
            <span class="info-text">{{ appDataDir }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// ref, onMounted, computed 已通过 unplugin-auto-import 自动导入
// useAppStore, useSettingsStore 已通过 unplugin-auto-import 自动导入
import { useToast } from '@composables/useToast'

// 使用 Stores 和 Composables
const appStore = useAppStore()
const settingsStore = useSettingsStore()
const toast = useToast()

// 响应式数据
const isClearing = ref(false)

// 从 Store 获取数据
const appVersion = computed(() => appStore.version || '1.0.0')
const appDataDir = computed(() => appStore.dataDir || '加载中...')
const systemInfo = computed(
  () =>
    appStore.systemInfo || {
      os: '加载中...',
      arch: '',
      os_version: '',
    }
)
// 清空 LocalStorage
const clearLocalStorage = async () => {
  const confirmed = confirm('⚠️ 确定要清空 LocalStorage 吗？\n\n此操作不可撤销！')

  if (!confirmed) {
    return
  }

  isClearing.value = true

  try {
    localStorage.clear()
    toast.success('LocalStorage 已清空')

    // 重置设置为默认值
    settingsStore.resetSettings()
  } catch (error) {
    toast.error(`清空失败: ${error.message}`)
  } finally {
    isClearing.value = false
  }
}

// 组件挂载时加载数据
onMounted(async () => {
  // 如果 appStore 还没有初始化，手动初始化
  if (!appStore.version) {
    try {
      await appStore.initialize()
    } catch (error) {
      toast.error('加载应用信息失败')
    }
  }
})
</script>

<style scoped>
.config-tab-container {
  padding: var(--spacing-lg);
  height: 100%;
  overflow-y: auto;
}

.header-section {
  margin-bottom: var(--spacing-lg);
}

.description {
  color: var(--text-secondary);
  margin-top: var(--spacing-sm);
}

.config-sections {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.config-section {
  background: var(--bg-secondary);
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
  border: 1px solid var(--border-light);
}

.config-section h3 {
  color: var(--text-primary);
  margin-bottom: var(--spacing);
  font-size: var(--font-size);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.config-items {
  display: flex;
  flex-direction: column;
  gap: var(--spacing);
}

.config-item {
  display: flex;
  align-items: center;
  gap: var(--spacing);
  padding: var(--spacing);
  background: var(--bg-primary);
  border-radius: var(--radius);
  border: 1px solid var(--border-light);
}

.config-label {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  min-width: 100px;
  flex-shrink: 0;
}

.info-text {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  font-family: monospace;
  word-break: break-all;
}

/* 数据库操作 */
.database-actions {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

.btn {
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius);
  font-size: var(--font-size-sm);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast);
  border: 1px solid transparent;
  white-space: nowrap;
}

.btn-danger {
  background: #dc2626;
  color: white;
}

.btn-danger:hover:not(:disabled) {
  background: #b91c1c;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
