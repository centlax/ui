<script lang="ts">
	import '$lib/assets/app.css';
	import Header from '$lib/components/header/header.svelte';
	import { ULayout, UContainer } from '@centlax/ui';
</script>

<ULayout>
	<Header />

	<UContainer>
		<slot />
	</UContainer>
</ULayout>
