<script lang="ts">
	/** Imports */
	import { type ProviderProps } from './provider.js';
	import { ModeWatcher } from 'mode-watcher';
	import { root } from './color.svelte.js';
	import { setApp, useApp } from '$lib/plugins/index.js';
	import Toast from '$lib/internal/elements/toast/toast.svelte';

	/** Props */
	let { opts, ...props }: ProviderProps = $props();
	setApp(opts);
	const { colors } = useApp();
</script>

<ModeWatcher />

<svelte:head>
	{@html root(colors)}
</svelte:head>

<Toast />

{@render props.children?.()}
