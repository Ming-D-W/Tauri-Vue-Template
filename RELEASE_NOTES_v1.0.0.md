# 🎉 What's New in v1.0.0

## 📝 Changes

- feat: change to augment-token-mng strategy - all releases are drafts (64fa475)
- fix: simplify changelog generation to match augment-token-mng format (abdb736)
- fix: use heredoc format for draft release body to handle special characters (c975338)
- fix: use Base64 encoding for changelog to handle all special characters (84112a3)
- fix: configure bundle targets to only generate dmg and nsis installers (e1d92b6)
- fix: improve changelog generation to handle special characters in commit messages (99abec5)
- feat: optimize GitHub Actions workflow (ebe3e16)
- chore: disable code signing for now (2ed40c6)
- refactor: CI/CD (53ef5d8)
- docs: 更新 README 文档并移除 VS Code 配置 (8993876)
- docs: 添加应用截图预览到 README (f5f412a)
- feat: 配置独立 Vue DevTools 支持 (f492891)
- style: 优化全局样式和组件类型定义 (23f49ac)
- feat: 新增 HomeView 首页，移除 PopupView (97262e2)
- feat: 重构 Toast 组件支持多通知队列 (df96293)
- feat: 迁移图标库从 MDI 到 ProIcons (b681ff5)
- refactor: 移除不必要的功能占位符和系统命令功能 (5892853)
- refactor: 移除暗色主题功能并简化 Titlebar 组件 (6c49e88)
- feat: 实施 unplugin-icons 图标方案并添加自定义图标支持 (ed8628b)
- refactor: 项目结构优化 - MVC 分层架构 (7d5b7d1)

## 📦 Installation

Download the appropriate file for your platform:
- **Windows**: `.exe` installer (NSIS)
- **macOS (Apple Silicon)**: `.dmg` for M1/M2/M3 Macs
- **macOS (Intel)**: `.dmg` for Intel Macs

## ✨ Highlights

### 🏗️ Architecture
- MVC 分层架构设计
- 优化的项目结构
- 独立 Vue DevTools 支持

### 🎨 UI/UX
- 全新的 HomeView 首页
- 重构的 Toast 通知组件（支持多通知队列）
- 迁移到 ProIcons 图标库
- unplugin-icons 图标方案

### 🔧 Build & CI/CD
- 优化的 GitHub Actions 工作流
- 自动化构建和发布流程
- 只生成必要的安装包（DMG + NSIS）
- 所有 Release 均为 Draft（需手动发布）

### 📚 Documentation
- 更新的 README 文档
- 应用截图预览

## 🔗 Links

- [Repository](https://github.com/Ming-D-W/Tauri-Vue-Template)
- [Documentation](https://github.com/Ming-D-W/Tauri-Vue-Template#readme)

---

**Note**: This is the first official release of Tauri Vue Template. All releases are created as drafts and require manual publishing for safety.

