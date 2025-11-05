<template>
  <footer class="main-footer">
    <div class="footer-content">
      <div class="footer-left">
        <span class="app-name">Tauri Vue Template</span>
        <span class="version">v1.0.0</span>
      </div>
      <div class="footer-right">
        <span class="framework-info">Vue 3</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
// MainFooter 组件
</script>

<style scoped>
.main-footer {
  background: var(--bg-secondary);
  padding: var(--spacing-sm) var(--spacing-md);
  flex-shrink: 0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-size-xs);
  color: var(--text-muted);
}

.footer-left {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.app-name {
  font-weight: 500;
  color: var(--text-secondary);
}

.version {
  background: var(--primary-light);
  color: var(--primary-dark);
  padding: 0 var(--spacing-xs);
  border-radius: var(--radius);
  font-size: var(--font-size-xs);
}

.footer-right {
  display: flex;
  align-items: center;
}

.framework-info {
  color: var(--text-muted);
  font-style: italic;
}
</style>
