<script lang="ts">
	import { Dialog } from 'bits-ui';
	let { children } = $props();
</script>

<Dialog.Trigger>
	{@render children?.()}
</Dialog.Trigger>
