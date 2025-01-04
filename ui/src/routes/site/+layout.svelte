<script lang="ts">
	import Logo from '$lib/blocks/logo.svelte';
	import { USite } from '$lib/index.js';
	let { children } = $props();
	let open = $state(false);
</script>

{#snippet centlax()}
	<Logo />
{/snippet}

<USite.Layout logo={centlax}>
	<USite.Header>
		<USite.HWest on-open-aside={() => (open = !open)} />
		<USite.HItems />
		<USite.HEast />
	</USite.Header>
	<USite.Aside bind:open>
		<USite.ANorth />
		<USite.AItems data={[]} />
		<USite.ASouth />
	</USite.Aside>
	<USite.Main>
		{@render children()}
	</USite.Main>
	<USite.Footer>
		<USite.FBlock />
		<USite.FItems data={[]} />
	</USite.Footer>
</USite.Layout>
