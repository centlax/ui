<script lang="ts">
	/** Imports */
	import { createTagsInput, melt } from '@melt-ui/svelte';
	import type { InputTagProps } from './tag.js';
	import { setContext } from 'svelte';

	/** Props */
	let { ...props }: InputTagProps = $props();

	const {
		elements: { root, input, tag, deleteTrigger, edit },
		states: { tags }
	} = createTagsInput({
		defaultTags: ['Svelte', 'Typescript'],
		unique: true,
		add(tag) {
			return { id: tag, value: tag };
		},
		addOnPaste: true
	});
	/** Styles */

	setContext('input', input);
</script>

<div>
	<div use:melt={$root}>
		{#each $tags as t}
			<div use:melt={$tag(t)}>
				<span>{t.value}</span>
				<button use:melt={$deleteTrigger(t)}>
					<span>x</span>
				</button>
			</div>
			<div use:melt={$edit(t)}></div>
		{/each}

		{@render props.children?.()}
	</div>
</div>
