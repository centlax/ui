<script lang="ts">
	import { toCamel } from '$lib/utils/props.js';
	import {
		Tooltip as Primitive,
		type TooltipContentProps,
		type TooltipPortalProps,
		type TooltipPortalPropsWithoutHTML
	} from 'bits-ui';
	type Props = TooltipContentProps & {
		portal?: TooltipPortalPropsWithoutHTML;
	};
	let { children, portal, ...props }: Props = $props();
</script>

<Primitive.Portal {...toCamel({ ...portal })}>
	<Primitive.Content {...toCamel(props)}>
		{@render children?.()}
	</Primitive.Content>
</Primitive.Portal>
