<template>
  <Teleport to="body">
    <Transition name="toast">
      <div v-if="show" :class="['toast', `toast-${type}`]" role="alert" aria-live="polite">
        <div class="toast-icon">
          <span>{{ getIcon() }}</span>
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

// 使用 Toast composable（全局单例）
const { show, type, message, hideToast } = useToast()

// 获取图标
function getIcon() {
  const iconMap = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ',
  }
  return iconMap[type.value] || 'ℹ'
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

/* 图标字体回退 */
.toast-icon i::before {
  content: '';
}

.toast-success .toast-icon i::before {
  content: '✓';
}

.toast-error .toast-icon i::before {
  content: '✕';
}

.toast-warning .toast-icon i::before {
  content: '⚠';
}

.toast-info .toast-icon i::before {
  content: 'ℹ';
}
</style>
