<script lang="ts">
	import { UPage, UContainer, UAside, UNavAccordion } from '@centlax/ui';
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

<UContainer>
	<UPage>
		<UAside slot="west">
			<UNavAccordion {links} />
		</UAside>
		<slot />
	</UPage>
</UContainer>
