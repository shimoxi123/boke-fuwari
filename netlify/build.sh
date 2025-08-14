#!/bin/bash

# Netlify构建脚本
# 确保使用正确的Node.js和PNPM版本

echo "🚀 开始Netlify构建过程..."

# 检查Node.js版本
echo "📋 当前Node.js版本: $(node --version)"
echo "📋 当前NPM版本: $(npm --version)"

# 安装PNPM（如果没有安装）
if ! command -v pnpm &> /dev/null; then
    echo "📦 安装PNPM..."
    npm install -g pnpm@9.14.4
else
    echo "📦 PNPM已安装: $(pnpm --version)"
fi

# 清理缓存（可选）
echo "🧹 清理PNPM缓存..."
pnpm store prune || true

# 安装依赖
echo "📦 安装项目依赖..."
pnpm install --frozen-lockfile

# 构建项目
echo "🔨 构建项目..."
pnpm run build

echo "✅ 构建完成！"