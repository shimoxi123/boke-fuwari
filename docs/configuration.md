# 自定义配置说明

在 `src/config.ts` 文件中可以自定义站点的各种配置：

## 站点信息 (siteConfig)
- `title`: 站点标题
- `subtitle`: 站点副标题
- `lang`: 语言设置
- `themeColor`: 主题色配置
- `banner`: 横幅图片设置
- `toc`: 文章目录设置
- `favicon`: 站点图标

## 导航栏 (navBarConfig)
- 配置顶部导航栏的链接项
- 支持内部页面和外部链接

## 个人信息 (profileConfig)
- `avatar`: 头像图片
- `name`: 作者姓名
- `bio`: 个人简介
- `links`: 社交链接

## 友链配置
- 友链数据存储在 `src/content/friend-links.json` 文件中
- 格式参考"友链配置"部分

## 评论系统 (twikooConfig)
- `envId`: Twikoo 服务地址
- `lang`: 语言设置
- `lazyLoad`: 懒加载设置

## 百度统计 (baiduAnalyticsConfig)
- 通过环境变量配置统计参数