// 解析自定义日期格式的函数 (格式: YYYY-MM-DD-HH)
export function parseCustomDate(dateString: string): Date {
	// 处理标准日期格式 YYYY-MM-DD-HH
	const parts = dateString.split("-");
	// 格式: YYYY-MM-DD-HH
	const year = parseInt(parts[0]);
	const month = parseInt(parts[1]) - 1; // 月份从0开始
	const day = parseInt(parts[2]);
	const hour = parseInt(parts[3]);
	return new Date(year, month, day, hour);
}

export function formatDateToYYYYMMDD(date: Date): string {
	return date.toISOString().substring(0, 10);
}