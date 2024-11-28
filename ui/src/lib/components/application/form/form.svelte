<script lang="ts" generics="T extends Record<string, unknown>">
	import { ctxForm } from '$lib/composables/form.js';
	import type { FormProps } from './form.js';

	let { ...props }: FormProps<T> = $props();

	const form = ctxForm();
	form.set(props.form);
</script>

{#if props.form}
	<form use:props.form.enhance {...props}>
		{@render props.children?.()}
	</form>
{:else}
	<form {...props}>
		{@render props.children?.()}
	</form>
{/if}
