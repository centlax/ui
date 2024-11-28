<script lang="ts">
	import { UProvider } from '@centlax/ui';
	import '$lib/assets/app.css';
	let { children } = $props();
</script>

<UProvider>
	{@render children()}
</UProvider>
