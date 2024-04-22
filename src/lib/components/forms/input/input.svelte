<script lang="ts">
	// imports
	import type { HTMLInputAttributes } from 'svelte/elements';
	import type { InputProps } from './input.props.js';
	import { twJoin } from 'tailwind-merge';
	import { css } from './input.styles.js';
	import { ui } from '$lib/ui.config.js';
	import { UIcon } from '$lib/index.js';

	// types
	type $$Props = HTMLInputAttributes & InputProps;

	// props
	let classProp: string | undefined | null = '';
	export { classProp as class };
	export let icon: InputProps['icon'] = '';
	export let loading: InputProps['loading'] = false;
	export let leading: InputProps['leading'] = false;
	export let trailing: InputProps['trailing'] = false;
	export let type: InputProps['type'] = 'text';
	export let size: InputProps['size'] = ui.size;
	export let padded: InputProps['padded'] = true;
	export let variant: InputProps['variant'] = 'outline';
	export let color: InputProps['color'] = 'white';
	export let hide: InputProps['hide'] = false;
	export let mask: InputProps['mask'] = false;
	export let value: InputProps['value'] = ''


	// reactive
	$: isLeading =
		(icon && leading) ||
		(icon && !trailing) ||
		(loading && !trailing) ||
		(typeof icon === 'object' && icon.leading);
	$: isTrailing =
		(icon && trailing) || (loading && trailing) || (typeof icon === 'object' && icon.trailing);

	// config 
	let leadingIcon = typeof icon === 'object' ? icon.leading : icon;
	let trailingIcon = typeof icon === 'object' ? icon.trailing : icon;
	let _variant: string =
		//@ts-ignore
		css.variant.base[variant][color] ||
		//@ts-ignore
		css.variant.mask[variant].replaceAll('{color}', color);

	// reactive
	$: inputUI = twJoin(
		css.base,
		css.form,
		css.rounded,
		css.placeholder,
		type === 'file' && [css.file.base, css.file.padding[size || 'sm']],
		css.text[size || 'sm'],
		padded ? css.padding[size || 'sm'] : 'p-0',
		_variant,
		(isLeading || $$slots.leading) && css.leading.padding[size || 'sm'],
		(isTrailing || $$slots.trailing) && css.trailing.padding[size || 'sm'],
		classProp
	);

	$: loadingIcon = typeof icon === 'object' && icon.loading ? icon.loading : ui.icon.loading;
	$: leadingCSS = twJoin(
		css.icon.leading.wrapper,
		css.icon.leading.pointer,
		css.icon.leading.padding[size || 'sm']
	);

	$: trailingCSS = twJoin(
		css.icon.trailing.wrapper,
		css.icon.trailing.pointer,
		css.icon.trailing.padding[size || 'sm']
	);

	$: leadingIconCSS = twJoin(
		loading && isLeading ? loadingIcon :leadingIcon,
		css.icon.base,
		mask && css.icon.color.replaceAll('{color}', color || ''),
		css.icon.size[size || 'sm'],
		loading && css.icon.loading
	);

	$: trailingIconCSS = twJoin(
		loading && !isLeading ? loadingIcon : trailingIcon,
		css.icon.base,
		mask && css.icon.color.replaceAll('{color}', color || ''),
		css.icon.size[size || 'sm'],
		loading && !isLeading && css.icon.loading
	);
</script>

<div class={css.wrapper}>
	{#if !hide}
		<input bind:value on:abort on:blur on:change on:click on:toggle {...$$restProps} class={inputUI} />
	{/if}
	<slot {inputUI} />
	{#if (isLeading && leadingIcon) || $$slots.leading}
		<span class={leadingCSS}>
			<slot name="leading">
				<UIcon name={leadingIconCSS} />
			</slot>
		</span>
	{/if}
	{#if (isTrailing && trailingIcon) || $$slots.trailing}
		<span class={trailingCSS}>
			<slot name="trailing">
				<UIcon name={trailingIconCSS} />
			</slot>
		</span>
	{/if}
</div>
