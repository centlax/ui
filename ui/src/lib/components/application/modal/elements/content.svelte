<script lang="ts">
	import { Dialog, type DialogContentProps } from 'bits-ui';
	let { children, ...content }: DialogContentProps = $props();
</script>

<Dialog.Portal>
	<Dialog.Overlay />
	<Dialog.Content {...content}>
		{@render children?.()}
	</Dialog.Content>
</Dialog.Portal>
