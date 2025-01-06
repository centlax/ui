<script lang="ts">
	import type { ToKebab } from '$lib/types/utils.js';
	import { toCamel } from '$lib/utils/props.js';
	import { Combobox, type ComboboxContentProps } from 'bits-ui';
	type Props = ComboboxContentProps;
	let { children, ...props }: ToKebab<Props> = $props();
</script>

<Combobox.Root type="single">
	<Combobox.Input />
	<Combobox.Trigger />
	<Combobox.Portal>
		<Combobox.Content {...toCamel(props)}>
			{@render children?.()}
		</Combobox.Content>
	</Combobox.Portal>
</Combobox.Root>
