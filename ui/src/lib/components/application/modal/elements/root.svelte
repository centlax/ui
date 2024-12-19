<script lang="ts">
	import { Dialog } from 'bits-ui';
	import { type ModalRootProps, createModal } from '../modal.svelte.js';
	let { ...props }: ModalRootProps = $props();
	const {
		elements: { root }
	} = createModal();
</script>

<Dialog.Root {...root(props)}>
	{@render props.children?.()}
</Dialog.Root>
