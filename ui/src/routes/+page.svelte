<script lang="ts">
	import { USheet, UTable } from '$lib/index.js';
	let open = $state(false);
	/** URange */
</script>

<USheet bind:open>
	<USheet.Trigger>OPEN</USheet.Trigger>
	<USheet.Content class="bg-red-500 h-full w-[20rem]">
		OPEN DETAIL
		<USheet.Close>CLOSE</USheet.Close>
	</USheet.Content>
</USheet>

