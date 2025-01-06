<script lang="ts">
	/** Imports */
	import type { ToKebab } from '$lib/types/utils.js';
	import type { XFormProps } from './root.js';

	/** Props */
	let { children, ...props }: ToKebab<XFormProps> = $props();
</script>

<form {...props}>
	{@render children?.()}
</form>
