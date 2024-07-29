<script lang="ts">
	/** Imports */
	import { createDialog, createSync, melt } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';
	import { modal } from './modal.config.js';
	import { useProps, useUI } from '$lib/import.js';
	import { flyAndScale } from '$lib/theme/motion/fly-scale.js';
	import { strify, twJoin } from '$lib/utils/index.js';

	/** Props */
	const props = useProps('Modal');
	let _class = props.class;
	export { _class as class };
	export let override = props.override;
	export let value = props.value;
	export let role = props.role;
	export let scroll = props.scroll;
	export let close = props.close;
	export let portal = props.portal;
	export let visible = props.visible;
	export let transition = props.transition;
	export function toggle() {
		value = !value;
	}

	/** Config */
	const { css, classer } = useUI(modal, _class, override);
	const {
		elements: { portalled, overlay, content },
		states
	} = createDialog({
		closeOnOutsideClick: typeof close === 'object' ? close.outside : true,
		preventScroll: scroll,
		forceVisible: visible,
		portal,
		role
	});
	const sync = createSync(states);

	/** React */
	$: sync.open(value, (v) => (value = v));
</script>

<slot name="open" open={toggle} />
{#if value}
	<div use:melt={$portalled} class={strify(css.root)}>
		<div use:melt={$overlay} class={strify(css.overlay)} transition:fade={transition.overlay} />
		<div
			use:melt={$content}
			class={twJoin(strify(css.content), classer)}
			transition:flyAndScale={transition.content}
		>
			<slot close={toggle} />
		</div>
	</div>
{/if}
