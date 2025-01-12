<script lang="ts">
	/** Imports */
	import { type XTableGCol } from './c-group.js';

	/** Props */
	let { children, attrs, ...props }: XTableGCol = $props();
</script>

<colgroup {...props} {...attrs}>
	{@render children?.()}
</colgroup>
