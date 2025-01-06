<script lang="ts">
	/** Imports */
	import { siteLayout, type XSiteLayout } from './layout.js';
	import { useUI } from '$lib/composables/ui.js';
	import { ctxSiteKey, useSite } from '../land.svelte.js';
	import { setContext } from 'svelte';

	/** Props */
	let { ...props }: XSiteLayout = $props();
	setContext(ctxSiteKey, props.logo);

	/** Styles */
	const ui = useUI(siteLayout, props.class, props.override);
</script>

<div data-name="land-layout" class="flex h-screen flex-col bg-[--ui-bg]">
	{@render props.children?.()}
</div>

