<script lang="ts">
	// imports
	import { twJoin } from 'tailwind-merge';
	// props
	let classProp: string = '';
	export let name: string;
	export { classProp as class };
	// reactive
	$: spanUI = twJoin('text-current', name, classProp);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<span class={spanUI} on:click on:mouseenter on:mouseleave {...$$restProps} />
