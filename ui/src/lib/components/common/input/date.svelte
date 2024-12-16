<script lang="ts" generics="Range extends boolean = false">
	/** Imports */
	import { inputDate, type InputDateProps } from './date.js';
	import { useUI } from '$lib/composables/ui.js';
	import { melt } from '@melt-ui/svelte';
	import { createInputDate } from './date.svelte.js';
	import { cn, st } from '$lib/internal/utils/wind.js';
	import { UCalendar, UIcon, UPopover } from '$lib/components/export.js';

	/** Props */
	let { ...props }: InputDateProps<Range> = $props();
	const date = createInputDate(props);

	const {
		share: {
			elements: { root },
			options: { locale }
		},
		field: {
			elements: { segment },
			states: { segmentContents: fieldContent }
		},
		range: {
			elements: { startSegment, endSegment },
			states: { segmentContents: rangeContent }
		}
	} = date;

	/** Styles */
	const ui = useUI(inputDate, props.class, props.override);
	let custom = $state<HTMLElement>(null!);
</script>

{#snippet content$(segs: any, ment: any)}
	{#each segs as seg}
		<div use:melt={ment(seg.part)}>
			{seg.value}
		</div>
	{/each}
{/snippet}

<div bind:this={custom} id="content" use:melt={$root} class={cn(st(ui.root), ui.class)}>
	{#key $locale}
		{#if props.range}
			{@render content$($rangeContent.start, $startSegment)}
			<span aria-hidden="true">-</span>
			{@render content$($rangeContent.end, $endSegment)}
		{:else}
			{@render content$($fieldContent, $segment)}
		{/if}
	{/key}
	<UPopover float={{ placement: 'top' }}>
		{#snippet trigger()}
			<UIcon name="i-fluent-calendar-24-regular" />
		{/snippet}
		{#snippet content()}
			<UCalendar />
		{/snippet}
	</UPopover>
</div>
