<script lang="ts">
	import { createDatePicker, melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';
	import { CalendarDate } from '@internationalized/date';
	import { UCalendar } from '$lib/components/export.js';

	const {
		elements: { content, field, segment, trigger },
		states: { months, headingValue, weekdays, segmentContents, open },
		helpers: { isDateDisabled, isDateUnavailable },
		options: { locale }
	} = createDatePicker();
</script>

<div data-melt-datefield-field use:melt={$field}>
	{#key $locale}
		{#each $segmentContents as seg}
			<div data-melt-datefield-segment use:melt={$segment(seg.part)}>
				{seg.value}
			</div>
		{/each}
	{/key}
	<div>
		<button use:melt={$trigger}> [] </button>
	</div>
</div>

<style lang="postcss">
	[data-melt-datefield-field] {
		@apply ml-4 flex w-full items-center justify-end;
	}
	[data-melt-datefield-field] {
		@apply border-primary-400/60 text-primary-800 mt-0.5 flex w-full min-w-[160px] items-center rounded-lg border bg-white p-1.5 shadow-md;
	}

	[data-melt-datefield-field][data-invalid] {
		@apply border-red-400;
	}

	[data-melt-datefield-segment][data-invalid] {
		@apply text-red-500;
	}

	[data-melt-datefield-segment]:not([data-segment='literal']) {
		@apply px-0.5;
	}

	[data-melt-datefield-validation] {
		@apply self-start text-red-500;
	}
</style>
