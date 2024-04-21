<script lang="ts">
	import { UButton, UContainer, UDash, UDashFoot, UIcon, UInputPin } from '$lib/index.js';
	import type { SafelistColors } from '$lib/theme/safelist.js';
	let color: SafelistColors = 'primary';
</script>

<UContainer class="bg-white dark:bg-gray-900 flex items-center gap-4">
	<div class="h-[100px] mb-[2rem] w-full">PEACE</div>
	<UButton
		leading
		bind:color
		label="Set up template"
		icon="i-fluent-add-circle-20-filled"
		class="hover:backdrop-brightness-110"
		on:dblclick={() => console.log('SHIMMY')}
	/>
	<UButton
		leading
		bind:color
		label="Set up template"
		icon="i-fluent-add-circle-20-filled"
		class="bg-green-500/80"
		on:dblclick={() => console.log('SHIMMY')}
	/>
	<button class="hover:backdrop-brightness-25 bg-green-600/90 ...">
		<!-- ... -->df
	</button>
	<input bind:value={color} />
	{color}
	<UButton
		class="bg-green-500 ring-1 ring-green-400 ring-inset"
		leading
		label="Click me"
		icon="i-fluent-add-circle-20-filled"
		on:dblclick={() => console.log('SHIMMY')}
	/>
</UContainer>
