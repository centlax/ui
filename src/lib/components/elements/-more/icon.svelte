<script lang="ts">
	import { twJoin } from 'tailwind-merge';

	export let name: string;
	$: spanUI = twJoin('text-current', $$props.class);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<span class="{name} {spanUI}" on:click on:mouseenter on:mouseleave />
