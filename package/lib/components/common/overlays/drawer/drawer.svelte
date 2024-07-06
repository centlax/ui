<script lang="ts">
	/** Imports */
	import { useProps, useUI } from '$lib/index.js';
	import { strify, twJoin } from '$lib/utils/index.js';
	import { createDialog, createSync, melt } from '@melt-ui/svelte';
	import { fade, fly } from 'svelte/transition';
	import { drawer } from './drawer.config.js';

	/** Props */
	const props = useProps('Drawer');
	let _class = props.class;
	export { _class as class };
	export let open = props.open;
	export let override = props.override;
	export let role = props.role;
	export let scroll = props.scroll;
	export let outside = props.outside;
	export let portal = props.portal;
	export let visible = props.visible;
	export let transition = props.transition;
	export function toggle() {
		open = !open;
	}

	/** Config */
	const {
		elements: { overlay, content, portalled, trigger },
		states
	} = createDialog({
		closeOnOutsideClick: outside,
		forceVisible: visible,
		preventScroll: scroll,
		portal,
		role
	});
	const sync = createSync(states);
	const { css, classer } = useUI(drawer, _class, override);

	/** React */
	$: sync.open(open, (v) => (open = v));
</script>

{#if $$slots.trigger}
	<div use:melt={$trigger} class={strify(css.trigger)}>
		<slot name="trigger" />
	</div>
{/if}

<slot name="open" />
{#if open}
	<div use:melt={$portalled} class={strify(css.root)}>
		<div use:melt={$overlay} class={strify(css.overlay)} transition:fade={transition.overlay} />
		<div
			use:melt={$content}
			class={twJoin(strify(css.content), classer)}
			transition:fly={transition.content}
			{...$$restProps}
		>
			<slot />
		</div>
	</div>
{/if}
