import type {
	ExpressiveCodeConfig,
	FriendLinksConfig,
	GiscusConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "石墨烯积木的博客",
	subtitle: "演示站点",
	lang: "zh_CN", // 语言代码，例如 'en', 'zh_CN', 'ja' 等
	themeColor: {
		hue: 250, // 主题色的默认色调，范围 0 到 360。例如：红色: 0, 青色: 200, 蓝绿色: 250, 粉色: 345
		fixed: false, // 为访客隐藏主题色选择器
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png", // 相对于 /src 目录。如果以 '/' 开头则相对于 /public 目录
		position: "center", // 等同于 object-position，仅支持 'top', 'center', 'bottom'。默认为 'center'
		credit: {
			enable: false, // 显示横幅图片的版权信息
			text: "", // 要显示的版权文本
			url: "", // （可选）原作品或艺术家页面的链接
		},
	},
	toc: {
		enable: true, // 在文章右侧显示目录
		depth: 2, // 目录中显示的最大标题深度，范围 1 到 3
	},
	favicon: [
		// 保持此数组为空以使用默认图标
		// {
		//   src: '/favicon/icon.png',    // 图标路径，相对于 /public 目录
		//   theme: 'light',              // （可选）'light' 或 'dark'，仅在为明暗模式设置不同图标时使用
		//   sizes: '32x32',              // （可选）图标尺寸，仅在有不同尺寸的图标时设置
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		LinkPreset.Friends,
		{
			name: "GitHub",
			url: "https://github.com/saicaca/fuwari", // 内部链接不应包含基础路径，因为会自动添加
			external: true, // 显示外部链接图标并在新标签页中打开
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.webp", // 相对于 /src 目录。如果以 '/' 开头则相对于 /public 目录
	name: "石墨烯积木",
	bio: "一个致力于分享科技与设计理念的博客",
	links: [
		// {
		// 	name: "Twitter",
		// 	icon: "fa6-brands:twitter", // 访问 https://icones.js.org/ 获取图标代码
		// 	// 如果尚未包含相应的图标集，您需要安装它
		// 	// `pnpm add @iconify-json/<图标集名称>`
		// 	url: "https://twitter.com",
		// },
		{
			name: "资源站",
			icon: "line-md:cloud-alt-download-filled-loop",
			url: "https://www.shimoxi.icu",
		},
		{
			name: "GitHub",
			icon: "line-md:github-twotone",
			url: "https://github.com/saicaca/fuwari",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：某些样式（如背景色）正在被覆盖，请参见 astro.config.mjs 文件。
	// 请选择深色主题，因为此博客主题目前仅支持深色背景
	theme: "github-dark",
};

export const friendLinksConfig: FriendLinksConfig = {
	enable: true,
	links: [
		// {
		// 	name: "示例友链",
		// 	url: "https://example.com",
		// 	description: "这是一个示例友链",
		// 	avatar: "https://via.placeholder.com/64",
		// },
		{
			name: "Aliom个人博客",
			url: "https://bailanwa.dpdns.org",
			description: "Aliom的个人博客",
			avatar: "https://avatars.githubusercontent.com/u/182760295?v=4",
		},
	],
};

export const giscusConfig: GiscusConfig = {
	enable: true,
	repo: "shimoxi123/BoKe-PinLun", // 请替换为你的 GitHub 仓库
	repoId: "R_kgDOPMHo4g", // 请替换为你的仓库 ID
	category: "General", // Discussion 分类名称
	categoryId: "DIC_kwDOPMHo4s4Cs675", // 请替换为你的分类 ID
	mapping: "pathname", // 使用路径名映射
	strict: false, // 不启用严格匹配
	reactionsEnabled: true, // 启用反应功能
	emitMetadata: false, // 不发送元数据
	inputPosition: "bottom", // 评论框在底部
	theme: "preferred_color_scheme", // 跟随系统主题
	lang: "zh-CN", // 中文界面
	loading: "lazy", // 懒加载
};
