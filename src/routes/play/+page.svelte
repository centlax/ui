<script lang="ts">
	import { UAvatar, UAvatarGroup, UColorMode } from '$lib/index.js';
</script>

<UColorMode />
<div class="flex justify-center items-center h-full">
	<UAvatarGroup
		max={2}
		avatars={[{ alt: 'Shimmy Rukundo' }, { alt: 'Benjamin Nith' }, { alt: 'Julias Santi' }]}
	/>
</div>
