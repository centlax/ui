<script lang="ts">
	import { createCalendar, createSync, melt } from '@melt-ui/svelte';
	import { type CalendarProps, calendar } from './calendar.js';
	import { useUI } from '$lib/composables/ui.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { calendarDefaults } from './calendar.svelte.js';
	import { UIcon, UPopover } from '$lib/components/export.js';
	import { CalendarDate } from '@internationalized/date';

	let { ...props }: CalendarProps = $props();

	const {
		elements: { calendar: root, heading, grid, cell, prevButton, nextButton },
		states: { months, headingValue, weekdays, value },
		helpers: {
			isDateDisabled,
			isDateUnavailable,
			isDateSelected,
			nextYear,
			nextPage,
			prevPage,
			prevYear
		},
		options
	} = createCalendar({
		multiple: props['multiple'],
		onValueChange: props['on-value-change'],
		defaultValue: props['default-value'] ?? new CalendarDate(2024, 1, 11),
		defaultPlaceholder: props['default-placeholder'],
		onPlaceholderChange: props['on-placeholder-change'],
		isDateDisabled: props['is-date-disabled'],
		isDateUnavailable: props['is-date-unavailable'],
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
		<div class={st(ui.header.prev)}>
			<button onclick={prevYear}>
				<UIcon name="i-fluent-chevron-double-left-20-filled" />
			</button>
			<button onclick={prevPage}>
				<UIcon name="i-fluent-chevron-left-20-filled" />
			</button>
		</div>
		<div use:melt={$heading} class={st(ui.header.heading)}>
			<UPopover
				float={{
					placement: 'bottom',
					sameWidth: props['number-of-months'] && props['number-of-months'] > 1 ? true : false
				}}
				class="rounded  bg-neutral-800/10 p-1.5 text-sm font-medium outline-none ring-1 ring-white/10 backdrop-blur-lg"
			>
				{#snippet trigger()}
					<h3 class="text-base">{$headingValue}</h3>
				{/snippet}
				{#snippet content()}
					<div class="mb-2 flex w-full justify-between">
						<button onclick={prevYear}>
							<UIcon name="i-fluent-chevron-left-20-filled" />
						</button>
						{$value?.year}
						<button onclick={nextYear}>
							<UIcon name="i-fluent-chevron-right-20-filled" />
						</button>
					</div>
					<div>
						<div class="grid grid-cols-3 gap-3">
							{#each ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] as month}
								<button class="rounded p-1 text-center hover:bg-neutral-700">
									{month}
								</button>
							{/each}
						</div>
					</div>
				{/snippet}
			</UPopover>
		</div>
		<div class={st(ui.header.next)}>
			{@render props.prev?.()}
			<button onclick={nextPage}>
				<UIcon name="i-fluent-chevron-right-20-filled" />
			</button>
			<button onclick={nextYear}>
				<UIcon name="i-fluent-chevron-double-right-20-filled" />
			</button>
		</div>
	</header>

	<main class={st(ui.main)}>
		{#each $months as month, i (i)}
			<table use:melt={$grid} class={st(ui.main.month)}>
				<thead class={st(ui.main.month.head)}>
					<tr class={st(ui.main.month.head.week)}>
						{#each $weekdays as day}
							<th class={st(ui.main.month.head.week.day)}>
								<div>
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
									class={st(ui.main.month.body.week.day)}
									aria-disabled={$isDateDisabled(date) || $isDateUnavailable(date)}
								>
									<div
										use:melt={$cell(date, month.value)}
										class="data-disabled:text-[var(--ui-text-muted)]
										data-unavailable:line-through
										data-unavailable:text-[var(--ui-text-muted)]
										data-unavailable:pointer-events-none
										data-today:font-semibold
										hover:bg-primary-500/50
										data-today:not-data-[selected]:text-[var(--ui-primary)] data-[highlighted]:bg-[var(--ui-primary)]/20 hover:not-data-[selected]:bg-[var(--ui-primary)]/20 relative m-0.5 flex size-8 items-center justify-center whitespace-nowrap rounded-full transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ui-primary)] data-[selected]:bg-[var(--ui-primary)] data-[selected]:text-[var(--ui-bg)]"
									>
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
</div>
