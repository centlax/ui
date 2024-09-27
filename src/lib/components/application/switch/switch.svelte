<script lang="ts">
	import { createSwitch, melt } from '@melt-ui/svelte';

	const {
		elements: { root, input }
	} = createSwitch();
</script>

<button use:melt={$root}>
	<span id="thumb"> </span>
	<input use:melt={$input} />
</button>
