<script lang="ts">
	export let as: string = 'div';
	const style = {
		base: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
	};
</script>

<svelte:element this={as} class={style.base}>
	<slot />
</svelte:element>
