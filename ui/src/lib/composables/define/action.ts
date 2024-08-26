type AttrsAndClassesParams = {
	attrs?: Record<string, string>;
	classes?: string[];
};

export function deineAction(node: HTMLElement, params: AttrsAndClassesParams) {
	let { attrs = {}, classes = [] } = params;

	function updateElement() {
		// Spread attributes
		Object.entries(attrs).forEach(([key, value]) => {
			node.setAttribute(key, value);
		});

		// Add classes
		classes.forEach((className) => {
			node.classList.add(className);
		});
	}

	updateElement();

	return {
		update(newParams: AttrsAndClassesParams) {
			attrs = newParams.attrs || {};
			classes = newParams.classes || [];
			updateElement();
		}
	};
}
