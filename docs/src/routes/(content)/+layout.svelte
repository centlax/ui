<script lang="ts">
	import Aside from '$lib/components/aside/aside/aside.svelte';
</script>

<div class="overflow-hidden bg-white dark:bg-gray-900/20">
	<div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
		<Aside />
		<div class="lg:pl-[19.5rem]">
			<slot />
		</div>
	</div>
</div>
