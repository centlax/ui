<script lang="ts">
	import { createCalendar, melt } from '@melt-ui/svelte';
	import { type CalendarProps, calendar } from './calendar.js';
	import { useUI } from '$lib/composables/ui.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { calendarOptions } from './calendar.svelte.js';

	let { ...props }: CalendarProps = $props();

	const {
		elements: { calendar: root, heading, grid, cell, prevButton, nextButton },
		states: { months, headingValue, weekdays, value },
		helpers: { isDateDisabled, isDateUnavailable, isDateSelected },
		options: { locale }
	} = createCalendar({
		numberOfMonths: props['number-of-months'],
		fixedWeeks: props['fixed-weeks']
	});

	/** Styles */
	const ui = useUI(calendar, props.class, props.override);
</script>

{$value}
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
									role="gridcell"
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
