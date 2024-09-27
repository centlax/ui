<script lang="ts">
	/** Imports */
	import { createDialog, createSync, melt } from '@melt-ui/svelte';
	import { type ModalProps } from './modal.js';
	import { flyAndScale } from '$lib/theme/motion/fly-scale.js';

	/** Props */
	let { value = $bindable(false), ...props }: ModalProps = $props();

	/** Melt UI */
	const {
		elements: { portalled, overlay, trigger, content },
		states
	} = createDialog({});
	const sync = createSync(states);
	$effect(() => {
		sync.open(value, (v) => (value = v));
	});
</script>

{#if props.trigger}
	<div role="button" use:melt={$trigger}>
		{@render props.trigger()}
	</div>
{/if}

{#if value}
	<div use:melt={$portalled}>
		<div use:melt={$overlay}></div>
		<div {...props} use:melt={$content} transition:flyAndScale>
			{#if props.children}
				{@render props.children()}
			{/if}
		</div>
	</div>
{/if}
