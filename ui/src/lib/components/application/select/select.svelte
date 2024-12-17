<script lang="ts">
	let { ...props } = $props();
</script>

<select>
	{@render props.children()}
</select>
