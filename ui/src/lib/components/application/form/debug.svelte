<script lang="ts">
	/** Imports */
	import SuperDebug from 'sveltekit-superforms';
	import type { FormDebugProps } from './debug.js';

	/** Props */
	let { ...props }: FormDebugProps = $props();
</script>

<SuperDebug {...props} />
