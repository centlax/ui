<script lang="ts">
	import { UButton, UInput } from "$lib/index.js";

	export let toggle:boolean = false;
</script>



<div
	class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 bg-gray-900 px-4 shadow-sm sm:px-6 lg:px-8"
>
	<UButton size='xs' class=" xl:hidden" on:click={() => (toggle =! toggle) } label={toggle? 'Close':'Open'}/>
	

	<div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
		<form class="flex flex-1" action="/" method="GET">
			<label for="search-field" class="sr-only">Search</label>
			<div class="relative w-[30%] my-auto">
			
				<UInput/>
			
			</div>
		</form>
	</div>
</div>
