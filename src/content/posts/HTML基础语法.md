---
title: "HTML基础语法" 
published: 2025-08-12
tags: [HTML]
category: "HTML"
draft: false
---

# HTML基础语法完全指南

HTML（超文本标记语言）是构建网页的基础。本文将详细介绍HTML的基本语法和常用元素。

## 一、HTML文档结构

html

<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">

<title>页面标题</title>

</head>

<body>

<!-- 页面内容 -->

</body>

</html>


- `<!DOCTYPE html>` 声明文档类型
- `<html>` 根元素
- `<head>` 包含元信息
- `<body>` 包含可见内容

## 二、常用HTML元素

### 1. 文本元素

html

<h1>主标题</h1>

<h2>副标题</h2>

<p>段落文本</p>

<strong>加粗文本</strong>

<em>斜体文本</em>

<br> <!-- 换行 -->

<hr> <!-- 水平线 -->


### 2. 链接和图片

html

<a href=""https://example.com" (https://example.com)">示例链接</a>

<img src="image.jpg" alt="图片描述">


### 3. 列表

html

<!-- 无序列表 -->

<ul>

<li>项目一</li>

<li>项目二</li>

</ul>

<!-- 有序列表 -->

<ol>

<li>第一项</li>

<li>第二项</li>

</ol>


## 三、HTML表格

html

<table>

<tr>

<th>姓名</th>

<th>年龄</th>

</tr>

<tr>

<td>张三</td>

<td>25</td>

</tr>

</table>


## 四、HTML表单

html

<form action="/submit" method="post">

<label for="username">用户名:</label>

<input type="text" id="username" name="username">

<label for="password">密码:</label>
<input type="password" id="password" name="password">

<input type="submit" value="登录">

</form>


## 五、HTML5语义化标签

html

<header>页眉</header>

<nav>导航</nav>

<main>主要内容</main>

<article>独立文章</article>

<aside>侧边栏</aside>

<footer>页脚</footer>


## 六、HTML注释

html

<!-- 这是注释内容，不会显示在页面中 -->


## 七、特殊字符

| 代码 | 显示 | 描述 |
|------|------|------|
| `&nbsp;` |   | 空格 |
| `&lt;` | < | 小于号 |
| `&gt;` | > | 大于号 |
| `&amp;` | & | 和号 |

## 八、最佳实践

1. 使用小写标签
2. 始终闭合标签
3. 属性值使用双引号
4. 保持代码缩进
5. 使用语义化标签

## 完整示例

html

<!DOCTYPE html>

<html>

<head>

<title>我的博客</title>

<meta charset="UTF-8">

</head>

<body>

<header>

<h1>欢迎来到我的博客</h1>

<nav>

<a href="/">首页</a> |

<a href="/about">关于</a>

</nav>

</header>

<main>
    <article>
        <h2>HTML学习指南</h2>
        <p>HTML是构建网页的基础...</p>
    </article>
</main>

<footer>
    <p>&copy; 2023 我的博客</p>
</footer>

</body>

</html>


掌握这些HTML基础知识，你就可以开始构建自己的网页了！