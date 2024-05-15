<script lang="ts">
	import { UPage, UContainer, UAside } from '@centlax/ui';
</script>

<UContainer>
	<UPage>
		<UAside slot="west"></UAside>
		<slot />
	</UPage>
</UContainer>
