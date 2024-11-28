<script lang="ts">
	import { UProvider } from '@centlax/ui';
	import '$lib/assets/app.css';
	let { children } = $props();
</script>

<UProvider class="h-full w-full bg-white dark:bg-neutral-900">
	{@render children()}
</UProvider>
