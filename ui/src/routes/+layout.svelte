<script lang="ts">
	import '../app.css';
	import { UProvider } from '$lib/index.js';
	let { children } = $props();
</script>

<UProvider>
	{@render children()}
</UProvider>
