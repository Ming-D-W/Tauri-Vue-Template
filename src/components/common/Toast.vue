<template>
  <Teleport to="body">
    <Transition name="toast">
      <div v-if="show" :class="['toast', `toast-${type}`]" role="alert" aria-live="polite">
        <div class="toast-icon">
          <component :is="getIconComponent()" />
        </div>
        <div class="toast-content">
          <div class="toast-message">{{ message }}</div>
        </div>
        <button class="toast-close" aria-label="关闭通知" @click="hideToast">×</button>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { useToast } from '@composables/useToast'
import IconMdiCheckCircle from '~icons/mdi/check-circle'
import IconMdiCloseCircle from '~icons/mdi/close-circle'
import IconMdiAlertCircle from '~icons/mdi/alert-circle'
import IconMdiInformationOutline from '~icons/mdi/information-outline'

// 禁用属性继承（因为使用了 Teleport 根节点）
defineOptions({
  inheritAttrs: false,
})

// 声明组件不发出任何事件（Toast 通过 composable 管理状态）
defineEmits([])

// 使用 Toast composable（全局单例）
const { show, type, message, hideToast } = useToast()

// 获取图标组件
function getIconComponent() {
  const iconMap = {
    success: IconMdiCheckCircle,
    error: IconMdiCloseCircle,
    warning: IconMdiAlertCircle,
    info: IconMdiInformationOutline,
  }
  return iconMap[type.value] || IconMdiInformationOutline
}
</script>

<style scoped>
.toast {
  position: fixed;
  top: 20px;
  right: 20px;
  min-width: 300px;
  max-width: 400px;
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  padding: var(--spacing);
  z-index: 2000;
  border-left: 4px solid;
}

.toast-success {
  border-left-color: var(--success-color);
}

.toast-error {
  border-left-color: var(--danger-color);
}

.toast-warning {
  border-left-color: var(--warning-color);
}

.toast-info {
  border-left-color: var(--primary-color);
}

.toast-icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
}

.toast-success .toast-icon {
  color: var(--success-color);
}

.toast-error .toast-icon {
  color: var(--danger-color);
}

.toast-warning .toast-icon {
  color: var(--warning-color);
}

.toast-info .toast-icon {
  color: var(--primary-color);
}

.toast-content {
  flex: 1;
  min-width: 0;
}

.toast-message {
  font-weight: 500;
  color: var(--text-primary);
  font-size: var(--font-size-sm);
  line-height: 1.5;
  word-wrap: break-word;
}

.toast-close {
  flex-shrink: 0;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: var(--text-secondary);
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius);
  transition: all var(--transition-fast);
}

.toast-close:hover {
  background: var(--gray-200);
  color: var(--text-primary);
}

/* 动画效果 */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .toast {
    left: 20px;
    right: 20px;
    min-width: 0;
    max-width: none;
  }

  .toast-enter-from,
  .toast-leave-to {
    transform: translateY(-100%);
  }
}
</style>
