<script lang="ts">
	// Imports
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import type { FormProps } from './form.props.js';

	// Props
	type $$Props = FormProps;
	export let use: Function = () => {};
	export let data: any = null;
	export let debug: boolean = false;
</script>

<form use:use {...$$restProps}>
	{#if debug}
		<SuperDebug {data} />
	{/if}
	<slot />
</form>
