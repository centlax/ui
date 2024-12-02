<script lang="ts">
	import { createCalendar, createSync, melt } from '@melt-ui/svelte';
	import { type CalendarProps, calendar } from './calendar.js';
	import { useUI } from '$lib/composables/ui.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { writable } from 'svelte/store';
	import { calendarDefaults } from './calendar.svelte.js';

	let { ...props }: CalendarProps = $props();
	let value = writable(props['value']);

	const {
		elements: { calendar: root, heading, grid, cell, prevButton, nextButton },
		states: { months, headingValue, weekdays },
		helpers: { isDateDisabled, isDateUnavailable, isDateSelected, nextPage }
	} = createCalendar({
		multiple: props['multiple'],
		onValueChange: props['on-value-change'],
		defaultValue: props['default-value'],
		defaultPlaceholder: props['default-placeholder'],
		onPlaceholderChange: props['on-placeholder-change'],
		isDateDisabled: props['is-date-disabled'],
		isDateUnavailable: props['is-date-unavailable'],
		value: value,
		preventDeselect: props['prevent-deselect'],
		numberOfMonths: props['number-of-months'],
		pagedNavigation: props['paged-navigation'],
		weekStartsOn: props['week-starts-on'],
		calendarLabel: props['calendar-label'],
		locale: props['locale'] ?? calendarDefaults['locale'],
		minValue: props['min-value'],
		maxValue: props['max-value'],
		disabled: props['disabled'],
		readonly: props['readonly'],
		weekdayFormat: props['weekday-format'],
		ids: props['ids']
	});

	/** Styles */
	const ui = useUI(calendar, props.class, props.override);
</script>

<div use:melt={$root} class={cn(st(ui.root), ui.class)}>
	<header class={st(ui.header)}>
		<button use:melt={$prevButton} class={st(ui.header.prev)}>
			{@render props.prev?.()}
			prev
		</button>
		<div use:melt={$heading} class={st(ui.header.heading)}>
			{$headingValue}
		</div>
		<button use:melt={$nextButton} class={st(ui.header.next)}>
			{@render props.prev?.()}
			next
		</button>
	</header>

	<main class={st(ui.main)}>
		{#each $months as month}
			<table use:melt={$grid} class={st(ui.main.month)}>
				<thead class={st(ui.main.month.head)}>
					<tr class={st(ui.main.month.head.week)}>
						{#each $weekdays as day}
							<th class={st(ui.main.month.head.week.day)}>
								{day}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody class={st(ui.main.month.body)}>
					{#each month.weeks as weekDates}
						<tr class={st(ui.main.month.body.week)}>
							{#each weekDates as date}
								<td
									class={st(ui.main.month.body.week.day)}
									aria-disabled={$isDateDisabled(date) || $isDateUnavailable(date)}
									use:melt={$cell(date, month.value)}
								>
									{date.day}
								</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		{/each}
	</main>
</div>
