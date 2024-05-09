<script lang="ts">
	// Imports
	import { createAvatar, melt } from '@melt-ui/svelte';
	import type { AvatarProps } from './avatar.props.js';
	import { twJoin } from 'tailwind-merge';
	import { css } from './avatar.styles.js';
	import { ui } from '$lib/ui.config.js';

	// Props
	let _class: AvatarProps['class'] = '';
	export { _class as class };
	export let size: AvatarProps['size'] = ui.size;
	export let alt: AvatarProps['alt'] = '';
	export let text: AvatarProps['text'] = '';
	export let status: AvatarProps['status'] = 'loading';
	export let icon: AvatarProps['icon'] = '';
	export let delay: AvatarProps['delay'] = 0;
	export let src: AvatarProps['src'] = '';
	export let index: AvatarProps['index'] = 0;
	export let chip: AvatarProps['chip'] = {
		color: '',
		position: 'top-right',
		text: ''
	};

	// Config
	const {
		elements: { image, fallback }
	} = createAvatar({
		src: src,
		delayMs: delay,
		onLoadingStatusChange: ({ next }) => {
			return (status = next);
		}
	});

	// Reactive
	$: errorImg = status === 'error';
	$: avatarCSS = twJoin(
		css.wrapper,
		(errorImg || !src) && css.background,
		css.rounded,
		css.size[size],
		typeof _class === 'string' ? _class : _class?.root
	);

	$: imgCSS = twJoin(css.rounded, css.size[size], typeof _class === 'object' && _class.img);
	$: iconCSS = twJoin(css.icon.base, css.icon.size[size]);
	$: chipCSS = twJoin(
		css.chip.base,
		css.chip.size[size],
		css.chip.position[chip?.position || 'top-right'],
		chip?.color && css.chip.background.replaceAll('{color}', chip.color)
	);

	$: placeholder = (alt || '')
		.split(' ')
		.map((word) => word.charAt(0))
		.join('')
		.substring(0, 2);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<span on:click on:mouseenter on:mouseleave style="z-index: {index};" class={avatarCSS}>
	{#if src && !errorImg}
		<img use:melt={$image} {alt} class={imgCSS} />
	{:else if text}
		<span use:melt={$fallback} class={css.text}>{text}</span>
	{:else if icon}
		<span class="{icon} {iconCSS}" />
	{:else if placeholder}
		<span class={css.placeholder}>{placeholder}</span>
	{/if}
	{#if chip.color}
		<span class={chipCSS}>
			{chip.text}
		</span>
	{/if}
	<slot />
</span>
