<script lang="ts">
	import { UButton, UIcon } from '$lib/index.js';
	import type { ComponentProps } from 'svelte';
	import { toggleMode } from 'mode-watcher';
	export let props: ComponentProps<UButton>;
</script>

<UButton {...props} square color="gray" on:click={toggleMode}>
	<UIcon name="i-fluent-weather-sunny-24-filled dark:i-fluent-weather-moon-24-filled" />
</UButton>
