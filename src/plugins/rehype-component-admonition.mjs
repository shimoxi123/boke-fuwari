/// <reference types="mdast" />
import { h } from "hastscript";

/**
 * Creates an admonition component.
 *
 * @param {Object} properties - The properties of the component.
 * @param {string} [properties.title] - An optional title.
 * @param {('tip'|'note'|'important'|'caution'|'warning')} type - The admonition type.
 * @param {import('mdast').RootContent[]} children - The children elements of the component.
 * @returns {import('mdast').Parent} The created admonition component.
 */
export function AdmonitionComponent(properties, children, type) {
	if (!Array.isArray(children) || children.length === 0)
		return h(
			"div",
			{ class: "hidden" },
			'Invalid admonition directive. (Admonition directives must be of block type ":::note{name="name"} <content> :::")',
		);

	// 中文标题映射
	const chineseTitles = {
		note: "注意",
		tip: "提示",
		important: "重要",
		warning: "警告",
		caution: "注意"
	};

	let label = null;
	let titleText = chineseTitles[type] || type.toUpperCase();

	// 检查是否有自定义标题
	if (properties?.["has-directive-label"]) {
		label = children[0]; // The first child is the label
		// biome-ignore lint/style/noParameterAssign: <check later>
		children = children.slice(1);

		// 提取标题文本
		if (label && label.children && label.children.length > 0) {
			// 如果label是一个段落，提取其文本内容
			if (label.children[0].type === 'text') {
				titleText = label.children[0].value;
			} else if (typeof label.children[0] === 'string') {
				titleText = label.children[0];
			}
		}
	}

	return h("blockquote", { class: `admonition bdm-${type}` }, [
		h("span", { class: "bdm-title" }, titleText),
		...children,
	]);
}
