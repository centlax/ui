<script lang="ts">
	import { UBadge, useDark } from '$lib/index.js';
</script>

<button on:click={() => useDark().toggle()}>MODE</button>
<div class="flex justify-center items-center w-full h-lvh">
	<UBadge dot color="green">Badge</UBadge>
</div>
