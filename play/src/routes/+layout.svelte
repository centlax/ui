<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import { UProvider } from '@centlax/ui';
</script>

<UProvider>
	{@render children()}
</UProvider>
