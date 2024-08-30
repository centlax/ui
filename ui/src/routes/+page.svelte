<script lang="ts">
	import { UButton, useDark } from '$lib/index.js';
	const dark = useDark();
</script>

<UButton color="amber" label="Click me!" on:click={dark.toggle} />
