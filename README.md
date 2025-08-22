# React Message Board

一个基于 **React + Redux Toolkit + React Router** 开发的留言板应用。  
支持 **发布留言 / 查看列表 / 搜索 / 详情页 / 编辑 / 删除**，并通过 `localStorage` 持久化数据（刷新不丢失）。  
项目已部署在 **GitHub Pages** 上，可在线体验。

👉 [在线预览 Demo](https://eljcf.github.io/react-message-board/)

---

## ✨ 功能特性
- 📝 **发布留言**：输入内容即可新增
- 📋 **留言列表**：展示所有留言，支持搜索过滤
- 🔍 **搜索功能**：实时过滤留言
- 📄 **详情页**：点击留言进入详情
- ✏️ **编辑功能**：支持修改已发布的留言
- ❌ **删除功能**：一键删除留言
- 💾 **持久化存储**：使用 `localStorage` 保存，刷新不丢失
- 📱 **SPA 路由**：基于 React Router，实现单页应用多页面切换

---

## 🛠️ 技术栈
- [React](https://reactjs.org/) - 前端框架
- [React Router](https://reactrouter.com/) - 路由管理
- [Redux Toolkit](https://redux-toolkit.js.org/) - 全局状态管理
- [Vite](https://vitejs.dev/) - 构建工具
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) - 本地持久化存储
- [GitHub Actions](https://github.com/features/actions) - 自动化部署
- [GitHub Pages](https://pages.github.com/) - 静态页面托管

---

## 🚀 快速开始

### 克隆项目
```bash
git clone https://github.com/eljcf/react-message-board.git
cd react-message-board
