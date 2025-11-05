<template>
  <div class="welcome-container">
    <div class="welcome-content">
      <div class="welcome-header">
        <h1><icon-mdi-rocket-launch /> Welcome to Tauri Vue Template</h1>
        <p class="subtitle">A modern desktop application template built with Tauri 2.0, Vue 3, and Rust</p>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon"><icon-mdi-lightning-bolt /></div>
          <h3>Fast & Lightweight</h3>
          <p>Built with Tauri 2.0 for native performance and small bundle size</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon"><icon-mdi-palette /></div>
          <h3>Modern UI</h3>
          <p>Vue 3 with Composition API and reactive state management</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon"><icon-mdi-database /></div>
          <h3>Local Database</h3>
          <p>SQLite integration for persistent data storage</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon"><icon-mdi-tools /></div>
          <h3>Developer Friendly</h3>
          <p>Hot reload, TypeScript support, and comprehensive documentation</p>
        </div>
      </div>

      <div class="quick-start">
        <h2>Quick Start</h2>
        <div class="code-block">
          <pre><code># Install dependencies
npm install

# Start development
npm run tauri:dev

# Build for production
npm run tauri:build</code></pre>
        </div>
      </div>

      <div class="links-section">
        <h2>Resources</h2>
        <div class="links-grid">
          <a href="https://tauri.app/" target="_blank" class="link-card">
            <span class="link-icon">📚</span>
            <span class="link-text">Tauri Documentation</span>
          </a>
          <a href="https://vuejs.org/" target="_blank" class="link-card">
            <span class="link-icon">📖</span>
            <span class="link-text">Vue.js Guide</span>
          </a>
          <a href="https://www.rust-lang.org/" target="_blank" class="link-card">
            <span class="link-icon">🦀</span>
            <span class="link-text">Rust Documentation</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

console.log('🎉 Welcome page loaded')
</script>

<style scoped>
.welcome-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 40px;
}

.welcome-content {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  padding: 60px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.welcome-header {
  text-align: center;
  margin-bottom: 60px;
}

.welcome-header h1 {
  font-size: 48px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 16px;
}

.subtitle {
  font-size: 20px;
  color: #7f8c8d;
  line-height: 1.6;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.feature-card {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.feature-card h3 {
  font-size: 20px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 12px;
}

.feature-card p {
  font-size: 14px;
  color: #7f8c8d;
  line-height: 1.6;
}

.quick-start {
  margin-bottom: 60px;
}

.quick-start h2 {
  font-size: 32px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 24px;
  text-align: center;
}

.code-block {
  background: #2c3e50;
  border-radius: 12px;
  padding: 24px;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
  color: #ecf0f1;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
  line-height: 1.8;
}

.code-block code {
  color: #ecf0f1;
}

.links-section h2 {
  font-size: 32px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 24px;
  text-align: center;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.link-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
  text-decoration: none;
  color: #2c3e50;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.link-card:hover {
  background: #667eea;
  color: white;
  border-color: #667eea;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}

.link-icon {
  font-size: 24px;
}

.link-text {
  font-size: 16px;
  font-weight: 500;
}

/* 滚动条样式 */
.welcome-container::-webkit-scrollbar {
  width: 8px;
}

.welcome-container::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.welcome-container::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}

.welcome-container::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.5);
}
</style>
