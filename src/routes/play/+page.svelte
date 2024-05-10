<script lang="ts">
	import { UAvatar, UAvatarGroup, UBadge, UButton, UColorMode } from '$lib/index.js';
</script>

<UColorMode />
<div class="flex justify-center items-center h-full">
	<UButton label="Click me!"/>
	<UBadge remove indicator variant="soft" label="Delete" color="green" size="lg" />
</div>
