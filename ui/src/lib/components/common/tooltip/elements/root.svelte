<script lang="ts">
	import type { ToKebab } from '$lib/types/utils.js';
	import { toCamel } from '$lib/utils/props.js';
	import {
		Tooltip as Primitive,
		type TooltipProviderPropsWithoutHTML,
		type TooltipRootPropsWithoutHTML
	} from 'bits-ui';
	type Props = TooltipRootPropsWithoutHTML & {
		provider?: TooltipProviderPropsWithoutHTML;
	};
	let { open = $bindable(false), children, provider, ...props }: ToKebab<Props> = $props();
</script>

<Primitive.Provider {...toCamel({ ...provider })}>
	<Primitive.Root bind:open {...toCamel(props)}>
		{@render children?.()}
	</Primitive.Root>
</Primitive.Provider>
