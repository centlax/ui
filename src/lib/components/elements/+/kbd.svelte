<script lang="ts" context="module">
	export const styles = {
		flex: 'inline-flex items-center justify-center',
		padding: 'px-1',
		text: 'text-gray-900 dark:text-white',
		rounded: 'rounded',
		font: 'font-medium font-sans',
		background: 'bg-gray-100 dark:bg-gray-800',
		ring: 'ring-1 ring-gray-300 dark:ring-gray-700 ring-inset',
		attrs: {
			size: {
				xs: 'h-4 min-w-[16px] text-[10px]',
				sm: 'h-5 min-w-[20px] text-[11px]',
				md: 'h-6 min-w-[24px] text-[12px]',
				lg: 'h-6 min-w-[24px] text-[12px]',
				xl: 'h-6 min-w-[24px] text-[12px]'
			}
		}
	};
</script>

<script lang="ts">
	// imports
	import { config } from '$lib/ui.config.js';
	import type { Size, DeepPartial } from '$lib/types/index.js';
	import { twJoin } from 'tailwind-merge';
	import { stringify } from '$lib/utils/index.js';
	import { useUI } from '$lib/composables/useUI.js';
	// props
	export let value: string = '';
	export let size: Size = config.size;
	let _class: string | DeepPartial<typeof styles> = '';
	export { classProp as class };

	// config
	const { css, classer } = useUI(styles, _class);
</script>

<kbd {...$$restProps} class={twJoin(stringify(css), css.attrs.size[size], classer)}>
	<slot>{value}</slot>
</kbd>
