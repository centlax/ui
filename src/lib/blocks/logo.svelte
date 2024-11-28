<script lang="ts">
	import { cn } from '$lib/utils/wind.js';

	let { ...props } = $props();
</script>

<span
	{...props}
	class={cn(
		'i-fluent-target-arrow-16-filled -ml-1 block size-10 rotate-45 text-sky-500 ',
		props.class
	)}
></span>
