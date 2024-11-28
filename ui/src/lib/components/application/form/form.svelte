<script lang="ts" generics="T extends Record<string, unknown>">
	import type { FormProps } from './form.js';

	let { ...props }: FormProps<T> = $props();
</script>

<form {...props}>
	{@render props.children?.()}
</form>
