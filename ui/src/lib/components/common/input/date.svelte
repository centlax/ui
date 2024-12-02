<script lang="ts">
	/** Imports */
	import { createDateRangeField, melt, type SegmentPart } from '@melt-ui/svelte';
	import type { InputDateProps } from './date.js';

	/** Props */
	let { ...props }: InputDateProps = $props();
	const {
		elements: { field, startSegment, endSegment, label },
		states: { segmentContents },
		options: { locale }
	} = createDateRangeField({
		defaultValue: props['default-value'],
		onValueChange: props['on-value-change'],
		defaultPlaceholder: props['default-placeholder'],
		placeholder: props['placeholder'],
		onPlaceholderChange: props['on-placeholder-change'],
		isDateUnavailable: props['is-date-unavailable'],
		minValue: props['min-value'],
		maxValue: props['max-value'],
		disabled: props['disabled'],
		readonly: props['readonly'],
		//readonlySegments: props['read-only-segments'],
		hourCycle: props['hour-cycle'],
		locale: props['locale'],
		granularity: props['granularity'],
		// name
		required: props['required'],
		ids: props['ids']
		//startIds
	});
</script>

<div use:melt={$field}>
	{#key $locale}
		{#each $segmentContents.start as seg, i (i)}
			<div use:melt={$startSegment(seg.part)}>
				{seg.value}
			</div>
		{/each}
		<span aria-hidden="true">-</span>
		{#each $segmentContents.end as seg, i (i)}
			<div use:melt={$endSegment(seg.part)}>
				{seg.value}
			</div>
		{/each}
	{/key}
</div>
