<script lang="ts">
	import { UButton, UIcon } from '$lib/components/export.js';
	import { useDark } from '$lib/composables/dark.js';
	const dark = useDark();
</script>

<div class="hidden items-center gap-x-3 lg:flex lg:flex-1 lg:justify-end">
	<a href="/" class="text-sm/6 font-semibold text-neutral-900"
		>Log in <span aria-hidden="true">&rarr;</span></a
	>

	<button
		onclick={dark.toggle}
		class="focus-visible:ring-primary-500 inline-flex flex-shrink-0 items-center rounded-full bg-neutral-50 p-1.5 text-sm font-medium text-neutral-700 shadow-sm ring-1 ring-inset ring-neutral-300 hover:bg-neutral-100 focus:outline-none focus-visible:outline-0 focus-visible:ring-2 disabled:cursor-not-allowed disabled:bg-neutral-50 disabled:opacity-75 dark:bg-neutral-800 dark:text-neutral-200 dark:ring-neutral-700 dark:hover:bg-neutral-700/50 dark:disabled:bg-neutral-800"
	>
		<UIcon
			name="text-current i-fluent-weather-sunny-20-filled dark:i-fluent-weather-moon-20-filled flex-shrink-0 size-5"
		/>
	</button>
</div>
