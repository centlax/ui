<script lang="ts">
	import { UPanel, UContainer, UPanelAside, UPanelMain, UNavY, UColorMode } from '$lib/index.js';
</script>

<UContainer padding={false}>
	<UPanel>
		<UPanelAside name="Depot" slot="aside">
			<UNavY />
		</UPanelAside>
		<UPanelMain slot="main">
			<UColorMode />
		</UPanelMain>
	</UPanel>
</UContainer>
