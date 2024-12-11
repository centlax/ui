<script lang="ts">
	/** Imports */
	import { type ProviderProps } from './provider.js';
	import { ModeWatcher } from 'mode-watcher';
	import UToast from '../toast/toast.svelte';
	import { root } from './color.svelte.js';

	/** Props */
	let { ...props }: ProviderProps = $props();
</script>

<ModeWatcher />

<svelte:head>
	{@html root()}
</svelte:head>
{#if props.toast}
	{@render props.toast()}
{:else}
	<UToast />
{/if}

{@render props.children?.()}
