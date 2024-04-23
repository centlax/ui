<script lang="ts">
	import {
		UButton,
		UContainer,
		UDash,
		UDashFoot,
		UIcon,
		UInput,
		USlideover,
		UTooltip
	} from '$lib/index.js';
	import type { SafelistColors } from '$lib/theme/safelist.js';
	let color = 'Shimmy';
</script>

<UContainer class="bg-white dark:bg-gray-900 flex items-center gap-x-1">
	<div class="h-[100px] mb-[2rem] w-full">PEACE</div>
	<UButton
		label="Set up template"
		loading
		variant="solid"
		trailing
		icon={{
			loading: 'i-fluent-add-circle-20-filled'
		}}
		class="hover:backdrop-brightness-110"
		on:dblclick={() => console.log('SHIMMY')}
	/>

	<UButton
		trailing
		icon="i-fluent-add-circle-20-filled"
		class="hover:backdrop-brightness-110"
		on:dblclick={() => console.log('SHIMMY')}
	/>

	{color}
	<UButton
		class="bg-green-500 ring-1 ring-green-400 ring-inset"
		label="Click me"
		on:dblclick={() => console.log('SHIMMY')}
	/>
</UContainer>
