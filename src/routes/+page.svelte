<script lang="ts">
	import { UAccordion, UBadge, UButton, UColorMode, UKbd, UNavTree } from '$lib/index.js';
	import { useToast } from '$lib/composables/useToast.js';
	import { generator } from '$lib/utils/safer.js';
	const toast = useToast();

	const links = [
		{
			title: 'Svelte is awesome, huh',
			description: 'Yes, and so are you!',
			children: [
				{ title: 'Svelte is awesome, huh' },
				{ title: 'Svelte is awesome, huh' },
				{ title: 'Svelte is awesome, huh' },
				{ title: 'Svelte is awesome, huh' }
			]
		}
	];
</script>

<UColorMode />
<div class="flex justify-center items-center h-full">
	<UNavTree accordion={{ links }} />
</div>
