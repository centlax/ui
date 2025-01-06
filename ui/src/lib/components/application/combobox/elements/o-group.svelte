<script lang="ts">
	import type { ToKebab } from '$lib/types/utils.js';
	import { toCamel } from '$lib/utils/props.js';
	import { Combobox, type ComboboxGroupProps } from 'bits-ui';
	type Props = ComboboxGroupProps;
	let { children, ...props }: ToKebab<Props> = $props();
</script>

<Combobox.Group {...toCamel(props)}>
	<Combobox.GroupHeading />
	{@render children?.()}
</Combobox.Group>
