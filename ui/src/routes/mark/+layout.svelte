<script lang="ts">
	import { UMark } from '$lib/index.js';
	let { children } = $props();
</script>

<UMark.Layout>
	<UMark.Header />
	<UMark.Aside>
		<div class="pointer-events-none sticky top-0 -ml-0.5">
			<div class="h-10 bg-white dark:bg-neutral-900"></div>
		
			<div class="h-8 bg-gradient-to-b from-white dark:from-neutral-900"></div>
		</div>
		<UMark.ANorth />
		<UMark.AItems />
		<UMark.ASouth />
	</UMark.Aside>
	<UMark.Main>
		{@render children()}
	</UMark.Main>
	<UMark.Footer />
</UMark.Layout>
