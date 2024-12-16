<script lang="ts" generics="Range extends boolean = false, Multiple extends boolean = false">
	import { createSync, melt } from '@melt-ui/svelte';
	import { type CalendarProps, type CalendarValue, calendar as styles } from './calendar.js';
	import { useUI } from '$lib/composables/ui.js';
	import { cn, st } from '$lib/internal/utils/wind.js';
	import { createCalendar, ctxCalendar } from './calendar.svelte.js';
	import { UCalendarFooter, UCalendarHeader, UCalendarMain } from '$lib/index.js';
	import { today } from '@internationalized/date';
	import type { Writable } from 'svelte/store';

	let {
		as = 'div',
		value = $bindable(),
		placeholder = $bindable(today('UTC')),
		...props
	}: CalendarProps<Range, Multiple> = $props();

	let { bound: boundCalendar, range: rangeCalendar } = createCalendar<Range, Multiple>(props);
	const calendar = props.range ? rangeCalendar : boundCalendar;

	const {
		elements: { calendar: root },
		states
	} = calendar;

	const ctx = ctxCalendar();
	ctx.set(calendar);

	const sync = createSync({
		value: states['value'] as Writable<CalendarValue<Range, Multiple> | undefined>,
		placeholder: states['placeholder']
	});
	$effect(() => {
		sync.value(value, (v) => (value = v));
		sync.placeholder(placeholder, (p) => (placeholder = p));
	});

	/** Styles */
	const ui = useUI(styles, props.class, props.override);
</script>

<svelte:element this={as} use:melt={$root} class={cn(st(ui.root), ui.class)}>
	{#if props.children}
		{@render props.children?.()}
	{:else}
		{#if props.header}{@render props.header?.()}{:else}
			<UCalendarHeader />
		{/if}
		{#if props.main}{@render props.main?.()}{:else}
			<UCalendarMain />
		{/if}
		{#if props.footer}{@render props.footer?.()}{:else}
			<UCalendarFooter />
		{/if}
	{/if}
</svelte:element>
