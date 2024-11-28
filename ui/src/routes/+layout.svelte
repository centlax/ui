<script lang="ts">
	import '$lib/theme/app.css';
	import { UProvider } from '$lib/index.js';
	let { children } = $props();
</script>

<UProvider>
	{@render children()}
</UProvider>
