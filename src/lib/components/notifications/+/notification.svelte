<script lang="ts" context="module">
	const {
		elements,
		helpers,
		states: { toasts },
		actions: { portal }
	} = createToaster<ToastData>();

	export const addToast = helpers.addToast;
	export const updateToast = helpers.updateToast;
	export const removeToast = helpers.removeToast;
</script>

<script lang="ts">
	// Imports
	import { createToaster } from '@melt-ui/svelte';
	import { flip } from 'svelte/animate';
	import { UToast } from '$lib/index.js';
	import type { ToastData } from '../toast/toast.js';
	import { twJoin } from 'tailwind-merge';

	// Props
	let _class: string = '';
	export { _class as class };

	// Config
	const css = {
		portal: 'fixed right-0 top-0 z-50 m-4 flex flex-col items-end gap-2 md:bottom-0 md:top-auto'
	};

	// Reactive
	$: portalCSS = twJoin(css.portal, _class);
</script>

<div class={portalCSS} use:portal>
	{#each $toasts as toast (toast.id)}
		<div animate:flip={{ duration: 500 }}>
			<slot {UToast}>
				<UToast {elements} {toast} />
			</slot>
		</div>
	{/each}
</div>
