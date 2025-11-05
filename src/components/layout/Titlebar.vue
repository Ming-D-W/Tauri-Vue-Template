<template>
  <div class="custom-titlebar app-title" data-tauri-drag-region>
    {{ currentPageTitle }}
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// 当前页面标题
const currentPageTitle = computed(() => {
  return route.meta.title || 'Tauri Vue Template'
})
</script>

<style scoped>
/* 自定义标题栏样式 */
.custom-titlebar {
  display: flex;
  align-items: center;
  height: 32px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 80px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-light);
}
</style>
