<script lang="ts">
	/** Imports */
	import { enhance } from '$app/forms';
	import type { ToKebab } from '$lib/types/utils.js';
	import type { XForm } from './root.js';

	/** Props */
	let { children, attrs, ...props }: ToKebab<XForm> = $props();
	const action = $state(props.action ?? enhance);
</script>

<form {...props} {...attrs} use:action>
	{@render children?.()}
</form>
