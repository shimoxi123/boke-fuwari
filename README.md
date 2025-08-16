# 🌟 石墨烯积木的博客

![Node.js >= 22](https://img.shields.io/badge/node.js-%3E%3D22-brightgreen) 
![pnpm >= 9](https://img.shields.io/badge/pnpm-%3E%3D9-blue) 
![Astro](https://img.shields.io/badge/Astro-5.12.9-orange)
![License](https://img.shields.io/badge/license-MIT-green)

基于 [Astro](https://astro.build) 和 [Fuwari](https://github.com/saicaca/fuwari) 主题构建的现代化个人博客，专注于技术分享和知识传播。

## 🎯 博客特色

### 📚 内容丰富
- **技术教程** - STM32、VS Code、Markdown 等实用教程
- **免费资源** - 服务器、邮箱、影视等免费资源分享
- **实战项目** - 我的世界服务器搭建等项目实践

### 🚀 技术亮点
- ✅ **现代化架构** - Astro + TypeScript + Tailwind CSS
- ✅ **优化性能** - 懒加载评论系统，页面加载速度提升 30-50%
- ✅ **智能统计** - 集成百度统计，真实访问量展示
- ✅ **响应式设计** - 完美适配桌面端和移动端
- ✅ **多作者支持** - 支持协作写作和投稿

### 🌐 用户体验
- 🌙 **深色模式** - 护眼的深色主题
- 🔍 **全文搜索** - 基于 Pagefind 的快速搜索
- 💬 **评论系统** - Twikoo 评论，支持多种部署方式
- 📱 **PWA 支持** - 可安装到桌面，离线访问

## 🚀 快速开始

### 环境要求
- Node.js >= 22
- pnpm >= 9

### 本地运行
```bash
# 克隆项目
git clone https://github.com/shimoxi123/boke-fuwari.git
cd boke-fuwari

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 访问 http://localhost:4321
```

### 创建文章
```bash
# 创建新文章
pnpm new-post my-article

# 文章格式 (src/content/posts/my-article.md)
---
title: "文章标题"
published: 2025-01-16-10-30-00  # 年-月-日-时-分-秒
description: "文章描述"
image: "封面图片URL"
tags: ["标签1", "标签2"]
category: "分类"
draft: false
author:
  name: "作者姓名"
  avatar: "头像URL"
  bio: "作者简介"
  website: "个人网站"
  github: "GitHub用户名"
  email: "邮箱地址"
---

文章内容...
```

## 🛠️ 常用命令

| 命令 | 说明 |
|------|------|
| `pnpm dev` | 启动开发服务器 |
| `pnpm build` | 构建生产版本 |
| `pnpm preview` | 预览构建结果 |
| `pnpm new-post <name>` | 创建新文章 |
| `pnpm format` | 格式化代码 |

## 🌐 部署

### Netlify 部署 (推荐)
1. Fork 本仓库
2. 在 [Netlify](https://app.netlify.com/) 中导入项目
3. 构建设置：
   - Build command: `pnpm install && pnpm build`
   - Publish directory: `dist`
   - Node version: `22`
4. 部署完成

### 环境变量 (可选)
如需使用百度统计功能，请设置以下环境变量：
```bash
BAIDU_ANALYTICS_API_KEY=your_api_key
BAIDU_ANALYTICS_SECRET_KEY=your_secret_key
BAIDU_ANALYTICS_SITE_ID=your_site_id
```

## 🤝 投稿指南

欢迎大家投稿分享知识！

### 投稿方式
1. Fork 本仓库
2. 在 `src/content/posts/` 目录下创建文章
3. 提交 Pull Request

### 投稿要求
- ✅ 内容原创，技术准确
- ✅ 格式规范，结构清晰
- ✅ 包含完整的 frontmatter
- ✅ 图片使用稳定的外链

### 推荐主题
- 编程技术教程
- 开发工具使用
- 项目实战经验
- 免费资源分享
- 学习心得体会

## 📊 网站统计

- 📝 **文章数量**: 9篇
- 🏷️ **标签覆盖**: 技术教程、免费资源、实战项目
- 🌍 **访问统计**: 集成百度统计
- 🔍 **搜索功能**: 支持全文搜索

## 🙏 致谢

本项目基于以下优秀开源项目：

- **[Fuwari](https://github.com/saicaca/fuwari)** - 优雅的 Astro 博客主题
- **[Astro](https://astro.build)** - 现代化静态站点生成器
- **[Tailwind CSS](https://tailwindcss.com)** - 实用优先的 CSS 框架
- **[Twikoo](https://twikoo.js.org)** - 简洁的评论系统

感谢所有开源贡献者！🎉

## 📞 联系方式

- 🌐 **个人网站**: [shimoxi.qzz.io](https://www.shimoxi.qzz.io)
- 📧 **邮箱**: boke@shimoxi.dpdns.org
- 💻 **GitHub**: [@shimoxi123](https://github.com/shimoxi123)
- 📝 **博客**: [石墨烯积木的博客](https://boke.shimoxi.qzz.io)

## 📄 开源协议

本项目采用 [MIT License](LICENSE) 开源协议。

---

⭐ 如果这个项目对你有帮助，请给个 Star 支持一下！