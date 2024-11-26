<script lang="ts">
	import { createDateField, createDateRangeField, melt } from '@melt-ui/svelte';
	import { type InputDateProps } from './date.js';

	let { mode = 'field', picker = false, ...props }: InputDateProps = $props();
	const {
		elements: { field, segment, hiddenInput },
		states: { segmentContents },
		options: { locale }
	} = createDateField();

	const {
		elements: { field: fieldRange, startSegment, endSegment, startHiddenInput, endHiddenInput },
		states: { segmentContents: segmentContentsRange },
		options: { locale: localeRange }
	} = createDateRangeField();
</script>

<!-- FIELD -->
{#snippet _field()}
	<div use:melt={$field}>
		{#key $locale}
			{#each $segmentContents as seg}
				<div id="field" use:melt={$segment(seg.part)}>
					{seg.value}
				</div>
			{/each}
			<input use:melt={$hiddenInput} />
			<input type="date" value={$segmentContents} />
		{/key}
	</div>
{/snippet}

<!-- RANGE -->
{#snippet _range()}
	<div use:melt={$fieldRange}>
		{#key $localeRange}
			{#each $segmentContentsRange.start as seg, i (i)}
				<div id="field" use:melt={$startSegment(seg.part)}>
					{seg.value}
				</div>
			{/each}
			<span aria-hidden="true"> - </span>
			{#each $segmentContentsRange.end as seg, i (i)}
				<div id="field" use:melt={$endSegment(seg.part)}>
					{seg.value}
				</div>
			{/each}
			<input use:melt={$startHiddenInput} />
			<input use:melt={$endHiddenInput} />
		{/key}
	</div>
{/snippet}

<!-- COMPONENT -->
<section class="flex w-full flex-col items-center gap-3">
	<div class="flex h-full w-full flex-col">
		{#if mode === 'field'}
			{@render _field()}
		{:else if mode === 'range'}
			{@render _range()}
		{/if}
	</div>
</section>

<style lang="postcss">
	[data-melt-datefield-field] {
		@apply mt-0.5 flex w-full min-w-[160px] items-center rounded-lg border border-sky-400/60 bg-white p-1.5 text-sky-800 shadow-md;
	}
</style>
