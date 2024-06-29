<script lang="ts">
	import Aside from '$lib/components/aside/aside.svelte';
</script>

<div class="overflow-hidden bg-white dark:bg-gray-900/20">
	<div class="max-w-8xl mx-auto  ">
		<Aside />
		<div class="lg:pl-[15rem]  ">
			<slot />
		</div>
	</div>
</div>
