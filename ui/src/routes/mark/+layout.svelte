<script lang="ts">
	import { UMark } from '$lib/index.js';
	let { children } = $props();
</script>

<UMark.Layout>
	<UMark.Header/>
	<UMark.Aside>
		<UMark.ANorth />
		<UMark.AItems />
		<UMark.ASouth />
	</UMark.Aside>
	<UMark.Main>
		{@render children()}
	</UMark.Main>
	<UMark.Footer />
</UMark.Layout>
