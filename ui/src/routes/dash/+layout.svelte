<script lang="ts">
	import Logo from '$lib/blocks/logo.svelte';
	import { UDash } from '$lib/index.js';
	let { children } = $props();
	let open = $state(false);
</script>

{#snippet centlax()}
	<Logo />
{/snippet}
<UDash.Layout>
	<UDash.Aside bind:open>
		<UDash.ANorth emblem={centlax} />
		<UDash.AItems
			data={[
				{
					title: 'GENERAL',
					items: [
						{ text: 'Dashboard', icon: 'i-fluent-data-pie-24-regular', badge: '5' },
						{ text: 'Team', icon: 'i-fluent-data-pie-24-regular' },
						{ text: 'Projects', icon: 'i-fluent-data-pie-24-regular', badge: '12' },
						{ text: 'Calendar', icon: 'i-fluent-data-pie-24-regular', badge: '+25' },
						{ text: 'Documents', icon: 'i-fluent-data-pie-24-regular' },
						{ text: 'Reports', icon: 'i-fluent-data-pie-24-regular' }
					]
				},
				{
					title: 'CONFIGURATION',
					items: [
						{ text: 'Settings', icon: 'i-fluent-data-pie-24-regular' },
						{ text: 'Support', icon: 'i-fluent-data-pie-24-regular' }
					]
				}
			]}
		/>
		<UDash.ASouth />
	</UDash.Aside>
	<UDash.Header on-open-aside={() => (open = !open)} />
	<UDash.Main>
		{@render children()}
	</UDash.Main>
	<UDash.Footer>
		<UDash.FDock />
		<UDash.FTask />
	</UDash.Footer>
</UDash.Layout>
