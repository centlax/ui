<script lang="ts">
	// imports
	import { twJoin, twMerge } from 'tailwind-merge';
	import { page } from '$app/stores';
	// props
	export let label: string = '';
	export let href: string | null | undefined;
	let classProp: string = '';
	export { classProp as class };
	export let active_class: string = 'text-primary-600 dark:text-primary-500';
	export let inactive_class: string = 'text-gray-900 dark:text-white';
	export let active: boolean = false;
	// config
	const css = {
		base: 'cursor-pointer'
	};
	// reactive
	$: activate = href === $page.url.pathname;
	$: linkCSS = twJoin(css.base, active && activate ? active_class : inactive_class, classProp);
</script>

<a {href} class={linkCSS} on:click on:mouseenter on:mouseleave>
	<slot {active}>{label}</slot>
</a>
