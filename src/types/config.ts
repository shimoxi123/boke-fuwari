import type { AUTO_MODE, DARK_MODE, LIGHT_MODE } from "@constants/constants";

export type SiteConfig = {
	title: string;
	subtitle: string;

	lang:
		| "en"
		| "zh_CN"
		| "zh_TW"
		| "ja"
		| "ko"
		| "es"
		| "th"
		| "vi"
		| "tr"
		| "id";

	themeColor: {
		hue: number;
		fixed: boolean;
	};
	banner: {
		enable: boolean;
		src: string;
		position?: "top" | "center" | "bottom";
		credit: {
			enable: boolean;
			text: string;
			url?: string;
		};
	};
	toc: {
		enable: boolean;
		depth: 1 | 2 | 3;
	};

	favicon: Favicon[];
};

export type Favicon = {
	src: string;
	theme?: "light" | "dark";
	sizes?: string;
};

export enum LinkPreset {
	Home = 0,
	Archive = 1,
	About = 2,
	Friends = 3,
}

export type NavBarLink = {
	name: string;
	url: string;
	external?: boolean;
};

export type NavBarConfig = {
	links: (NavBarLink | LinkPreset)[];
};

export type ProfileConfig = {
	avatar?: string;
	name: string;
	bio?: string;
	links: {
		name: string;
		url: string;
		icon: string;
	}[];
};

export type LicenseConfig = {
	enable: boolean;
	name: string;
	url: string;
};

export type LIGHT_DARK_MODE =
	| typeof LIGHT_MODE
	| typeof DARK_MODE
	| typeof AUTO_MODE;

export type BlogPostData = {
	body: string;
	title: string;
	published: Date;
	description: string;
	tags: string[];
	draft?: boolean;
	image?: string;
	category?: string;
	prevTitle?: string;
	prevSlug?: string;
	nextTitle?: string;
	nextSlug?: string;
};

export type ExpressiveCodeConfig = {
	theme: string;
};

export type FriendLink = {
	name: string;
	url: string;
	avatar?: string;
	description?: string;
};

export type FriendLinksConfig = {
	enable: boolean;
	links: FriendLink[];
};

export type GiscusConfig = {
	enable: boolean;
	repo: string; // GitHub 仓库，格式：用户名/仓库名
	repoId: string; // 仓库 ID
	category: string; // Discussion 分类名称
	categoryId: string; // Discussion 分类 ID
	mapping: "pathname" | "url" | "title" | "og:title" | "specific" | "number"; // 页面与 Discussion 的映射方式
	strict: boolean; // 是否启用严格匹配
	reactionsEnabled: boolean; // 是否启用反应
	emitMetadata: boolean; // 是否发送元数据
	inputPosition: "top" | "bottom"; // 评论框位置
	theme: "light" | "dark" | "preferred_color_scheme" | "transparent_dark" | "dark_dimmed" | "dark_high_contrast" | "dark_protanopia" | "dark_tritanopia" | "light_high_contrast" | "light_protanopia" | "light_tritanopia"; // 主题
	lang: string; // 语言
	loading: "lazy" | "eager"; // 加载方式
};
