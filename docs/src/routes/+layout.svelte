<script lang="ts">
	import { UProvider } from '@centlax/ui';
	import '$lib/assets/app.css';
	let { children } = $props();
</script>

<UProvider class="bg-white dark:bg-neutral-900 h-full w-full">
	{@render children()}
</UProvider>


