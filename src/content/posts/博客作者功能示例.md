---
title: "博客作者功能示例"
published: 2025-01-14
description: "展示如何在博客文章中设置自定义作者信息，支持多作者协作发布。"
image: ""
tags: ["功能介绍", "作者系统", "协作"]
category: "功能说明"
draft: false
author:
  name: "示例作者"
  avatar: "https://avatars.githubusercontent.com/u/1?v=4"
  bio: "这是一个示例作者，展示如何在文章中设置自定义作者信息。"
  website: "https://example.com"
  github: "example-user"
  email: "author@example.com"
---

# 博客作者功能介绍

这篇文章展示了新的作者功能，现在每篇博客都可以设置自定义的作者信息了！

## 🎯 功能特色

### ✨ 自定义作者信息
- **作者姓名**：显示文章的真实作者
- **头像**：支持自定义头像链接
- **个人简介**：简短的作者介绍
- **社交链接**：网站、GitHub、邮箱等联系方式

### 🤝 多作者协作
- 支持不同作者在同一个博客发布文章
- 每篇文章都可以有独立的作者信息
- 方便通过 GitHub PR 接受其他人的投稿

## 📝 如何使用

在文章的 frontmatter 中添加 `author` 字段：

```yaml
---
title: "你的文章标题"
published: 2025-01-14
description: "文章描述"
tags: ["标签1", "标签2"]
category: "分类"
author:
  name: "你的姓名"
  avatar: "https://your-avatar-url.com/avatar.jpg"
  bio: "简短的个人介绍"
  website: "https://your-website.com"
  github: "your-github-username"
  email: "your-email@example.com"
---
```

## 🔧 字段说明

| 字段 | 类型 | 必需 | 说明 |
|------|------|------|------|
| `name` | string | ✅ | 作者姓名（必填） |
| `avatar` | string | ❌ | 头像链接（可选） |
| `bio` | string | ❌ | 个人简介（可选） |
| `website` | string | ❌ | 个人网站（可选） |
| `github` | string | ❌ | GitHub 用户名（可选） |
| `email` | string | ❌ | 邮箱地址（可选） |

## 🚀 投稿指南

如果你想在这个博客发布文章，可以：

1. **Fork 仓库**：Fork [GitHub 仓库](https://github.com/shimoxi123/boke-fuwari)
2. **创建文章**：在 `src/content/posts/` 目录下创建新的 Markdown 文件
3. **设置作者信息**：按照上面的格式添加你的作者信息
4. **提交 PR**：提交 Pull Request，等待审核

## 💡 注意事项

- 如果不设置 `author` 字段，将使用博客默认的作者信息
- 头像建议使用 CDN 或图床服务，确保链接稳定可访问
- GitHub 用户名只需要填写用户名，不需要完整的 URL
- 邮箱会自动生成 `mailto:` 链接

这个功能让博客更加开放和协作友好，欢迎大家投稿！🎉