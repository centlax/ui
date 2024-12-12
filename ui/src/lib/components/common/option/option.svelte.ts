import { ctxOption } from '$lib/composables/option.js';

export function createOption() {
	const ctx = ctxOption();
	return {
		elements: {
			group: ctx.group.get(),
			title: ctx.title.get(),
			option: ctx.option.get()
		}
	};
}
