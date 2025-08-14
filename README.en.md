# 🌟 Shimoxijimo's Blog

![Node.js >= 22](https://img.shields.io/badge/node.js-%3E%3D22-brightgreen) 
![pnpm >= 9](https://img.shields.io/badge/pnpm-%3E%3D9-blue) 
![Astro](https://img.shields.io/badge/Astro-5.12.9-orange)
![License](https://img.shields.io/badge/license-MIT-green)

A modern personal blog built with [Astro](https://astro.build) and [Fuwari](https://github.com/saicaca/fuwari) theme, featuring Baidu Analytics integration, optimized comment system, and multiple performance enhancements.

## 🙏 Acknowledgments

This project is based on the following excellent open-source projects:

- **[Fuwari](https://github.com/saicaca/fuwari)** - Original theme providing elegant design and complete blog functionality
- **[Fuwari by afoim](https://github.com/afoim/fuwari)** - Source of inspiration and optimization ideas
- **[Astro](https://astro.build)** - Modern static site generator
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework

Thanks to all open-source contributors for their selfless dedication! 🎉

## 🎯 Project Features

This project includes extensive optimizations and feature enhancements based on the original Fuwari theme:

### 🚀 Performance Optimizations
- ✅ **Lazy-loaded Comment System** - Improves page load speed by 30-50%
- ✅ **Optimized Build Configuration** - Faster builds and deployments
- ✅ **Smart Caching Strategy** - Long-term caching for static assets, short-term for APIs
- ✅ **Dependency Optimization** - Streamlined dependencies, reduced bundle size

### 📊 Analytics & Statistics
- ✅ **Baidu Analytics Integration** - Real page view statistics
- ✅ **Smart Fallback Mechanism** - Automatic local statistics when API fails
- ✅ **Cache Optimization** - Reduced API calls, improved performance

### 💬 Comment System
- ✅ **Twikoo Comment System** - Supports multiple deployment methods
- ✅ **Simplified UI Design** - Modern minimalist comment interface
- ✅ **Auto-loading** - Comments load in background while users read

### 🌐 Internationalization
- ✅ **Multi-language Support** - Chinese, English, Japanese, and more
- ✅ **Complete Translation** - All UI elements translated

### 🛠️ Developer Experience
- ✅ **TypeScript Support** - Complete type definitions
- ✅ **Code Formatting** - Using Biome for code formatting
- ✅ **Automated Deployment** - Support for Netlify, Vercel, and other platforms

### 🤝 Collaboration Features
- ✅ **Multi-Author Support** - Each article can have independent author information
- ✅ **Contribution System** - Accept external contributions via GitHub PR
- ✅ **Author Display** - Complete author information display (avatar, bio, social links)
- ✅ **Flexible Configuration** - Optional author fields with automatic fallback to default author

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

## 🚀 Quick Start

### 1. Clone the Project
```bash
git clone https://github.com/shimoxi123/boke-fuwari.git
cd boke-fuwari
```

### 2. Install Dependencies
```bash
# Install pnpm (if not already installed)
npm install -g pnpm

# Install project dependencies
pnpm install
```

### 3. Configure Environment Variables
```bash
# Copy environment variables example file
cp .env.example .env

# Edit .env file and fill in your configuration
```

### 4. Customize Configuration
Edit the `src/config.ts` file to customize your blog:
- Site title and description
- Personal information
- Theme colors
- Social links, etc.

### 5. Create Posts
```bash
# Create a new post
pnpm new-post my-first-post

# Edit posts
# Posts are located in src/content/posts/ directory
```

### 6. Local Development
```bash
# Start development server
pnpm dev

# Visit http://localhost:4321
```

## 🔐 Environment Variables Configuration

This project uses environment variables to manage sensitive configurations. Please follow these steps:

### Local Development Environment

1. Copy `.env.example` to `.env`
2. Fill in the following configuration as needed:

```bash
# ===========================================
# Baidu Analytics Configuration (Optional)
# ===========================================
# If you want to use Baidu Analytics, fill in the following

# Baidu Analytics API Key
BAIDU_ANALYTICS_API_KEY=your_baidu_api_key_here

# Baidu Analytics Secret Key  
BAIDU_ANALYTICS_SECRET_KEY=your_baidu_secret_key_here

# Baidu Analytics Site ID (get from analytics code)
BAIDU_ANALYTICS_SITE_ID=your_baidu_site_id_here
```

### Production Environment (Netlify)

Set the following environment variables in the Netlify console:

1. Login to [Netlify Console](https://app.netlify.com/)
2. Select your website project
3. Go to **Site settings** → **Environment variables**
4. Add the following variables:

| Variable Name | Description | Required |
|---------------|-------------|----------|
| `BAIDU_ANALYTICS_API_KEY` | Baidu Analytics API Key | Optional |
| `BAIDU_ANALYTICS_SECRET_KEY` | Baidu Analytics Secret Key | Optional |
| `BAIDU_ANALYTICS_SITE_ID` | Baidu Analytics Site ID | Optional |

### Getting Baidu Analytics Configuration

If you want to use Baidu Analytics:

1. Visit [Baidu Analytics](https://tongji.baidu.com/)
2. Register and add your website
3. Get API Key and Secret Key from "Management" → "Other Settings" → "Data Export Service"
4. Get Site ID from "Management" → "Code Management" (ID in the analytics code)

## 🚀 Deployment Guide

### Netlify Deployment (Recommended)

This project is optimized for Netlify:

1. **Fork this repository** to your GitHub account
2. **Connect to Netlify**:
   - Login to [Netlify](https://app.netlify.com/)
   - Click "New site from Git"
   - Select your forked repository
3. **Configure build settings**:
   - Build command: `pnpm install --frozen-lockfile && pnpm run build`
   - Publish directory: `dist`
   - Node.js version: `22.17.0`
4. **Set environment variables** (refer to environment variables configuration above)
5. **Deploy**: Click "Deploy site"

### Other Platform Deployments

- **Vercel**: Supports zero-configuration deployment
- **GitHub Pages**: Requires GitHub Actions configuration
- **Cloudflare Pages**: Supports direct deployment

For detailed deployment guides, refer to [Astro Deployment Documentation](https://docs.astro.build/en/guides/deploy/).

## 📝 Post Frontmatter

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

# Author information (optional) - Support for multi-author collaboration
author:
  name: "Author Name"                     # Required
  avatar: "https://example.com/avatar.jpg"  # Optional, avatar URL
  bio: "Author bio"                       # Optional, brief introduction
  website: "https://author-site.com"     # Optional, personal website
  github: "github-username"              # Optional, GitHub username
  email: "author@example.com"            # Optional, email address
---
```

### 🤝 Multi-Author Collaboration Features

- **Custom Authors**: Each article can have independent author information
- **Contribution Friendly**: Easy for others to publish articles via GitHub PR
- **Complete Information**: Support for avatar, bio, social links, and other complete author information
- **Automatic Fallback**: If no author is set, automatically uses the blog's default author information

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