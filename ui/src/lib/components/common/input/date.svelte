<script lang="ts">
	/** Imports */
	import { createDateRangeField, melt, type SegmentPart } from '@melt-ui/svelte';
	import type { InputDateProps } from './date.js';
	import { UCalendar, UIcon, UPopover } from '$lib/components/export.js';
	import { CalendarDateTime } from '@internationalized/date';

	/** Props */
	let { ...props }: InputDateProps = $props();
	const {
		elements: { field, startSegment, endSegment, startHiddenInput, endHiddenInput },
		states: { segmentContents },
		options: { locale }
	} = createDateRangeField({
		defaultValue: props['default-value'],
		onValueChange: props['on-value-change'],
		defaultPlaceholder: props['default-placeholder'] ?? new CalendarDateTime(2023, 10, 11, 12, 30),
		placeholder: props['placeholder'],
		onPlaceholderChange: props['on-placeholder-change'],
		isDateUnavailable: props['is-date-unavailable'],
		minValue: props['min-value'],
		maxValue: props['max-value'],
		disabled: props['disabled'],
		readonly: props['readonly'],
		//readonlySegments: props['read-only-segments'],
		hourCycle: props['hour-cycle'],
		locale: props['locale'] ?? 'en',
		granularity: props['granularity'],
		// name
		required: props['required'],
		ids: props['ids']
		//startIds
	});
</script>

<div use:melt={$field} class="flex">
	{#key $locale}
		{#each $segmentContents.start as seg, i (i)}
			<div use:melt={$startSegment(seg.part)}>
				{seg.value}
			</div>
		{/each}
		{#if props['range']}
			<span aria-hidden="true">-</span>
			{#each $segmentContents.end as seg, i (i)}
				<div use:melt={$endSegment(seg.part)}>
					{seg.value}
				</div>
			{/each}
		{/if}
		{#if props.picker}
			<UPopover float={{ flip: true }}>
				{#snippet trigger()}
					<div>
						<UIcon name="i-fluent-calendar-24-regular" />
					</div>
				{/snippet}
				{#snippet content()}
					<UCalendar />
				{/snippet}
			</UPopover>
		{/if}
	{/key}
	<input use:melt={$startHiddenInput} />
	<input use:melt={$endHiddenInput} />
</div>
