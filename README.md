[English](./README.en.md) | 简体中文

# Warp Pilot

一个现代化、生产就绪的桌面应用程序，基于 **Tauri 2.0**、**Vue 3**、**Pinia** 和 **Rust** 构建。本项目为构建具有原生性能和现代 Web 技术的跨平台桌面应用程序提供了坚实的基础。

## ✨ 特性

- 🚀 **Tauri 2.0** - 构建更小、更快、更安全的桌面应用程序
- ⚡ **Vue 3** - 渐进式 JavaScript 框架，支持组合式 API
- 📦 **Pinia** - 直观的 Vue 状态管理
- 🦀 **Rust 后端** - 高性能、内存安全的后端
- 📁 **文件系统访问** - 通过 Tauri 进行安全的文件操作
- 🎨 **现代化 UI** - 简洁、响应式的界面，支持 CSS 变量和主题系统
- 🔄 **自动导入** - 自动导入 Vue API 和组件
- 🛠️ **Vue DevTools** - 集成调试工具
- 🤖 **CI/CD** - 自动化多平台构建和发布
- 🔧 **开发者友好** - 热重载、ESLint、Prettier 等

## 🚀 快速开始

### 前置要求

- **Node.js** >= 16.0.0
- **Rust** >= 1.70.0 ([安装 Rust](https://www.rust-lang.org/tools/install))
- **系统要求**:
  - macOS: 10.13+
  - Windows: 7+
  - Linux: 支持多种发行版

### 安装

```bash
# 克隆仓库
git clone https://github.com/yourusername/tauri-vue-desktop-template.git
cd tauri-vue-desktop-template

# 安装依赖
npm install
```

### 开发

```bash
# 启动开发服务器，支持热重载和 Vue DevTools
npm run dev          # 启动 Vite 开发服务器（端口 5173）+ Vue DevTools

# 或启动 Tauri 开发模式
npm run tauri:dev    # 启动 Tauri 应用程序，支持热重载
```

### 构建

```bash
# 构建前端
npm run build

# 构建桌面应用程序
npm run tauri:build
```

构建的应用程序将位于 `src-tauri/target/release/bundle/`。

## 📦 技术栈

### 前端
- **Vue 3** - 渐进式 JavaScript 框架
- **Pinia** - 状态管理
- **Vite 7** - 下一代前端构建工具
- **unplugin-auto-import** - 自动导入 API
- **unplugin-vue-components** - 自动导入组件
- **Vue DevTools** - 集成调试工具
- **CSS Variables** - 现代化样式方案

### 后端
- **Rust** - 系统编程语言
- **Tauri 2.0** - 桌面应用程序框架
- **tauri-plugin-fs** - 文件系统操作
- **tauri-plugin-dialog** - 原生对话框
- **serde** - 序列化框架

### 开发工具
- **ESLint** - 代码检查
- **Prettier** - 代码格式化
- **GitHub Actions** - CI/CD 自动化

## 🏗️ 项目结构

```
warp-pilot/
├── .github/
│   └── workflows/               # GitHub Actions CI/CD
│       ├── release.yml          # 多平台发布
│       ├── test-build.yml       # 构建测试
│       └── lint.yml             # 代码质量检查
├── .vscode/                     # VS Code 配置
│   ├── extensions.json          # 推荐扩展
│   └── settings.json            # 编辑器设置
├── src-tauri/                   # Rust 后端
│   ├── src/
│   │   └── main.rs              # 应用程序入口
│   ├── Cargo.toml               # Rust 依赖
│   └── tauri.conf.json          # Tauri 配置
├── src/                         # Vue 前端
│   ├── main.js                  # Vue 入口
│   ├── App.vue                  # 根组件
│   ├── components/              # Vue 组件
│   │   ├── common/              # 可复用组件
│   │   ├── PopupTab.vue
│   │   ├── ExamplesTab.vue
│   │   ├── ToolsTab.vue
│   │   └── ConfigTab.vue
│   ├── stores/                  # Pinia 状态管理
│   │   ├── app.js               # 应用状态
│   │   └── settings.js          # 设置状态
│   ├── composables/             # Vue 组合式函数
│   ├── api/                     # API 层
│   ├── utils/                   # 工具函数
│   ├── config/                  # 配置
│   └── assets/                  # 静态资源
├── auto-imports.d.js            # 自动生成的导入（git 忽略）
├── components.d.js              # 自动生成的组件（git 忽略）
├── package.json                 # Node 依赖
├── vite.config.js               # Vite 配置
├── eslint.config.cjs            # ESLint 配置
├── .prettierrc.json             # Prettier 配置
├── .editorconfig                # 编辑器配置
├── CHANGES.md                   # 更新日志
├── CODE_SIGNING.md              # 代码签名指南
└── README.md                    # 本文件
```

## 🔧 配置

### 自动导入

本项目使用 `unplugin-auto-import` 自动导入 Vue 和 Pinia API。你无需手动导入：

```javascript
// ❌ 不再需要手动导入这些
// import { ref, computed, watch } from 'vue'
// import { defineStore } from 'pinia'

// ✅ 直接使用即可
const count = ref(0)
const doubled = computed(() => count.value * 2)
```

已配置的导入包括：
- Vue API（ref、computed、watch、onMounted 等）
- Pinia API（defineStore、storeToRefs 等）
- 自定义 store（useAppStore、useSettingsStore）

### Tauri 配置

编辑 `src-tauri/tauri.conf.json` 以自定义：
- 应用程序名称和标识符
- 窗口大小和行为
- 构建目标（DMG、MSI、AppImage 等）
- 权限和功能

### 代码签名

有关生产环境代码签名的详细说明，请参阅 [CODE_SIGNING.md](CODE_SIGNING.md)，包括：
- macOS 代码签名和公证
- Windows 代码签名
- 配置 GitHub Secrets

## 📚 API 文档

### Tauri 命令

应用程序包含预构建的 Tauri 命令：

#### 文件操作
```javascript
import { api } from '@api'

// 显示保存对话框
const result = await api.file.showSaveDialog({ defaultPath: 'data.json' })

// 显示打开对话框
const files = await api.file.showOpenDialog({ multiple: true })

// 写入文件
await api.file.writeFile(filePath, content)

// 读取文件
const content = await api.file.readFile(filePath)
```

#### 系统操作
```javascript
// 获取应用程序版本
const version = await api.system.getVersion()

// 获取数据目录
const dataDir = await api.system.getDataDir()

// 获取主目录
const homeDir = await api.system.getHomeDir()
```

### 状态管理

应用程序使用 Pinia 进行状态管理，包含两个主要 store：

#### App Store
```javascript
// 自动导入，无需手动导入
const appStore = useAppStore()

// 访问状态
console.log(appStore.version)
console.log(appStore.dataDir)

// 调用 actions
await appStore.initialize()
```

#### Settings Store
```javascript
// 自动导入，无需手动导入
const settingsStore = useSettingsStore()

// 访问状态
console.log(settingsStore.theme)
console.log(settingsStore.language)

// 调用 actions
settingsStore.setTheme('dark')
settingsStore.saveSettings()
```

## 🛠️ 开发指南

### 添加新的 Tauri 命令

1. 在 `src-tauri/src/main.rs` 中创建命令：
```rust
#[tauri::command]
fn your_command(param: String) -> Result<String, String> {
    // 你的逻辑
    Ok("Success".to_string())
}
```

2. 在 invoke handler 中注册：
```rust
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            your_command,
            // ... 其他命令
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```

3. 从前端调用：
```javascript
import { invoke } from '@tauri-apps/api/core'

const result = await invoke('your_command', { param: 'value' })
```

### 创建新组件

组件会自动导入，无需注册：

```vue
<!-- src/components/MyComponent.vue -->
<template>
  <div>{{ message }}</div>
</template>

<script setup>
// ref 会自动导入
const message = ref('Hello World')
</script>
```

在其他组件中直接使用：
```vue
<template>
  <MyComponent />  <!-- 无需导入！ -->
</template>
```

### 自定义样式

- 全局样式：`src/assets/styles/global.css`
- 深色主题：`src/assets/styles/dark.css`
- CSS 变量在两个文件中定义，用于主题切换

### CI/CD 工作流

项目包含三个 GitHub Actions 工作流：

1. **release.yml** - 在版本标签（v*.*.*）上触发，为所有平台构建并发布版本
2. **test-build.yml** - 在推送到 main 分支时运行，测试构建过程
3. **lint.yml** - 在代码更改时运行 ESLint 和 Prettier 检查

创建发布版本：
```bash
npm run bump  # 更新版本
git push && git push --tags
```

## 🤝 贡献

欢迎贡献！请随时提交 Pull Request。

1. Fork 本仓库
2. 创建你的特性分支（`git checkout -b feature/AmazingFeature`）
3. 提交你的更改（`git commit -m 'Add some AmazingFeature'`）
4. 推送到分支（`git push origin feature/AmazingFeature`）
5. 打开一个 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件。

## 🙏 致谢

- [Tauri](https://tauri.app/) - 出色的桌面应用框架
- [Vue.js](https://vuejs.org/) - 渐进式框架
- [Rust](https://www.rust-lang.org/) - 强大的系统编程语言
- [tauri-vue-template](https://github.com/Uninen/tauri-vue-template) - 灵感和最佳实践

## 📞 支持

- 📖 [更新日志](CHANGES.md)
- 🔐 [代码签名指南](CODE_SIGNING.md)
- 🐛 [问题追踪](https://github.com/yourusername/warp-pilot/issues)

---

**祝编码愉快！🚀**

