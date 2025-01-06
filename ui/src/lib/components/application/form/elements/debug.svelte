<script lang="ts">
	/** Imports */
	import SuperDebug from 'sveltekit-superforms';
	import type { XFormDebug } from './debug.js';
	import type { ToKebab } from '$lib/types/utils.js';

	/** Props */
	let { ...props }: ToKebab<XFormDebug> = $props();
</script>

<SuperDebug {...props} />
