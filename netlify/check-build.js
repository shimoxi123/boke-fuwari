#!/usr/bin/env node

// Netlify构建检查脚本
// 验证构建环境和依赖

const fs = require('node:fs');
const path = require('node:path');

console.log('🔍 检查Netlify构建环境...');

// 检查Node.js版本
const nodeVersion = process.version;
console.log(`📋 Node.js版本: ${nodeVersion}`);

// 检查必要文件
const requiredFiles = [
  'package.json',
  'pnpm-lock.yaml',
  'astro.config.mjs',
  'src/config.ts'
];

let allFilesExist = true;

requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} 存在`);
  } else {
    console.log(`❌ ${file} 缺失`);
    allFilesExist = false;
  }
});

// 检查环境变量
const requiredEnvVars = [
  'BAIDU_ANALYTICS_API_KEY',
  'BAIDU_ANALYTICS_SECRET_KEY',
  'BAIDU_ANALYTICS_SITE_ID'
];

console.log('\n🔐 检查环境变量...');
requiredEnvVars.forEach(envVar => {
  if (process.env[envVar]) {
    console.log(`✅ ${envVar} 已设置`);
  } else {
    console.log(`⚠️  ${envVar} 未设置（可选）`);
  }
});

// 检查package.json脚本
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  if (packageJson.scripts && packageJson.scripts.build) {
    console.log('✅ 构建脚本存在');
  } else {
    console.log('❌ 构建脚本缺失');
    allFilesExist = false;
  }
} catch (error) {
  console.log('❌ 无法读取package.json');
  allFilesExist = false;
}

if (allFilesExist) {
  console.log('\n🎉 构建环境检查通过！');
  process.exit(0);
} else {
  console.log('\n❌ 构建环境检查失败！');
  process.exit(1);
}