<script lang="ts">
	/** Imports */
	import { UAccordion, useUI } from '$lib/index.js';
	import { strify } from '$lib/utils/index.js';
	import { asideLinks, props } from './links.js';

	/** Props */
	let _class = props.class;
	export { _class as class };
	export let override = props.override;
	export let links = props.links;
	export let multiple = props.multiple;
	export let disabled = props.disabled;
	export let visible = props.visible;
	export let value = props.value;

	/** UI */
	const { css, classer } = useUI(asideLinks, _class, override);
</script>

<UAccordion
	{multiple}
	{disabled}
	{visible}
	bind:value
	{links}
	let:link
	class={css.accordion || classer}
>
	<svelte:fragment let:link slot="trigger">
		{#if $$slots.icon || link.icon}
			<slot name="icon">
				<span class={strify(css.trigger.icon, { svg: link.icon })} />
			</slot>
		{/if}
		<span>{link.label}</span>
		<span data-open={value === link.id} class={strify(css.trigger.chevron)} />
	</svelte:fragment>

	<nav class={strify(css.content.nav)}>
		{#if link.children}
			{#each link.children as child}
				<a class={strify(css.content.nav.ancor)} href={child.href}>{child.label}</a>
			{/each}
		{/if}
	</nav>
</UAccordion>
