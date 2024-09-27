import type { CreateAccordionProps } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { AccordionLink } from '$lib/types/link.js';
import type { Styles, DeepStyles } from '$lib/pkgs/utian/type.js';

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

export interface AccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
	class?: string | DeepStyles<typeof accordion>;
	children?: Snippet;
	links?: AccordionLink[];
	multiple?: CreateAccordionProps['multiple'];
	disabled?: CreateAccordionProps['disabled'];
	visible?: CreateAccordionProps['forceVisible'];
}
