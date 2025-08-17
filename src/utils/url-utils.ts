import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";

export function pathsEqual(path1: string, path2: string) {
	const normalizedPath1 = path1.replace(/^\/|\/$/g, "").toLowerCase();
	const normalizedPath2 = path2.replace(/^\/|\/$/g, "").toLowerCase();
	return normalizedPath1 === normalizedPath2;
}

function joinUrl(...parts: string[]): string {
	const joined = parts.join("/");
	return joined.replace(/\/+/g, "/");
}

export function getPostUrlByDate(
	_slug: string,
	publishedDate: Date | string,
): string {
	// 处理字符串格式的日期
	let dateObj: Date;
	if (typeof publishedDate === "string") {
		// 处理非标准日期格式，如 "2025-08-14-18-00"
		if (publishedDate.includes("-") && publishedDate.split("-").length > 3) {
			const parts = publishedDate.split("-");
			if (parts.length >= 5) {
				// 格式: YYYY-MM-DD-HH-mm
				const year = parseInt(parts[0]);
				const month = parseInt(parts[1]) - 1; // 月份从0开始
				const day = parseInt(parts[2]);
				const hour = parseInt(parts[3]);
				const minute = parseInt(parts[4]);
				dateObj = new Date(year, month, day, hour, minute);
			} else {
				dateObj = new Date(publishedDate);
			}
		} else {
			dateObj = new Date(publishedDate);
		}

		// 检查日期是否有效
		if (isNaN(dateObj.getTime())) {
			// 如果日期无效，使用当前日期作为后备
			dateObj = new Date();
		}
	} else {
		dateObj = publishedDate;
	}

	const year = dateObj.getFullYear();
	const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
	const day = dateObj.getDate().toString().padStart(2, "0");
	const hour = dateObj.getHours().toString().padStart(2, "0");

	return url(`/${year}/${month}/${day}/${hour}/`);
}

export function getTagUrl(tag: string): string {
	if (!tag) return url("/archive/");
	return url(`/archive/?tag=${encodeURIComponent(tag.trim())}`);
}

export function getCategoryUrl(category: string | null): string {
	if (
		!category ||
		category.trim() === "" ||
		category.trim().toLowerCase() === i18n(I18nKey.uncategorized).toLowerCase()
	)
		return url("/archive/?uncategorized=true");
	return url(`/archive/?category=${encodeURIComponent(category.trim())}`);
}

export function getDir(path: string): string {
	const lastSlashIndex = path.lastIndexOf("/");
	if (lastSlashIndex < 0) {
		return "/";
	}
	return path.substring(0, lastSlashIndex + 1);
}

export function url(path: string) {
	return joinUrl("", import.meta.env.BASE_URL, path);
}
