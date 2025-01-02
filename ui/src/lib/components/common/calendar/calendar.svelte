<script lang="ts" generics="Range extends boolean = false, Multiple extends boolean = false">
	import { createSync, melt } from '@melt-ui/svelte';
	import { type CalendarProps, type CalendarValue, calendar as styles } from './calendar.js';
	import { useUI } from '$lib/composables/ui.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { createCalendar } from './calendar.svelte.js';
	import { today } from '@internationalized/date';
	import type { Writable } from 'svelte/store';
	import { UIcon } from '$lib/components/export.js';

	let {
		as = 'div',
		value = $bindable(),
		placeholder = $bindable(today('UTC')),
		...props
	}: CalendarProps<Range, Multiple> = $props();

	let { bound: boundCalendar, range: rangeCalendar } = createCalendar<Range, Multiple>(props);
	const calendar = props.range ? rangeCalendar : boundCalendar;

	const {
		elements: { calendar: root, heading, grid, cell },
		states,
		helpers: { nextYear, nextPage, prevPage, prevYear, isDateDisabled, isDateUnavailable }
	} = calendar;

	const { headingValue, months, weekdays } = states;

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

{#snippet header()}
	<header class={st(ui.header)}>
		<div class={st(ui.header.prev)}>
			<button onclick={prevYear}>
				<UIcon name="i-fluent-chevron-double-left-16-filled" />
			</button>
			<button onclick={prevPage}>
				<UIcon name="i-fluent-chevron-left-16-filled" />
			</button>
		</div>
		<div use:melt={$heading}>
			<h3 class="text-base">{$headingValue}</h3>
		</div>

		<div class={st(ui.header.next)}>
			<button onclick={nextPage}>
				<UIcon name="i-fluent-chevron-right-20-filled" />
			</button>
			<button onclick={nextYear}>
				<UIcon name="i-fluent-chevron-double-right-20-filled" />
			</button>
		</div>
	</header>
{/snippet}

{#snippet footer()}
	<footer hidden></footer>
{/snippet}

<svelte:element this={as} use:melt={$root} class={cn(st(ui.root), ui.class)}>
	{@render header()}
	<main class={cn(st(ui.root), ui.class)}>
		{#each $months as month, i (i)}
			<table use:melt={$grid} class={st(ui.main.month)}>
				<thead class={st(ui.main.month.head)}>
					<tr class={st(ui.main.month.head.week)}>
						{#each $weekdays as day}
							<th aria-hidden="true">
								<div class={st(ui.main.month.head.week.day)}>
									{day}
								</div>
							</th>
						{/each}
					</tr>
				</thead>
				<tbody class={st(ui.main.month.body)}>
					{#each month.weeks as weekDates}
						<tr class={st(ui.main.month.body.week)}>
							{#each weekDates as date}
								<td
									aria-hidden="true"
									aria-disabled={$isDateDisabled(date) || $isDateUnavailable(date)}
								>
									<div use:melt={$cell(date, month.value)} class={st(ui.main.month.body.week.day)}>
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
	{@render footer()}
</svelte:element>
