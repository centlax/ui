<script lang="ts">
	/** Imports */
	import { UIcon, UPopover } from '$lib/index.js';
	import { melt } from '@melt-ui/svelte';
	import { ctxCalendar } from './calendar.svelte.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { calendarHeader, type CalendarHeaderProps } from './header.js';
	import { useUI } from '$lib/composables/ui.js';
	import Button from '../button/button.svelte';

	/** Props  */
	let { ...props }: CalendarHeaderProps = $props();

	const ctx = ctxCalendar();
	const calendar = ctx.get();
	const {
		elements: { heading, prevButton },
		states: { headingValue, value },
		helpers: { nextYear, nextPage, prevPage, prevYear, setMonth }
	} = calendar;
	let viewToggle = $state(false);

	/** Styles */
	const ui = useUI(calendarHeader, props.class, props.override);
</script>

<header class={cn(st(ui.root), ui.class)}>
	<div class={st(ui.prev)}>
		<button onclick={prevYear}>
			<UIcon name="i-fluent-chevron-double-left-16-filled" />
		</button>
		<button onclick={prevPage}>
			<UIcon name="i-fluent-chevron-left-16-filled" />
		</button>
	</div>
	<UPopover arrow-size={10} class={st(ui.popover)}>
		{#snippet trigger()}
			<div use:melt={$heading}>
				<h3 class="text-base">{$headingValue}</h3>
			</div>
		{/snippet}
		{#snippet content()}
			<div class="mb-2 flex w-full justify-between">
				<button onclick={prevYear}>
					<UIcon name="i-fluent-chevron-double-left-16-filled" />
				</button>
				<span>
					{#if $value}
						{#if Array.isArray($value)}
							{$value[0]}
						{:else if 'start' in $value && 'end' in $value}
							{$value.start}-{$value.end}
						{:else}
							{$value}
						{/if}
					{:else}
						<Button text="Today" />
					{/if}
				</span>
				<button onclick={nextYear}>
					<UIcon name="i-fluent-chevron-double-right-16-filled" />
				</button>
			</div>
			<div>
				<div class="grid grid-cols-3 gap-3">
					{#each ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] as month, i}
						<button
							onclick={() => {
								setMonth(i + 1);
							}}
							class="rounded p-1 text-center"
						>
							{month}
						</button>
					{/each}
				</div>
			</div>
		{/snippet}
	</UPopover>
	<div class={st(ui.next)}>
		<button onclick={nextPage}>
			<UIcon name="i-fluent-chevron-right-20-filled" />
		</button>
		<button onclick={nextYear}>
			<UIcon name="i-fluent-chevron-double-right-20-filled" />
		</button>
	</div>
</header>
