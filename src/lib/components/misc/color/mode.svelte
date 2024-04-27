<script lang="ts">
	import { UButton, UIcon } from '$lib/index.js';
	import { toggleMode } from 'mode-watcher';
</script>

<UButton square color="gray" on:click={toggleMode}>
	<UIcon name="i-fluent-weather-sunny-24-filled dark:i-fluent-weather-moon-24-filled" />
</UButton>
