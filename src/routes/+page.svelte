<script lang="ts">
	import {
		UAccordion,
		UBadge,
		UButton,
		UColorMode,
		UContainer,
		UKbd,
		UNavTree
	} from '$lib/index.js';
	import { useToast } from '$lib/composables/useToast.js';
	import { generator } from '$lib/utils/safer.js';
	const toast = useToast();

	const links = [
		{
			title: 'Getting Started',
			children: [
				{ title: 'Introduction' },
				{ title: 'Installation' },
				{ title: 'Theming' },
				{ title: 'Shortcuts' }
			]
		}
	];
</script>

<UColorMode />
<UContainer>
	<div class="flex">
		<UNavTree accordion={{ links }} />
	</div>
</UContainer>
