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



export type TwikooConfig = {
	enable: boolean;
	envId: string; // 腾讯云环境 ID 或 Vercel/Netlify 部署地址
	region?: string; // 腾讯云地域，默认为 ap-shanghai
	path?: string; // 用于区分不同页面的评论，默认为 location.pathname
	lang?: "zh-CN" | "zh-TW" | "en" | "ja"; // 语言，默认为 zh-CN
};
