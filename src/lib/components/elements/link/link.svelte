<!-- Link.svelte -->
<script lang="ts">
	export let to: string = '';
	export let as: string = 'a'; // Default to anchor tag for semantic correctness and accessibility
</script>

{#if to}
	<!-- Use an anchor tag when "as" is "a" and a "link" is provided -->
	<a href={to} {...$$restProps}>
		<slot />
	</a>
{:else}
	<!-- Use svelte:element for other cases, handling button clicks explicitly -->
	<svelte:element this={as} {...$$restProps}>
		<slot />
	</svelte:element>
{/if}
