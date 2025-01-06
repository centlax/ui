<script lang="ts">
	import Logo from '$lib/blocks/logo.svelte';
	import { ULand } from '$lib/index.js';
	let { children } = $props();
	let open = $state(false);
</script>

{#snippet centlax()}
	<Logo />
{/snippet}

<ULand.Layout logo={centlax}>
	<ULand.Header>
		<ULand.HWest on-open-aside={() => (open = !open)} />
		<ULand.HItems
			data={[
				{
					text: 'Product',
					icon: 'i-fluent-data-pie-24-regular'
				},

				{ text: 'Features', icon: 'i-fluent-data-pie-24-regular' },
				{ text: 'Marketplace', icon: 'i-fluent-data-pie-24-regular' },
				{ text: 'Company', icon: 'i-fluent-data-pie-24-regular' }
			]}
		/>
		<ULand.HEast />
	</ULand.Header>
	<ULand.Aside bind:open>
		<ULand.ANorth />
		<ULand.AItems data={[]} />
		<ULand.ASouth />
	</ULand.Aside>
	<ULand.Main>
		{@render children()}
	</ULand.Main>
	<ULand.Footer>
		<ULand.FBlock
			title="Subscribe to our newsletter"
			description="Making the world a better place through constructing elegant hierarchies."
		/>

		<ULand.FItems
			data={[
				{
					title: 'Solutions',
					items: [
						{ text: 'Marketing', href: '/' },
						{ text: 'Analytics', href: '/' },
						{ text: 'Automation', href: '/' },
						{ text: 'Commerce', href: '/' },
						{ text: 'Insights', href: '/' }
					]
				},
				{
					title: 'Support',
					items: [
						{ text: 'Submit ticket', href: '/' },
						{ text: 'Documentation', href: '/' },
						{ text: 'Guides', href: '/' }
					]
				},
				{
					title: 'Company',
					items: [
						{ text: 'About', href: '/' },
						{ text: 'Blog', href: '/' },
						{ text: 'Jobs', href: '/' },
						{ text: 'Press', href: '/' }
					]
				},
				{
					title: 'Legal',
					items: [
						{ text: 'Terms of service', href: '/' },
						{ text: 'Privacy policy', href: '/' },
						{ text: 'License', href: '/' }
					]
				}
			]}
		/>
	</ULand.Footer>
</ULand.Layout>
