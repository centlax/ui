<script lang="ts">
	/** Imports */
	import type { ComponentProps } from 'svelte';
	import { alert } from './alert.config.js';
	import { useProps } from '$lib/composables/use/props.js';
	import { useUI } from '$lib/composables/use/ui.js';
	import { merge, stringify } from '$lib/utils/helpers.js';
	import { UButton } from '$lib/index.js';
	import { colorize } from '$lib/utils/index.js';

	/** Props */
	const props = useProps('Alert');
	let _class = props.class;
	export { _class as class };
	export let override = props.override;
	export let title = props.title;
	export let description = props.description;
	export let icon = props.icon;
	export let actions: ComponentProps<UButton>[] = [];
	export let variant = props.variant;
	//export let dismiss = props.dismiss;

	/** UI */
	const { css, classer } = useUI(alert, _class, override);
	$: ui = {
		root: merge(stringify(css.root, css.opt.variant[variant]), classer)
	};
</script>

<div style={colorize()} {...$$restProps} class={ui.root}>
	{#if $$slots.west || icon}
		<div class={stringify(css.west)}>
			<slot name="west">
				{#if icon}
					<span class={stringify({ svg: icon }, css.west.icon)} />
				{/if}
			</slot>
		</div>
	{/if}

	<div class={stringify(css.center)}>
		<h4 class={stringify(css.center.title)}>
			<slot name="title">{title}</slot>
		</h4>
		<p class={stringify(css.center.description)}>
			<slot name="description">{description}</slot>
		</p>
		<slot />
		<slot name="actions">
			{#if $$slots.actions}
				<div>
					{#each actions as button}
						<UButton {...button} />
					{/each}
				</div>
			{/if}
		</slot>
	</div>
	<div class={stringify(css.east)}>
		<slot name="east" />
	</div>
</div>
