<script lang="ts">
	import { UButton, UCard, UColorMode, UContainer, UInput } from '$lib/index.js';
</script>

<UContainer class="p-5">
	<UColorMode />
	<UCard>
		<UButton color="magnum" variant="soft" icon="i-fluent-person-24-regular" label="Button" />
		<UInput load dir="west" mask color="pink" />
	</UCard>
</UContainer>
