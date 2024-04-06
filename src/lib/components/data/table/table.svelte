<script lang="ts">
	export let title: string = 'table';
</script>

<table>
	<caption>{title}</caption>
	<slot name="head" />
	<slot />
	<slot name="foot" />
</table>
