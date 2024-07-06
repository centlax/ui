<script lang="ts">
	/** Imports */
	import { useProps, useUI, type DeepStyles } from '$lib/index.js';
	import { strify, twJoin, varify } from '$lib/utils/index.js';
	import { input } from './input.config.js';

	/** Props */
	const props = useProps('Input');
	let _class = props.class;
	export { _class as class };
	export let override = props.override;
	export let icon = props.icon;
	export let size = props.size;
	export let loading = props.loading;
	export let variant = props.variant;

	/** Logic */

	$: is = {
		west: $$slots.west || loading,
		east: $$slots.east,
		default: $$slots.default
	};

	/** UI */
	const { css, classer } = useUI(input, _class, override);
	$: ui = {
		root: twJoin(strify(css.root, css.opt.size[size], css.opt.variant[variant]), classer),
		west: strify(css.west, css.opt.size[size].side),
		east: strify(css.east, css.opt.size[size].side),
		icon: {
			load: loading ? strify(css.attr.icon.load) : '',
			west: typeof icon === 'object' ? icon.west : '',
			east: typeof icon === 'string' ? icon : icon.east
		}
	};
</script>

<div class={strify(css.wrapper)}>
	<input data-west={String(is.west)} data-east={String(is.east)} class={ui.root} {...$$restProps} />
	<slot />
	{#if is.west}
		<div data-side="west" class={ui.west}>
			<slot name="west">
				<span data-slot="icon" class={ui.icon['load' || 'west']} />
			</slot>
		</div>
	{/if}

	{#if is.east}
		<div data-side="east" class={ui.east}>
			<slot name="east">
				<span data-slot="icon" class={ui.icon.east} />
			</slot>
		</div>
	{/if}
</div>
