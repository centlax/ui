<script lang="ts">
	/** Imports */
	import { createDialog, createSync, melt } from '@melt-ui/svelte';
	import { fade, fly } from 'svelte/transition';
	import { sheet } from './sheet.config.js';
	import { strify, twJoin } from '$lib/utils/index.js';
	import { useProps, useUI } from '$lib/import.js';

	/** Props */
	const props = useProps('Sheet');
	let _class = props.class;
	export { _class as class };
	export let value = props.value;
	export let override = props.override;
	export let role = props.role;
	export let scroll = props.scroll;
	export let outside = props.outside;
	export let portal = props.portal;
	export let visible = props.visible;
	export let transition = props.transition;
	export function toggle() {
		value = !value;
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
	const { css, classer } = useUI(sheet, _class, override);

	/** React */
	$: sync.open(value, (v) => (value = v));
</script>

<slot name="trigger" trigger={$trigger} />
<slot name="open" open={toggle} />

{#if value}
	<div use:melt={$portalled} class={strify(css.root)}>
		<div use:melt={$overlay} class={strify(css.overlay)} transition:fade={transition.overlay} />
		<div
			use:melt={$content}
			{...$$restProps}
			class={twJoin(strify(css.content), classer)}
			in:fly={transition.content?.in}
			out:fly={transition.content?.out}
			{...$$restProps}
		>
			<slot close={toggle} />
		</div>
	</div>
{/if}
