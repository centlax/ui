import type { Styles } from '$lib/types/utility.js';
import type { DeepStyles, Props } from '$lib/types/index.js';
import { type CreateAvatarProps } from '@melt-ui/svelte';

export const props = {
	class: {} as string | DeepStyles<typeof avatar>,
	override: false,
	src: '' as CreateAvatarProps['src'],
	alt: '' as string,
	name: '' as string,
	size: 'md' as keyof typeof avatar.opt.size
} satisfies Props;

const styles = {
	root: {
		layout: 'relative inline-block overflow-hidden',
		border: 'rounded-full'
	},
	opt: {
		size: {
			xs: { sizing: 'size-6' },
			sm: { sizing: 'size-8' },
			md: { sizing: 'size-10' },
			lg: { sizing: 'size-12' },
			xl: { sizing: 'size-14' }
		}
	},
	img: {},
	fallback: {}
} satisfies Styles;

export const avatar = styles;
