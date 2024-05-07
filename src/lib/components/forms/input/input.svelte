<script lang="ts">
	// Imports
	import type { InputProps } from './input.props.js';
	import { twJoin } from 'tailwind-merge';
	import { css } from './input.styles.js';
	import { ui as config } from '$lib/ui.config.js';
	import { UIcon } from '$lib/index.js';
	import { getContext, hasContext } from 'svelte';
	import type { FieldsetContext } from '../fieldset/fieldset.props.js';
	// Types
	type $$Props = InputProps;

	// Config
	const context: FieldsetContext = getContext('Fieldset');
	const ctx: boolean = hasContext('Fieldset');

	// Props
	let classProp: string | undefined | null = '';
	export { classProp as class };
	export let icon: InputProps['icon'] = '';
	export let loading: InputProps['loading'] = false;
	export let leading: InputProps['leading'] = false;
	export let trailing: InputProps['trailing'] = false;
	export let size: InputProps['size'] = context?.size || config.size;
	export let padded: InputProps['padded'] = true;
	export let variant: InputProps['variant'] = 'outline';
	export let color: InputProps['color'] = context?.color || 'white';
	export let hide: InputProps['hide'] = false;
	export let mask: InputProps['mask'] = false;
	export let value: InputProps['value'] = '';
	export let rounded: InputProps['rounded'] = false;
	export let el: InputProps['el'] = null;
	export let ui: InputProps['ui'] = undefined;

	// reactive
	$: mainIcon = typeof icon === 'string' ? icon : '';
	$: loadingIcon = typeof icon === 'object' && icon.loading ? icon.loading : config.icon.loading;
	$: leadingIcon = typeof icon === 'object' ? icon.leading : '';
	$: trailingIcon = typeof icon === 'object' ? icon.trailing : '';

	$: isLeading =
		(mainIcon && leading) || (mainIcon && !trailing) || (loading && !trailing) || leadingIcon;
	$: isTrailing = (mainIcon && trailing) || (loading && trailing) || trailingIcon;

	$: leadingIconName = loading ? loadingIcon : leadingIcon || mainIcon;
	$: trailingIconName = loading && !isLeading ? loadingIcon : trailingIcon || mainIcon;

	$: leadingCSS = twJoin(
		css.icon.leading.wrapper,
		css.icon.leading.pointer,
		css.icon.leading.padding[size || 'sm'],
		ui?.leading
	);

	$: leadingIconCSS = twJoin(
		css.icon.base,
		mask && css.icon.color.replaceAll('{color}', color || ''),
		css.icon.size[size || 'sm'],
		loading && css.icon.loading
	);

	$: trailingCSS = twJoin(
		css.icon.trailing.wrapper,
		css.icon.trailing.pointer,
		css.icon.trailing.padding[size || 'sm'],
		ui?.trailing
	);

	$: trailingIconCSS = twJoin(
		css.icon.base,
		mask && css.icon.color.replaceAll('{color}', color || ''),
		css.icon.size[size || 'sm'],
		loading && !isLeading && css.icon.loading
	);
	// config
	let _variant: string =
		//@ts-ignore
		css.variant.base[variant][color] ||
		//@ts-ignore
		css.variant.mask[variant].replaceAll('{color}', color);

	// reactive
	$: inputUI = twJoin(
		css.base,
		css.form,
		rounded ? 'rounded-full' : css.rounded,
		css.placeholder,
		$$props.type === 'file' && [css.file.base, css.file.padding[size || 'sm']],
		css.text[size || 'sm'],
		padded ? css.padding[size || 'sm'] : 'p-0',
		_variant,
		(isLeading || $$slots.leading) && css.leading.padding[size || 'sm'],
		(isTrailing || $$slots.trailing) && css.trailing.padding[size || 'sm'],
		classProp
	);
</script>

<div class={twJoin(css.wrapper, ui?.wrapper)}>
	<slot {inputUI} />
	{#if !hide}
		<input
			bind:this={el}
			bind:value
			on:abort
			on:blur
			on:change
			on:click
			on:toggle
			{...$$restProps}
			name={context?.name || $$props.name}
			id={context?.id || $$props.id}
			class={inputUI}
		/>
	{/if}
	{#if (isLeading && leadingIconName) || $$slots.leading}
		<span class={leadingCSS}>
			<slot name="leading">
				<UIcon name={leadingIconName} class={leadingIconCSS} />
			</slot>
		</span>
	{/if}
	{#if (isTrailing && trailingIconName) || $$slots.trailing}
		<span class={trailingCSS}>
			<slot name="trailing">
				<UIcon name={trailingIconName} class={trailingIconCSS} />
			</slot>
		</span>
	{/if}
</div>
