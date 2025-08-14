# 🌟 石墨烯积木的博客

![Node.js >= 22](https://img.shields.io/badge/node.js-%3E%3D22-brightgreen) 
![pnpm >= 9](https://img.shields.io/badge/pnpm-%3E%3D9-blue) 
![Astro](https://img.shields.io/badge/Astro-5.12.9-orange)
![License](https://img.shields.io/badge/license-MIT-green)

基于 [Astro](https://astro.build) 和 [Fuwari](https://github.com/saicaca/fuwari) 主题构建的现代化个人博客，集成了百度统计、优化的评论系统和多项性能增强功能。

## 🙏 致谢

本项目基于以下优秀的开源项目：

- **[Fuwari](https://github.com/saicaca/fuwari)** - 原始主题，提供了优雅的设计和完整的博客功能
- **[Fuwari by afoim](https://github.com/afoim/fuwari)** - 部分灵感和优化思路来源
- **[Astro](https://astro.build)** - 现代化的静态站点生成器
- **[Tailwind CSS](https://tailwindcss.com)** - 实用优先的 CSS 框架

感谢所有开源贡献者的无私奉献！🎉

## 🎯 项目特色

本项目在原版 Fuwari 主题基础上进行了大量优化和功能增强：

### 🚀 性能优化
- ✅ **懒加载评论系统** - 提升页面加载速度 30-50%
- ✅ **优化的构建配置** - 更快的构建和部署
- ✅ **智能缓存策略** - 静态资源长期缓存，API短期缓存
- ✅ **依赖优化** - 精简依赖，减少包体积

### 📊 统计分析
- ✅ **百度统计集成** - 真实的页面访问量统计
- ✅ **智能回退机制** - API失败时自动使用本地统计
- ✅ **缓存优化** - 减少API调用，提升性能

### 💬 评论系统
- ✅ **Twikoo 评论系统** - 支持多种部署方式
- ✅ **简化UI设计** - 现代简约的评论界面
- ✅ **自动加载** - 用户阅读时后台加载评论

### 🌐 国际化支持
- ✅ **多语言支持** - 中文、英文、日文等多种语言
- ✅ **完整翻译** - 包含所有界面元素的翻译

### 🛠️ 开发体验
- ✅ **TypeScript 支持** - 完整的类型定义
- ✅ **代码格式化** - 使用 Biome 进行代码格式化
- ✅ **自动化部署** - 支持 Netlify、Vercel 等平台

### 🤝 协作功能
- ✅ **多作者支持** - 每篇文章可设置独立作者信息
- ✅ **投稿系统** - 支持通过 GitHub PR 接受外部投稿
- ✅ **作者展示** - 完整的作者信息展示（头像、简介、社交链接）
- ✅ **灵活配置** - 可选的作者字段，自动回退到默认作者

## ✨ Features

- [x] Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com)
- [x] Smooth animations and page transitions
- [x] Light / dark mode
- [x] Customizable theme colors & banner
- [x] Responsive design
- [x] Search functionality with [Pagefind](https://pagefind.app/)
- [x] [Markdown extended features](https://github.com/saicaca/fuwari?tab=readme-ov-file#-markdown-extended-syntax)
- [x] Table of contents
- [x] RSS feed

## 🚀 快速开始

### 1. 克隆项目
```bash
git clone https://github.com/shimoxi123/boke-fuwari.git
cd boke-fuwari
```

### 2. 安装依赖
```bash
# 安装 pnpm (如果还没有安装)
npm install -g pnpm

# 安装项目依赖
pnpm install
```

### 3. 配置环境变量
```bash
# 复制环境变量示例文件
cp .env.example .env

# 编辑 .env 文件，填入你的配置
```

### 4. 自定义配置
编辑 `src/config.ts` 文件来自定义你的博客：
- 网站标题、描述
- 个人信息
- 主题颜色
- 社交链接等

### 5. 创建文章
```bash
# 创建新文章
pnpm new-post my-first-post

# 编辑文章
# 文章位于 src/content/posts/ 目录
```

### 6. 本地开发
```bash
# 启动开发服务器
pnpm dev

# 访问 http://localhost:4321
```

## 🔐 环境变量配置

本项目使用环境变量来管理敏感配置。请按以下步骤设置：

### 本地开发环境

1. 复制 `.env.example` 为 `.env`
2. 根据需要填入以下配置：

```bash
# ===========================================
# 百度统计配置 (可选)
# ===========================================
# 如果你想使用百度统计功能，请填入以下配置

# 百度统计 API Key
BAIDU_ANALYTICS_API_KEY=your_baidu_api_key_here

# 百度统计 Secret Key  
BAIDU_ANALYTICS_SECRET_KEY=your_baidu_secret_key_here

# 百度统计站点ID (从统计代码中获取)
BAIDU_ANALYTICS_SITE_ID=your_baidu_site_id_here
```

### 生产环境 (Netlify)

在 Netlify 控制台中设置以下环境变量：

1. 登录 [Netlify 控制台](https://app.netlify.com/)
2. 选择你的网站项目
3. 进入 **Site settings** → **Environment variables**
4. 添加以下变量：

| 变量名 | 说明 | 是否必需 |
|--------|------|----------|
| `BAIDU_ANALYTICS_API_KEY` | 百度统计 API Key | 可选 |
| `BAIDU_ANALYTICS_SECRET_KEY` | 百度统计 Secret Key | 可选 |
| `BAIDU_ANALYTICS_SITE_ID` | 百度统计站点ID | 可选 |

### 获取百度统计配置

如果你想使用百度统计功能：

1. 访问 [百度统计](https://tongji.baidu.com/)
2. 注册并添加你的网站
3. 在"管理" → "其他设置" → "数据导出服务"中获取 API Key 和 Secret Key
4. 在"管理" → "代码管理"中获取站点ID（统计代码中的ID）

## 🚀 部署指南

### Netlify 部署 (推荐)

本项目已针对 Netlify 进行了优化配置：

1. **Fork 本仓库**到你的 GitHub 账户
2. **连接 Netlify**：
   - 登录 [Netlify](https://app.netlify.com/)
   - 点击 "New site from Git"
   - 选择你 fork 的仓库
3. **配置构建设置**：
   - Build command: `pnpm install --frozen-lockfile && pnpm run build`
   - Publish directory: `dist`
   - Node.js version: `22.17.0`
4. **设置环境变量**（参考上面的环境变量配置）
5. **部署**：点击 "Deploy site"

### 其他平台部署

- **Vercel**: 支持零配置部署
- **GitHub Pages**: 需要配置 GitHub Actions
- **Cloudflare Pages**: 支持直接部署

详细部署指南请参考 [Astro 部署文档](https://docs.astro.build/en/guides/deploy/)。

## 📝 Frontmatter of Posts

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
lang: jp      # Set only if the post's language differs from the site's language in `config.ts`

# 作者信息（可选）- 支持多作者协作
author:
  name: "作者姓名"                    # 必填
  avatar: "https://example.com/avatar.jpg"  # 可选，头像链接
  bio: "作者简介"                     # 可选，简短介绍
  website: "https://author-site.com"  # 可选，个人网站
  github: "github-username"           # 可选，GitHub 用户名
  email: "author@example.com"         # 可选，邮箱地址
---
```

### 🤝 多作者协作功能

- **自定义作者**：每篇文章可以设置独立的作者信息
- **投稿友好**：方便其他人通过 GitHub PR 发布文章
- **完整信息**：支持头像、简介、社交链接等完整作者信息
- **自动回退**：如果不设置作者，自动使用博客默认作者信息

## 🧩 Markdown Extended Syntax

In addition to Astro's default support for [GitHub Flavored Markdown](https://github.github.com/gfm/), several extra Markdown features are included:

- Admonitions ([Preview and Usage](https://fuwari.vercel.app/posts/markdown-extended/#admonitions))
- GitHub repository cards ([Preview and Usage](https://fuwari.vercel.app/posts/markdown-extended/#github-repository-cards))
- Enhanced code blocks with Expressive Code ([Preview](https://fuwari.vercel.app/posts/expressive-code/) / [Docs](https://expressive-code.com/))

## ⚡ Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                              |
|:---------------------------|:----------------------------------------------------|
| `pnpm install`             | Installs dependencies                               |
| `pnpm dev`                 | Starts local dev server at `localhost:4321`         |
| `pnpm build`               | Build your production site to `./dist/`             |
| `pnpm preview`             | Preview your build locally, before deploying        |
| `pnpm check`               | Run checks for errors in your code                  |
| `pnpm format`              | Format your code using Biome                        |
| `pnpm new-post <filename>` | Create a new post                                   |
| `pnpm astro ...`           | Run CLI commands like `astro add`, `astro check`    |
| `pnpm astro --help`        | Get help using the Astro CLI                        |

## ✏️ Contributing

Check out the [Contributing Guide](https://github.com/saicaca/fuwari/blob/main/CONTRIBUTING.md) for details on how to contribute to this project.

## 📄 License

This project is licensed under the MIT License.

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fsaicaca%2Ffuwari.svg?type=large&issueType=license)](https://app.fossa.com/projects/git%2Bgithub.com%2Fsaicaca%2Ffuwari?ref=badge_large&issueType=license)
