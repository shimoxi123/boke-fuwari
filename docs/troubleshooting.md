# 常见问题排查

## 1. 开发服务器无法启动
- 检查 Node.js 版本是否 >= 22
- 检查 pnpm 版本是否 >= 9
- 运行 `pnpm install` 重新安装依赖
- 清除缓存: `pnpm clear`

## 2. 构建失败
- 检查文章 frontmatter 格式是否正确
- 运行 `pnpm type-check` 检查类型错误
- 运行 `pnpm lint` 检查代码规范

## 3. 样式问题
- 检查 Tailwind CSS 类名是否正确
- 查看浏览器控制台是否有样式加载错误

## 4. 评论系统不显示
- 检查 `src/config.ts` 中 Twikoo 配置是否正确
- 确认 Netlify 函数部署是否成功

## 5. 百度统计不工作
- 检查环境变量是否正确设置
- 确认 `src/config.ts` 中百度统计配置是否启用