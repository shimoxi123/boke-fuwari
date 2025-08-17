# 项目结构说明

```
src/
├── components/        # 组件库
│   ├── control/       # 控制组件（按钮、分页等）
│   ├── misc/          # 杂项组件
│   ├── widget/        # 页面部件（侧边栏、导航等）
│   └── *.astro        # 页面级组件
├── content/           # 内容数据
│   ├── posts/         # 文章内容
│   ├── friend-links.json  # 友链配置
│   └── spec/          # 特殊页面内容
├── layouts/           # 页面布局模板
├── pages/             # 路由页面
├── plugins/           # Markdown 插件
├── styles/            # 全局样式文件
├── utils/             # 工具函数
├── assets/            # 静态资源
├── i18n/              # 国际化配置
├── constants/         # 常量定义
├── config.ts          # 主配置文件
└── types/             # TypeScript 类型定义
```