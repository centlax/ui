<script lang="ts">
	import { Dialog as Primitive, type DialogContentProps } from 'bits-ui';
	let { children, ...content }: DialogContentProps = $props();
</script>

<Primitive.Portal>
	<Primitive.Overlay />
	<Primitive.Content {...content}>
		{@render children?.()}
	</Primitive.Content>
</Primitive.Portal>
