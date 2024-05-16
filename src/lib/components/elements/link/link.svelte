<script lang="ts" context="module">
	const styles = {
		base: '',
		prefetch: '',
		active: '',
		exact: 'text-primary-500',
		inactive: 'text-gray-900 dark:text-white'
	};
</script>

<script lang="ts">
	// imports
	import { twJoin, twMerge } from 'tailwind-merge';
	import { page } from '$app/stores';
	import { useUI } from '$lib/composables/useUI.js';
	import type { DeepPartial } from '$lib/types/index.js';
	// props
	let _class: string | DeepPartial<typeof styles> = '';
	export { _class as class };
	export let label: string = '';
	export let href: string | null | undefined;
	export let active: boolean = false;
	export let exact: boolean = false;

	// config
	const { css, classer } = useUI(styles, _class);
	// Reactive
	$: exact = href === $page.url.pathname;

	$: prefetch = false;
	$: inactive = false;
	$: linkCSS = twJoin(
		css.base || classer,
		exact && css.active,
		prefetch && css.prefetch,
		active && css.active,
		inactive && css.inactive
	);
</script>

<a {href} class={linkCSS} on:click on:mouseenter on:mouseleave>
	<slot {exact} {active}>{label}</slot>
</a>
