---
title: Fuwari 简易指南
published: 2024-04-01
description: "如何使用此博客模板。"
image: "./cover.jpeg"
tags: ["Fuwari", "博客", "自定义"]
category: 指南
draft: false
---

> 封面图来源：https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/208fc754-890d-4adb-9753-2c963332675d/width=2048/01651-1456859105-(colour_1.5,girl,_Blue,yellow,green,cyan,purple,red,pink,_best,8k,UHD,masterpiece,male%20focus,%201boy,gloves,%20ponytail,%20long%20hair,.jpeg)

此博客模板基于 https://astro.build/ 构建。本指南未提及的内容，您可以在 https://docs.astro.build/ 中找到答案。

## 文章 Front-matter 配置

```yaml
---
title: 我的第一篇博客文章
published: 2023-09-09
description: 这是我的新 Astro 博客的第一篇文章。
image: ./cover.jpg
tags: [Foo, Bar]
category: 前端开发
draft: false
---
```

| 属性          | 说明                                                                                                                                                                                                 |
|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `title`       | 文章标题                                                                                                                                                                                              |
| `published`   | 文章发布日期                                                                                                                                                                                          |
| `description` | 文章简短描述，将在索引页显示                                                                                                                                                                          |
| `image`       | 文章封面图路径：<br/>1. 以 `http://` 或 `https://` 开头：使用网络图片<br/>2. 以 `/` 开头：指向 `public` 目录的图片<br/>3. 无前缀：相对于 Markdown 文件的路径                                         |
| `tags`        | 文章标签                                                                                                                                                                                              |
| `category`    | 文章分类                                                                                                                                                                                            |
| `draft`       | 是否为草稿（设置为 `true` 时文章不会显示）                                                                                                                                                            |

## 文章文件存放位置

请将文章文件放置在 `src/content/posts/` 目录下。您可创建子目录来更好地组织文章和资源：

```
src/content/posts/
├── 文章1.md
└── 文章2/
    ├── cover.png
    └── index.md