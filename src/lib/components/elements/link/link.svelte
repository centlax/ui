<!-- Link.svelte -->
<script lang="ts">
	export let href: string = '';
	export let label: string = '';
	export let as: string = 'a'; // Default to anchor tag for semantic correctness and accessibility
</script>

{#if href}
	<!-- Use an anchor tag when "as" is "a" and a "link" is provided -->
	<a {href} {...$$restProps}>
		<slot><span>{label}</span></slot>
	</a>
{:else}
	<!-- Use svelte:element for other cases, handling button clicks explicitly -->
	<svelte:element this={as} {...$$restProps}>
		<slot />
	</svelte:element>
{/if}
