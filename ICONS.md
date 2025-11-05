# 图标使用指南

本项目使用 `unplugin-icons` 作为图标解决方案，提供了 200,000+ 个高质量图标。

## 快速开始

### 1. 基本使用

图标会自动导入，无需手动 import：

```vue
<template>
  <!-- 直接使用图标组件 -->
  <icon-mdi-home />
  <icon-carbon-settings />
  <icon-heroicons-bell-solid />
</template>
```

### 2. 图标命名规则

图标组件名称格式：`icon-{collection}-{icon-name}`

- `icon-` - 固定前缀
- `{collection}` - 图标集名称（如 mdi, carbon, heroicons）
- `{icon-name}` - 图标名称（使用 kebab-case）

### 3. 自定义样式

```vue
<template>
  <!-- 使用 style 属性 -->
  <icon-mdi-home style="color: blue; font-size: 24px;" />
  
  <!-- 使用 class -->
  <icon-mdi-home class="custom-icon" />
</template>

<style scoped>
.custom-icon {
  color: var(--primary-color);
  width: 32px;
  height: 32px;
}
</style>
```

### 4. 动态图标

```vue
<template>
  <component :is="iconComponent" />
</template>

<script setup>
import IconMdiHome from '~icons/mdi/home'
import IconMdiSettings from '~icons/mdi/cog'

const iconComponent = ref(IconMdiHome)
</script>
```

## 常用图标集

### Material Design Icons (mdi)
最全面的图标集，包含 7,000+ 图标

```vue
<icon-mdi-home />
<icon-mdi-account />
<icon-mdi-settings />
<icon-mdi-menu />
```

### Carbon Icons (carbon)
IBM 设计系统，简洁现代

```vue
<icon-carbon-home />
<icon-carbon-user />
<icon-carbon-settings />
```

### Heroicons (heroicons)
Tailwind CSS 官方图标

```vue
<icon-heroicons-home />
<icon-heroicons-user-solid />
```

## 项目中常用图标

### 导航图标
```vue
<!-- 组件示例 -->
<icon-mdi-palette />

<!-- 系统工具 -->
<icon-mdi-tools />

<!-- 应用设置 -->
<icon-mdi-cog />

<!-- 弹窗示例 -->
<icon-mdi-message-text />
```

### 功能图标
```vue
<!-- 主题切换 -->
<icon-mdi-white-balance-sunny />  <!-- 亮色 -->
<icon-mdi-moon-waning-crescent /> <!-- 暗色 -->
<icon-mdi-theme-light-dark />     <!-- 自动 -->

<!-- Toast 通知 -->
<icon-mdi-check-circle />         <!-- 成功 -->
<icon-mdi-close-circle />         <!-- 错误 -->
<icon-mdi-alert-circle />         <!-- 警告 -->
<icon-mdi-information-outline />  <!-- 信息 -->
```

### 操作图标
```vue
<!-- 文件操作 -->
<icon-mdi-folder />
<icon-mdi-file />
<icon-mdi-download />
<icon-mdi-upload />

<!-- 编辑操作 -->
<icon-mdi-pencil />
<icon-mdi-delete />
<icon-mdi-content-save />
<icon-mdi-refresh />

<!-- 状态图标 -->
<icon-mdi-loading class="spinning" />
<icon-mdi-check />
<icon-mdi-close />
```

### 系统图标
```vue
<!-- 系统信息 -->
<icon-mdi-monitor />
<icon-mdi-database />
<icon-mdi-information />
<icon-mdi-api />

<!-- 其他 -->
<icon-mdi-rocket-launch />
<icon-mdi-lightning-bolt />
<icon-mdi-package-variant />
```

## 图标搜索

### 在线搜索工具

1. **Iconify 官方搜索**
   - 网址：https://icon-sets.iconify.design/
   - 支持搜索所有图标集
   - 提供预览和代码示例

2. **Icônes**
   - 网址：https://icones.js.org/
   - 更现代的搜索界面
   - 支持复制组件名称

### 搜索技巧

1. 使用英文关键词搜索
2. 尝试不同的同义词
3. 浏览相关图标集
4. 查看图标的变体（outline, solid, filled）

## 最佳实践

### 1. 保持一致性

在同一个项目中，尽量使用同一个图标集：

```vue
<!-- ✅ 推荐：统一使用 mdi -->
<icon-mdi-home />
<icon-mdi-settings />
<icon-mdi-user />

<!-- ❌ 不推荐：混用多个图标集 -->
<icon-mdi-home />
<icon-carbon-settings />
<icon-heroicons-user />
```

### 2. 语义化命名

使用有意义的变量名：

```vue
<script setup>
import IconSuccess from '~icons/mdi/check-circle'
import IconError from '~icons/mdi/close-circle'
import IconWarning from '~icons/mdi/alert-circle'
</script>
```

### 3. 性能优化

图标会自动按需加载，只有使用的图标才会被打包：

```vue
<!-- 只会打包 home 和 settings 图标 -->
<icon-mdi-home />
<icon-mdi-settings />
```

### 4. 可访问性

为图标添加适当的 aria 标签：

```vue
<button aria-label="关闭">
  <icon-mdi-close />
</button>
```

## 动画效果

### 旋转动画

```vue
<template>
  <icon-mdi-loading class="spinning" />
</template>

<style scoped>
.spinning {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
```

### 悬停效果

```vue
<template>
  <icon-mdi-heart class="heart-icon" />
</template>

<style scoped>
.heart-icon {
  transition: all 0.3s ease;
}

.heart-icon:hover {
  color: red;
  transform: scale(1.2);
}
</style>
```

## 故障排除

### 图标不显示

1. 检查图标名称是否正确
2. 确认 Vite 配置正确
3. 重启开发服务器

### 图标太大/太小

```vue
<!-- 方法 1：使用 style -->
<icon-mdi-home style="font-size: 24px;" />

<!-- 方法 2：使用 class -->
<icon-mdi-home class="icon-lg" />

<style>
.icon-lg {
  width: 24px;
  height: 24px;
}
</style>
```

### 图标颜色不对

```vue
<!-- SVG 图标使用 currentColor -->
<icon-mdi-home style="color: blue;" />

<!-- 或使用 CSS 变量 -->
<icon-mdi-home style="color: var(--primary-color);" />
```

## 自定义图标

### 添加自定义 SVG 图标

本项目支持使用自定义 SVG 图标，只需将 SVG 文件放入 `src/assets/icons` 目录即可。

#### 1. 创建 SVG 图标

将你的 SVG 图标文件放入 `src/assets/icons/` 目录：

```
src/assets/icons/
├── logo.svg          # 项目 Logo
├── tauri.svg         # Tauri 图标
├── vue.svg           # Vue 图标
└── my-icon.svg       # 你的自定义图标
```

#### 2. 使用自定义图标

```vue
<template>
  <!-- 使用格式：icon-custom-{文件名} -->
  <icon-custom-logo />
  <icon-custom-tauri />
  <icon-custom-vue />
  <icon-custom-my-icon />
</template>
```

#### 3. SVG 图标要求

**推荐的 SVG 格式**：

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor">
  <!-- 你的图标路径 -->
  <path d="M50 10 L90 90 L10 90 Z"/>
</svg>
```

**关键要点**：
- ✅ 使用 `fill="currentColor"` 以支持颜色控制
- ✅ 设置合适的 `viewBox` 确保缩放正常
- ✅ 移除固定的 `width` 和 `height` 属性
- ✅ 简化路径，移除不必要的元素
- ❌ 避免使用内联样式（会覆盖 currentColor）

#### 4. 颜色控制

自定义图标会自动继承文本颜色：

```vue
<template>
  <!-- 使用 style -->
  <icon-custom-logo style="color: #42b883;" />

  <!-- 使用 class -->
  <icon-custom-logo class="brand-color" />
</template>

<style scoped>
.brand-color {
  color: var(--primary-color);
}
</style>
```

#### 5. 大小调整

```vue
<template>
  <!-- 方法 1：font-size -->
  <icon-custom-logo style="font-size: 48px;" />

  <!-- 方法 2：width/height -->
  <icon-custom-logo style="width: 48px; height: 48px;" />
</template>
```

### SVG 图标制作指南

#### 在线工具

1. **SVG 编辑器**
   - [Figma](https://www.figma.com/) - 专业设计工具
   - [Inkscape](https://inkscape.org/) - 免费开源
   - [SVG Editor](https://svg-edit.github.io/svgedit/) - 在线编辑器

2. **SVG 优化工具**
   - [SVGOMG](https://jakearchibald.github.io/svgomg/) - 在线优化
   - [SVGO](https://github.com/svg/svgo) - 命令行工具

#### 优化 SVG

使用 SVGOMG 优化你的 SVG：

1. 访问 https://jakearchibald.github.io/svgomg/
2. 上传你的 SVG 文件
3. 调整优化选项：
   - ✅ Remove viewBox: **关闭**
   - ✅ Remove dimensions: **开启**
   - ✅ Prettify markup: **开启**
4. 下载优化后的 SVG

#### 从图标库导出

**从 Iconify 导出自定义图标**：

1. 访问 https://icon-sets.iconify.design/
2. 搜索并选择图标
3. 点击 "SVG" 按钮
4. 复制 SVG 代码
5. 保存为 `.svg` 文件到 `src/assets/icons/`

### 项目自定义图标

本项目已包含以下自定义图标：

```vue
<!-- 项目 Logo -->
<icon-custom-logo />

<!-- Tauri 品牌图标 -->
<icon-custom-tauri />

<!-- Vue 品牌图标 -->
<icon-custom-vue />
```

### 自定义图标示例

```vue
<template>
  <div class="custom-icons-demo">
    <!-- 基本使用 -->
    <icon-custom-logo />

    <!-- 自定义颜色 -->
    <icon-custom-tauri style="color: #FFC131;" />

    <!-- 自定义大小 -->
    <icon-custom-vue style="font-size: 64px; color: #42b883;" />

    <!-- 动态图标 -->
    <component :is="currentIcon" />
  </div>
</template>

<script setup>
import IconCustomLogo from '~icons/custom/logo'
import IconCustomTauri from '~icons/custom/tauri'
import IconCustomVue from '~icons/custom/vue'

const currentIcon = ref(IconCustomLogo)
</script>
```

## 参考资源

- [unplugin-icons 文档](https://github.com/unplugin/unplugin-icons)
- [Iconify 图标搜索](https://icon-sets.iconify.design/)
- [Icônes 搜索工具](https://icones.js.org/)
- [Material Design Icons](https://pictogrammers.com/library/mdi/)
- [SVGOMG - SVG 优化工具](https://jakearchibald.github.io/svgomg/)
- [SVG 在线编辑器](https://svg-edit.github.io/svgedit/)

