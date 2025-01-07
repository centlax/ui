<script lang="ts">
	/** Imports  */
	import { fieldGroup$, type XFieldGroup } from './group.js';
	import { useUI } from '$lib/composables/ui.svelte.js';
	import { st, cn } from '$lib/utils/wind.js';

	/** Props  */
	let { children, attrs,...props }: XFieldGroup = $props();

	/** Styles  */
	const ui = useUI(fieldGroup$, props.class, props.override);
</script>


<fieldset {...props} {...attrs} class={cn(st(ui.root), ui.class)}>
	{@render children?.()}
</fieldset>
