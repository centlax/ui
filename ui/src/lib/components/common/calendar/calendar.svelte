<script lang="ts" generics="Range extends boolean = false, Multiple extends boolean = false">
	import { melt } from '@melt-ui/svelte';
	import { type CalendarProps, calendar as styles } from './calendar.js';
	import { useUI } from '$lib/composables/ui.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { createCalendar, ctxCalendar } from './calendar.svelte.js';
	import { UCalendarFooter, UCalendarHeader, UCalendarMain } from '$lib/index.js';

	let { value = $bindable(), ...props }: CalendarProps<Range, Multiple> = $props();

	let { bound: boundCalendar, range: rangeCalendar } = createCalendar<Range, Multiple>(props);
	const calendar = props.range ? rangeCalendar : boundCalendar;

	const {
		elements: { calendar: root, heading, grid, cell, prevButton, nextButton },
		states
	} = calendar;

	const ctx = ctxCalendar();
	ctx.set(calendar);

	const { months, headingValue, weekdays, value: v } = states;
	$effect(() => {
		$v = value;
	});
	$effect(() => {
		//@ts-ignore
		value = $v;
	});

	/** Styles */
	const ui = useUI(styles, props.class, props.override);
</script>

<div use:melt={$root} class={cn(st(ui.root), ui.class)}>
	{#if props.children}
		{@render props.children?.()}
	{:else}
		{#if props.header}
			{@render props.header?.()}
		{:else}
			<UCalendarHeader />
		{/if}
		{#if props.main}
			{@render props.main?.()}
		{:else}
			<UCalendarMain />
		{/if}
		{#if props.footer}
			{@render props.footer?.()}
		{:else}
			<UCalendarFooter />
		{/if}
	{/if}
</div>
