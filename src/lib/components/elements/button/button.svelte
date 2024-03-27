<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { share } from '$lib/theme/share.js';
	import { style } from './styles.js';
	import type { BaseProp } from '$lib/types/index.js';
	import Link from '../link/link.svelte';
	// props
	export let label: string = '';
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
	export let variant: 'solid' = 'solid';
	export let color: BaseProp['color'] = 'primary';
	// props
	$: buttonUI = twMerge(
		style.base,
		share.text[size],
		style.padding[size],
		share.rounded[size],
		style.variant[variant][color],
		$$props.class
	);
</script>

<Link as="button" class={buttonUI}>
	<slot name="leading">
		<span class="bg-red-600 dark:bg-white" />
	</slot>
	<slot>
		<span class="p">
			{label}
		</span>
	</slot>
	<slot name="trailing">
		<span />
	</slot>
</Link>
