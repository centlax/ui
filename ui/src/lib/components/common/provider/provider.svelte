<script lang="ts">
	/** Imports */
	import { type ProviderProps } from './provider.js';
	import { ModeWatcher } from 'mode-watcher';
	import UToast from '../toast/toast.svelte';
	import { root } from './color.svelte.js';
	import { useApp } from '$lib/plugins/index.js';

	/** Props */
	let {opts, ...props }: ProviderProps = $props();
	useApp(opts, true)
</script>

<ModeWatcher />

<svelte:head>
	{@html root()}
</svelte:head>

<UToast />

{@render props.children?.()}
