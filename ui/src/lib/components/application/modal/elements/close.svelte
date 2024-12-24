<script lang="ts">
	import { Dialog as Primitive } from 'bits-ui';
	let { children } = $props();
</script>

<Primitive.Close>
	{@render children?.()}
</Primitive.Close>
