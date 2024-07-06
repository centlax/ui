<script lang="ts">
	/** Imports */
	import { useProps, useUI } from '$lib/index.js';
	import { flyAndScale } from '$lib/theme/motion/fly-scale.js';
	import { strify, twJoin } from '$lib/utils/index.js';
	import { createDialog, createSync, melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';
	import { modal } from './modal.config.js';

	/** Props */
	const props = useProps('Modal');
	let _class = props.class;
	export { _class as class };
	export let override = props.override;
	export let open = props.open;
	export let role = props.role;
	export let scroll = props.scroll;
	export let close = props.close;
	export let portal = props.portal;
	export let visible = props.visible;
	export let motion = props.motion;
	export function toggle() {
		open = !open;
	}

	/** Config */
	const { css, classer } = useUI(modal, _class, override);
	const {
		elements: { portalled, overlay, content, trigger },
		states
	} = createDialog({
		closeOnOutsideClick: typeof close === 'object' ? close.outsie : true,
		preventScroll: scroll,
		forceVisible: visible,
		portal,
		role
	});
	const sync = createSync(states);

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
		<div use:melt={$overlay} class={strify(css.overlay)} transition:fade={{ duration: 150 }} />
		<div
			use:melt={$content}
			class={twJoin(strify(css.content), classer)}
			transition:flyAndScale={motion}
		>
			<slot />
		</div>
	</div>
{/if}
