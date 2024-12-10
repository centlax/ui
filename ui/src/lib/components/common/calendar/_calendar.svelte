<script lang="ts" generics="Range extends boolean = false, Multiple extends boolean = false">
	import { melt } from '@melt-ui/svelte';
	import { type CalendarProps, calendar as styles } from './__calendar.js';
	import { useUI } from '$lib/composables/ui.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { createCalendar, ctxCalendar } from './_calendar.svelte.js';
	import { UCalendarFooter, UCalendarHeader, UCalendarMain } from '$lib/index.js';

	let { ...props }: CalendarProps<Range, Multiple> = $props();

	let calendar = createCalendar<Range, Multiple>(props);

	const {
		elements: { calendar: root },
		states
	} = calendar;

	const ctx = ctxCalendar();
	ctx.set(calendar);

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
