<script lang="ts">
	export let href: string = '';
</script>

<svelte:element this={href ? 'a' : 'button'}> </svelte:element>
