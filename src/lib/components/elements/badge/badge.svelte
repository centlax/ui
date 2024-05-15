<script lang="ts">
	// Imports
	import { twJoin } from 'tailwind-merge';
	import type { BadgeProps } from './badge.props.js';
	import { css } from './badge.styles.js';
	import { config } from '$lib/ui.config.js';
	import { UAvatar } from '$lib/index.js';
	import { fade } from 'svelte/transition';

	// Props
	export let label: BadgeProps['label'] = '';
	export let size: BadgeProps['size'] = config.size;
	export let rounded: BadgeProps['rounded'] = true;
	export let indicator: BadgeProps['dot'] = false;
	export let variant: BadgeProps['variants'] = 'solid';
	export let color: BadgeProps['color'] = 'primary';
	export let icon: BadgeProps['icon'] = '';
	export let avatar: BadgeProps['avatar'] = null;
	export let remove: BadgeProps['remove'] = false;

	// Reactivity
	$: mainIcon = typeof icon === 'string' ? icon : '';
	$: dotIcon = typeof icon === 'object' && icon.dot ? icon.dot : 'i-fluent-circle-small-20-filled';
	$: removeIcon =
		typeof icon === 'object' && icon.remove ? icon.remove : 'i-fluent-dismiss-circle-20-regular';
	$: leadingIcon = typeof icon === 'object' ? icon.leading : '';
	$: trailingIcon = typeof icon === 'object' ? icon.trailing : '';
	$: isLeading = $$slots.leading || dotIcon || leadingIcon || mainIcon || avatar;
	$: isTrailing = $$slots.trailing || removeIcon || trailingIcon;
	$: isBase = ['white', 'gray', 'black'].includes(color);

	$: _remove = false;

	$: badgeCSS = twJoin(
		css.base,
		css.size[avatar ? 'square' : 'rectangle'][size],
		css.gap[size],
		rounded ? 'rounded-full' : 'rounded-md',
		//@ts-ignore
		isBase ? css.variant.base.solid[color] : css.variant.mask[variant].replaceAll('{color}', color)
	);

	$: leadingIconCSS = twJoin(indicator ? dotIcon : mainIcon || leadingIcon);
	$: trailingIconCSS = twJoin(remove ? removeIcon : trailingIcon);
	$: removeIconCSS = twJoin(
		css.base,
		'cursor-pointer  rounded-full',
		css.icon.remove.variant[variant]
	);
</script>

{#if !_remove}
	<div class={badgeCSS} out:fade={{ duration: 200 }}>
		{#if isLeading}
			<span class={css.base}>
				<slot name="leading">
					{#if avatar}
						<UAvatar {...avatar} />
					{:else}
						<span class={leadingIconCSS}> </span>
					{/if}
				</slot>
			</span>
		{/if}

		<span class={css.base}>
			<slot>
				{label}
			</slot>
		</span>

		{#if isTrailing}
			<span class={css.base}>
				<slot name="trailing">
					{#if remove}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<span class={removeIconCSS} on:click={() => (_remove = remove ? true : false)}>
							<span class={trailingIconCSS}> </span>
						</span>
					{:else}
						<span class={trailingIconCSS}> </span>
					{/if}
				</slot>
			</span>
		{/if}
	</div>
{/if}
