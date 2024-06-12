<script lang="ts">
	import type { PageData } from './$types.js';
	export let data: PageData;
	$: doc = data.metadata;
</script>

<main class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
	<div class="mx-auto w-full min-w-0">
		<div class="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
			<div class="overflow-hidden text-ellipsis whitespace-nowrap">Docs</div>
			ChevronRight
			<div class="font-medium text-foreground">{doc.title}</div>
		</div>
	</div>
</main>
