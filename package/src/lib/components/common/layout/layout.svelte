<script lang="ts">
	/** Imports */
	import { ModeWatcher } from 'mode-watcher';
	import { UNotification } from '$lib/index.js';

	/** Props */
	export let notification: boolean = false;
</script>

<ModeWatcher />
{#if notification}
	<UNotification />
{/if}
<slot />
