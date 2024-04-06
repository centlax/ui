<script lang="ts">
	import {
		UPanel,
		UContainer,
		UPanelAside,
		UPanelMain,
		UVerticalNavigation,
		UColorMode
	} from '$lib/index.js';
</script>

<UContainer padding={false}>
	<UPanel>
		<UPanelAside name="Depot" slot="aside">
			<UVerticalNavigation />
		</UPanelAside>
		<UPanelMain slot="main">
			<UColorMode />
		</UPanelMain>
	</UPanel>
</UContainer>
