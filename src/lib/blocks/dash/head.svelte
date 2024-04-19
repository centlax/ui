<script lang="ts">
	// imports
	import { UButton, UColorMode, UInput } from '$lib/index.js';
	// props
	export let toggle: boolean = false;
	// config
	const css = {
		wrapper: `sticky top-0 z-40 flex h-14 shrink-0 items-center gap-x-6 border-b border-white/5 bg-white dark:bg-gray-900 px-4 shadow-sm sm:px-6 lg:px-8`
	};
</script>

<div class={css.wrapper}>
	<UButton
		size="xs"
		class=" xl:hidden"
		on:click={() => (toggle = !toggle)}
		label={toggle ? 'Close' : 'Open'}
	/>

	<div class="flex items-center flex-1 gap-x-4 justify-between self-stretch lg:gap-x-6">
		<div class="flex-1">
			<slot name="east">
				<form action="/" method="GET">
					<label for="search-field" class="sr-only">Search</label>
					<div class="relative">
						<UInput size="xs" />
					</div>
				</form>
			</slot>
		</div>

		<div class="flex-1"><slot /></div>
		<div class="flex flex-1 justify-end">
			<slot name="west">
				<UColorMode props={{ size: 'xs' }} />
			</slot>
		</div>
	</div>
</div>
