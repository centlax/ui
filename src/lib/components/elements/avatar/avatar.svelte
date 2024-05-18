<script lang="ts">
	// Imports
	import { createAvatar, melt } from '@melt-ui/svelte';
	import type { Avatar } from './avatar.js';
	import { twJoin } from 'tailwind-merge';
	import { styles } from './avatar.styles.js';
	import { config } from '$lib/ui.config.js';
	import { useUI } from '$lib/composables/useUI.js';
	import { colorize, stringfy } from '$lib/utils/index.js';

	// Props
	let _class: Avatar['class'] = '';
	export { _class as class };
	export let size: Avatar['size'] = config.size;
	export let alt: Avatar['alt'] = '';
	export let text: Avatar['text'] = '';
	export let status: Avatar['status'] = 'loading';
	export let icon: Avatar['icon'] = '';
	export let delay: Avatar['delay'] = 0;
	export let src: Avatar['src'] = '';
	export let index: Avatar['index'] = 0;
	export let chip: Avatar['chip'] = {
		color: '',
		position: 'top-right',
		text: ''
	};

	// Config
	const { css, classer } = useUI(styles, _class);
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
		stringfy(css.root),
		(errorImg || !src) && css.background,
		css.size[size],
		classer
	);

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

<button style="z-index: {index}; " on:click on:mouseenter on:mouseleave class={avatarCSS}>
	{#if src && !errorImg}
		<img use:melt={$image} {alt} class={css.img} />
	{:else if text}
		<span use:melt={$fallback} class={css.label}>{text}</span>
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
</button>
