<script lang="ts">
	import { UInput } from '$lib/import.js';
	import { createTagsInput, melt } from '@melt-ui/svelte';

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
</script>

<div use:melt={$root}>
	{#each $tags as t}
		<div use:melt={$tag(t)}>
			<span>{t.value}</span>
			<button use:melt={$deleteTrigger(t)}>
				<span>X</span>
			</button>
		</div>
		<div use:melt={$edit(t)}></div>
	{/each}

	<UInput melt={$input} />
</div>
