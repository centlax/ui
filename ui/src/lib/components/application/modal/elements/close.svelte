<script lang="ts">
	import { Dialog } from 'bits-ui';
	let { children } = $props();
</script>

<Dialog.Close>
	{@render children?.()}
</Dialog.Close>
