<script lang="ts">
	import { melt } from '@melt-ui/svelte';
	import { ctxCalendar } from './calendar.svelte.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { useUI } from '$lib/composables/ui.js';
	import { calendarMain, type CalendarMainProps } from './main.js';
	import { slide } from 'svelte/transition';
	import { cubicIn, sineIn } from 'svelte/easing';

	let { ...props }: CalendarMainProps = $props();

	const ctx = ctxCalendar();
	const {
		elements: { grid, cell },
		states: { months, weekdays, value, headingValue },
		helpers: { isDateUnavailable, isDateDisabled }
	} = ctx.get();

	/** Styles */
	const ui = useUI(calendarMain, props.class, props.override);
</script>

<main class={cn(st(ui.root), ui.class)}>
	{#each $months as month, i (i)}
		<table use:melt={$grid} class={st(ui.month)}>
			<thead class={st(ui.month.head)}>
				<tr class={st(ui.month.head.week)}>
					{#each $weekdays as day}
						<th aria-hidden="true">
							<div class={st(ui.month.head.week.day)}>
								{day}
							</div>
						</th>
					{/each}
				</tr>
			</thead>
			<tbody class={st(ui.month.body)}>
				{#each month.weeks as weekDates}
					<tr class={st(ui.month.body.week)}>
						{#each weekDates as date}
							<td
								aria-hidden="true"
								aria-disabled={$isDateDisabled(date) || $isDateUnavailable(date)}
							>
								<div use:melt={$cell(date, month.value)} class={st(ui.month.body.week.day)}>
									{date.day}
								</div>
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	{/each}
</main>
