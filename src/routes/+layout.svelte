<script lang="ts">
	import { ULayout } from '$lib/index.js';
	import '../app.css';
	let { children } = $props();
</script>

<ULayout>
	{@render children()}
</ULayout>
