<script lang="ts">
	import { Tooltip } from "bits-ui";
</script>
 
<Tooltip.Provider>
	<Tooltip.Root>
		<Tooltip.Trigger />
		<Tooltip.Portal>
			<Tooltip.Content side='bottom'>
				<Tooltip.Arrow />
			</Tooltip.Content>
		</Tooltip.Portal>
	</Tooltip.Root>
</Tooltip.Provider>