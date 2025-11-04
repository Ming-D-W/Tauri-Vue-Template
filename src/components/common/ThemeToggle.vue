<template>
  <div class="theme-toggle-wrapper">
    <button
      class="theme-toggle-button"
      :title="getTooltip()"
      :aria-label="`切换主题，当前：${themeName}`"
      @click="handleToggle"
    >
      <span class="theme-icon">{{ themeIcon }}</span>
      <span v-if="showLabel" class="theme-label">{{ themeName }}</span>
    </button>
  </div>
</template>

<script setup>
import { useTheme } from '@composables/useTheme'

// Props
const props = defineProps({
  showLabel: {
    type: Boolean,
    default: false,
  },
})

// 使用主题 composable
const { theme, themeIcon, themeName, toggleTheme } = useTheme()

// 切换主题
function handleToggle() {
  toggleTheme()
}

// 获取提示文本
function getTooltip() {
  const tooltipMap = {
    light: '切换到暗色模式',
    dark: '切换到自动模式',
    auto: '切换到亮色模式',
  }
  return tooltipMap[theme.value] || '切换主题'
}
</script>

<style scoped>
.theme-toggle-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.theme-toggle-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);
  padding: 0;
  background: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: var(--font-size-base);
  color: var(--text-secondary);
  width: 32px;
  height: 32px;
  position: relative;
}

.theme-toggle-button:hover {
  background: var(--bg-secondary);
  color: var(--primary-hover);
  transform: scale(1.05);
}

.theme-toggle-button:active {
  transform: scale(0.95);
}

.theme-toggle-button:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

/* Tooltip 效果 */
.theme-toggle-button::before {
  content: attr(title);
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

.theme-toggle-button:hover::before {
  opacity: 1;
  visibility: visible;
  transform: translateY(-50%) translateX(-4px);
}

.theme-icon {
  font-size: 18px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.theme-toggle-button:hover .theme-icon {
  transform: scale(1.2);
}

.theme-label {
  font-size: var(--font-size-sm);
  font-weight: 500;
  white-space: nowrap;
  display: none; /* 在垂直导航栏中隐藏标签 */
}

/* 动画效果 */
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.theme-toggle-button:active .theme-icon {
  animation: rotate 0.3s ease-in-out;
}
</style>
