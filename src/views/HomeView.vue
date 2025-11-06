<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <!-- Tech Badges -->
        <div class="tech-badges">
          <div class="badge badge-vue">
            <span class="badge-dot"></span>
            <span class="badge-text">Vue 3</span>
          </div>
          <div class="badge badge-tauri">
            <span class="badge-dot"></span>
            <span class="badge-text">Tauri 2.0</span>
          </div>
          <div class="badge badge-rust">
            <span class="badge-dot"></span>
            <span class="badge-text">Rust</span>
          </div>
        </div>

        <!-- Main Heading -->
        <h1 class="hero-title">
          现代桌面应用
          <br />
          <span class="hero-title-gradient">完整解决方案</span>
        </h1>

        <!-- Subtitle -->
        <p class="hero-subtitle">
          使用 Tauri 2.0、Vue 3 Composition API 和 Rust 构建跨平台桌面应用。轻量、快速、现代。
        </p>

        <!-- CTA Buttons -->
        <div class="hero-buttons">
          <button class="btn btn-primary">快速开始</button>
          <button class="btn btn-secondary">了解特性</button>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="section-header">
        <h2 class="section-title">为什么选择 Tauri Vue</h2>
        <p class="section-subtitle">完整的桌面应用开发体验</p>
      </div>

      <div class="features-grid">
        <!-- Feature 1 - Native Performance -->
        <div class="card-base feature-card feature-card-tauri">
          <div class="card-bg-circle feature-bg-circle"></div>
          <div class="card-content feature-content">
            <div class="feature-icon feature-icon-tauri">
              <icon-proicons-bolt />
            </div>
            <h3 class="feature-title">原生性能</h3>
            <p class="feature-description">
              基于 Tauri 2.0 构建。极小的应用包体积（小于10MB）、原生系统性能和零运行时开销。
            </p>
          </div>
        </div>

        <!-- Feature 2 - Vue 3 -->
        <div class="card-base feature-card feature-card-vue">
          <div class="card-bg-circle feature-bg-circle"></div>
          <div class="card-content feature-content">
            <div class="feature-icon feature-icon-vue">
              <icon-proicons-color-palette />
            </div>
            <h3 class="feature-title">Vue 3 Composition API</h3>
            <p class="feature-description">
              使用现代的 Vue 3 Composition API 构建响应式、可组合的用户界面。热重载开发体验。
            </p>
          </div>
        </div>

        <!-- Feature 3 - Rust Backend -->
        <div class="card-base feature-card feature-card-rust">
          <div class="card-bg-circle feature-bg-circle"></div>
          <div class="card-content feature-content">
            <div class="feature-icon feature-icon-rust">
              <icon-proicons-wrench />
            </div>
            <h3 class="feature-title">Rust 后端</h3>
            <p class="feature-description">
              用 Rust 编写高性能后端逻辑。内存安全、无垃圾回收、编译时安全保证。
            </p>
          </div>
        </div>

        <!-- Feature 4 - Developer Experience -->
        <div class="card-base feature-card feature-card-dev">
          <div class="card-bg-circle feature-bg-circle"></div>
          <div class="card-content feature-content">
            <div class="feature-icon feature-icon-dev">
              <icon-proicons-sparkle />
            </div>
            <h3 class="feature-title">开发友好</h3>
            <p class="feature-description">
              热重载、完整的 TypeScript 支持、ESLint 集成和详细文档。开箱即用的开发工具链。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Start Section -->
    <section class="quick-start-section">
      <div class="section-header">
        <h2 class="section-title">快速开始</h2>
        <p class="section-subtitle">只需三个命令启动开发</p>
      </div>

      <div class="steps-container">
        <!-- Step 1 -->
        <div class="step-item">
          <div class="step-number-wrapper">
            <div class="step-number">1</div>
            <div class="step-line"></div>
          </div>
          <div class="step-content">
            <h3 class="step-title">安装依赖</h3>
            <div class="code-block">
              <code>npm install</code>
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="step-item">
          <div class="step-number-wrapper">
            <div class="step-number">2</div>
            <div class="step-line"></div>
          </div>
          <div class="step-content">
            <h3 class="step-title">启动开发服务</h3>
            <div class="code-block">
              <code>npm run tauri:dev</code>
            </div>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="step-item">
          <div class="step-number-wrapper">
            <div class="step-number">3</div>
          </div>
          <div class="step-content">
            <h3 class="step-title">构建生产版本</h3>
            <div class="code-block">
              <code>npm run tauri:build</code>
            </div>
          </div>
        </div>
      </div>

      <div class="tip-box">
        <icon-proicons-info class="tip-icon" />
        <p class="tip-text">
          <strong>提示：</strong> 在项目根目录运行上述命令。详细配置说明请参考官方文档。
        </p>
      </div>
    </section>

    <!-- Resources Section -->
    <section class="resources-section">
      <div class="section-header">
        <h2 class="section-title">官方资源</h2>
        <p class="section-subtitle">深入学习和掌握相关技术文档</p>
      </div>

      <div class="resources-grid">
        <!-- Tauri Resource -->
        <a
          href="https://tauri.app/"
          target="_blank"
          rel="noopener noreferrer"
          class="card-base resource-card resource-card-tauri"
        >
          <div class="card-bg-circle resource-bg-circle"></div>
          <div class="card-content resource-content">
            <icon-material-icon-theme-tauri class="resource-icon" />
            <h3 class="resource-title">Tauri 文档</h3>
            <p class="resource-description">了解 Tauri 框架的完整 API、架构设计和最佳实践。</p>
            <div class="resource-link">
              查看文档
              <span class="resource-arrow">→</span>
            </div>
          </div>
        </a>

        <!-- Vue Resource -->
        <a
          href="https://vuejs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="card-base resource-card resource-card-vue"
        >
          <div class="card-bg-circle resource-bg-circle"></div>
          <div class="card-content resource-content">
            <icon-material-icon-theme-vue class="resource-icon" />
            <h3 class="resource-title">Vue.js 官方</h3>
            <p class="resource-description">掌握 Vue 3 Composition API、响应式系统和组件最佳实践。</p>
            <div class="resource-link">
              查看指南
              <span class="resource-arrow">→</span>
            </div>
          </div>
        </a>

        <!-- Rust Resource -->
        <a
          href="https://www.rust-lang.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="card-base resource-card resource-card-rust"
        >
          <div class="card-bg-circle resource-bg-circle"></div>
          <div class="card-content resource-content">
            <icon-material-icon-theme-rust class="resource-icon" />
            <h3 class="resource-title">Rust 官网</h3>
            <p class="resource-description">深入学习 Rust 编程语言、所有权系统和生态工具。</p>
            <div class="resource-link">
              开始学习
              <span class="resource-arrow">→</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
// HomeView - 欢迎页面
</script>

<style scoped>
/* ===== 容器样式 ===== */
.home-view {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: var(--bg-primary);
}

/* ===== Hero Section ===== */
.hero-section {
  width: 100%;
  padding: 30px 24px;
  border-bottom: 1px solid var(--border-light);
  background: var(--bg-primary);
}

.hero-content {
  max-width: 1024px;
  margin: 0 auto;
  text-align: center;
}

/* Tech Badges */
.tech-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-bottom: 24px;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border: 1px solid;
  border-radius: 9999px;
}

.badge-vue {
  border-color: var(--vue-color-border);
  background: var(--vue-color-bg);
}

.badge-tauri {
  border-color: var(--tauri-color-border);
  background: var(--tauri-color-bg);
}

.badge-rust {
  border-color: var(--rust-color-border);
  background: var(--rust-color-bg);
}

.badge-dot {
  width: var(--badge-dot-size);
  height: var(--badge-dot-size);
  border-radius: 50%;
}

.badge-vue .badge-dot {
  background: var(--vue-color);
}

.badge-tauri .badge-dot {
  background: var(--tauri-color);
}

.badge-rust .badge-dot {
  background: var(--rust-color);
}

.badge-text {
  font-size: 12px;
  font-weight: 600;
}

.badge-vue .badge-text {
  color: var(--vue-color-dark);
}

.badge-tauri .badge-text {
  color: var(--tauri-color-dark);
}

.badge-rust .badge-text {
  color: var(--rust-color-dark);
}

/* Hero Title */
.hero-title {
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

.hero-title-gradient {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background: var(--gradient-primary);
  background-clip: text;
}

/* Hero Subtitle */
.hero-subtitle {
  max-width: 768px;
  margin: 0 auto 32px;
  font-size: 16px;
  line-height: 1.75;
  color: var(--text-secondary);
}

/* Hero Buttons */
.hero-buttons {
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
}

.btn {
  padding: 14px 32px;
  border: none;
  border-radius: var(--radius-lg);
  font-size: var(--font-size);
  font-weight: 600;
  cursor: pointer;
  outline: none;
  transition: all var(--transition-normal);
}

.btn-primary {
  background: var(--gradient-primary);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-primary);
}

.btn-secondary {
  border: 2px solid var(--border-dark);
  background: transparent;
  color: var(--text-primary);
}

.btn-secondary:hover {
  border-color: var(--primary-color);
  background: var(--bg-hover);
}

/* ===== Features Section ===== */
.features-section {
  width: 100%;
  padding: 30px 24px;
  background: var(--gradient-bg-light);
}

/* Section Header */
.section-header {
  max-width: 1200px;
  margin: 0 auto 20px;
}

.section-title {
  margin-bottom: 12px;
  font-size: 32px;
  font-weight: 700;
  color: var(--text-primary);
}

.section-subtitle {
  font-size: 16px;
  color: var(--text-secondary);
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  /* 继承 card-base 样式 */
}

.feature-bg-circle {
  right: var(--circle-offset-sm);
  top: var(--circle-offset-sm);
  width: var(--circle-size-sm);
  height: var(--circle-size-sm);
}

.feature-card-tauri:hover {
  border-color: var(--tauri-color-border-hover);
}

.feature-card-tauri .feature-bg-circle {
  background: var(--tauri-color-bg);
}

.feature-card-vue:hover {
  border-color: var(--vue-color-border-hover);
}

.feature-card-vue .feature-bg-circle {
  background: var(--vue-color-bg);
}

.feature-card-rust:hover {
  border-color: var(--rust-color-border-hover);
}

.feature-card-rust .feature-bg-circle {
  background: var(--rust-color-bg);
}

.feature-card-dev:hover {
  border-color: var(--primary-color);
}

.feature-card-dev .feature-bg-circle {
  background: var(--primary-light);
}

.feature-content {
  /* 继承 card-content 样式 */
}

.feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--icon-size-md);
  height: var(--icon-size-md);
  margin-bottom: 12px;
  border-radius: var(--radius-lg);
  font-size: 24px;
}

.feature-icon-tauri {
  background: var(--tauri-color-icon-bg);
  color: var(--tauri-color-dark);
}

.feature-icon-vue {
  background: var(--vue-color-icon-bg);
  color: var(--vue-color-dark);
}

.feature-icon-rust {
  background: var(--rust-color-icon-bg);
  color: var(--rust-color-dark);
}

.feature-icon-dev {
  background: var(--primary-light);
  color: var(--primary-dark);
}

.feature-title {
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
}

.feature-description {
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-secondary);
}

/* ===== Quick Start Section ===== */
.quick-start-section {
  width: 100%;
  padding: 30px 24px;
  border-top: 1px solid var(--border-light);
  background: var(--bg-primary);
}

.steps-container {
  max-width: 1024px;
  margin: 0 auto 32px;
}

.step-item {
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
}

.step-item:last-child {
  margin-bottom: 0;
}

.step-number-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--step-number-size);
  height: var(--step-number-size);
  border-radius: 50%;
  background: var(--primary-color);
  font-size: 14px;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
}

.step-line {
  width: var(--step-line-width);
  height: var(--step-line-height);
  margin-top: 8px;
  background: var(--gradient-step-line);
}

.step-item:last-child .step-line {
  display: none;
}

.step-content {
  flex: 1;
  padding-bottom: 24px;
}

.step-title {
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
}

.code-block {
  padding: 16px;
  border-radius: var(--radius-lg);
  background: var(--bg-dark);
  overflow-x: auto;
}

.code-block code {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--primary-hover);
}

.tip-box {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px 20px;
  border: 1px solid var(--primary-color);
  border-radius: var(--radius-lg);
  background: var(--primary-light);
}

.tip-icon {
  flex-shrink: 0;
  margin-top: 2px;
  font-size: 20px;
  color: var(--primary-dark);
}

.tip-text {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: var(--primary-dark);
}

.tip-text strong {
  font-weight: 600;
}

/* ===== Resources Section ===== */
.resources-section {
  width: 100%;
  padding: 30px 24px;
  background: var(--gradient-bg-reverse);
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.resource-card {
  text-decoration: none;
}

.resource-bg-circle {
  right: var(--circle-offset-lg);
  top: var(--circle-offset-lg);
  width: var(--circle-size-lg);
  height: var(--circle-size-lg);
}

.resource-card-tauri:hover {
  border-color: var(--tauri-color-border-strong);
}

.resource-card-tauri .resource-bg-circle {
  background: var(--tauri-color-bg);
}

.resource-card-vue:hover {
  border-color: var(--vue-color-border-strong);
}

.resource-card-vue .resource-bg-circle {
  background: var(--vue-color-bg);
}

.resource-card-rust:hover {
  border-color: var(--rust-color-border-strong);
}

.resource-card-rust .resource-bg-circle {
  background: var(--rust-color-bg);
}

.resource-content {
  /* 继承 card-content 样式 */
}

.resource-icon {
  display: block;
  margin-bottom: 12px;
  font-size: var(--icon-size-lg);
}

.resource-title {
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  transition: color var(--transition-normal);
}

.resource-card-tauri:hover .resource-title {
  color: var(--tauri-color-dark);
}

.resource-card-vue:hover .resource-title {
  color: var(--vue-color-dark);
}

.resource-card-rust:hover .resource-title {
  color: var(--rust-color-dark);
}

.resource-description {
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-secondary);
}

.resource-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  transition: gap var(--transition-normal);
}

.resource-card-tauri .resource-link {
  color: var(--tauri-color-dark);
}

.resource-card-vue .resource-link {
  color: var(--vue-color-dark);
}

.resource-card-rust .resource-link {
  color: var(--rust-color-dark);
}

.resource-card:hover .resource-link {
  gap: 12px;
}

.resource-arrow {
  transition: transform var(--transition-normal);
}

/* ===== 滚动条样式 ===== */
/* 使用全局滚动条样式 (定义在 global.css) */
</style>

