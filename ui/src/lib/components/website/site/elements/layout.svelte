<script lang="ts">
	/** Imports */
	import { siteLayout, type XSiteLayout } from './layout.js';
	import { useUI } from '$lib/composables/ui.js';
	import { ctxSiteKey, useSite } from '../site.svelte.js';
	import { setContext } from 'svelte';
	

	/** Props */
	let { ...props }: XSiteLayout = $props();
	setContext(ctxSiteKey, props.logo)

	/** Styles */
	const ui = useUI(siteLayout, props.class, props.override);
</script>

<div data-name="site-layout" class="bg-[--ui-bg] h-screen flex flex-col">
	{@render props.children?.()}
</div>

<style>
	:root {
		--site-height: 5rem;
		--site-width: 25rem;
	}
</style>
