<script lang="ts" context="module">
	export const styles = {
		root: 'relative w-fit',
		base: '',
		background: 'bg-white dark:bg-gray-900',
		divide: 'divide-y divide-gray-200 dark:divide-gray-800',
		rounded: 'rounded-md lg:rounded-lg',
		padding: 'px-4 py-5 sm:p-6',
		ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
		shadow: 'shadow',
		north: {
			base: '',
			background: ''
		},
		default: {
			base: '',
			background: ''
		},
		south: {
			base: '',
			background: ''
		}
	};
</script>

<script lang="ts">
	// Imports
	import { stringfy, twJoin } from '$lib/utils/index.js';
	import { useUI } from '$lib/composables/useUI.js';
	import type { DeepPartial } from '$lib/types/index.js';

	// Props
	let _class: string | DeepPartial<typeof styles> = '';
	export { _class as class };
	export let as: string = 'div';

	// Config
	const { css, classer } = useUI(styles, _class);

	// Reactive
</script>

<svelte:element this={as} class={twJoin(stringfy(css), classer)}>
	{#if $$slots.north}
		<div class={stringfy(css.north)}>
			<slot name="north" />
		</div>
	{/if}
	<div class={stringfy(css.default)}>
		<slot />
	</div>
	{#if $$slots.south}
		<div class={stringfy(css.south)}>
			<slot name="south" />
		</div>
	{/if}
</svelte:element>
