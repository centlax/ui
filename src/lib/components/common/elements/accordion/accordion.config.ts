import type { DeepStyles, Props, Styles, Link } from '$lib/types/index.js';

interface AccordionLink extends Link {
	id: string;
}
export const props = {
	class: {} as string | DeepStyles<typeof styles>,
	override: false,
	links: [] as AccordionLink[],
	multiple: false,
	disabled: false,
	visible: false,
	value: '' as string | string[] | undefined
} satisfies Props;

const styles = {
	root: {},
	item: {
		motion: 'transition-colors',
		trigger: {
			motion: 'transition-colors',
			first: {}
		},
		content: {
			layout: 'overflow-hidden'
		}
	}
} satisfies Styles;

export const accordion = styles;
