<script lang="ts">
	/** Imports */
	import type { ToKebab } from '$lib/types/utils.js';
	import type { XForm } from './root.js';

	/** Props */
	let { children, ...props }: ToKebab<XForm> = $props();
</script>

<form {...props}>
	{@render children?.()}
</form>
