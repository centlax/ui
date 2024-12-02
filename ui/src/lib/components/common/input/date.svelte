<script lang="ts">
	import { createDatePicker, melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';
	import { CalendarDate } from '@internationalized/date';
	import { UCalendar, UPopover, UToggle } from '$lib/components/export.js';
	import { writable } from 'svelte/store';

	const {
		elements: { content, field, segment, trigger, hiddenInput },
		states: { months, headingValue, weekdays, segmentContents, open },
		helpers: { isDateDisabled, isDateUnavailable },
		options: { locale }
	} = createDatePicker({});
</script>

<div use:melt={$field} class="flex">
	{#key $locale}
		{#each $segmentContents as seg}
			<div data-melt-datefield-segment use:melt={$segment(seg.part)}>
				{seg.value}
			</div>
		{/each}
	{/key}
</div>
