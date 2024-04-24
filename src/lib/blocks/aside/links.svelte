<script setup lang="ts">
	import { ULink, UIcon } from '$lib/index.js';
	import { ui } from '$lib/index.js';
	import { twJoin, twMerge } from 'tailwind-merge';
	import type { AsideLink } from '$lib/types/link.js';
	export let links: AsideLink[];
	let classProp: string | string[] = '';
	export { classProp as class };
	export let clicked: boolean = false;

	const css = {
		wrapper: 'space-y-3 mb-3 lg:mb-6 lg:mx-0',
		base: 'group flex items-center gap-1.5 my-3  lg:gap-2 ',
		label: 'text-sm/6 relative group-hover:font-medium',
		active: 'text-primary-500 ',
		icon: {
			wrapper: 'rounded-md p-1 inline-flex ring-inset ring-1 group-hover:ring-primary-400',
			backround: 'group-hover:bg-primary-500 ring-gray-300 dark:ring-gray-700',
			base: 'size-4 flex-shrink-0 group-hover:text-white',
			exact: 'text-current',
			external: {
				name: ui.icon.external,
				base: 'size-3 absolute top-0.5 -right-3.5 text-gray-500'
			}
		}
	};
</script>

{#if links?.length}
	<div class={twJoin(css.wrapper, classProp)}>
		{#each links as link}
			<ULink on:click={() => (clicked = !clicked)} let:exact active href={link.href}>
				<div class={css.base}>
					{#if link.icon}
						<div class={twJoin(css.icon.backround, css.icon.wrapper, exact ? css.icon.exact : '')}>
							<UIcon name={link.icon} class={twJoin(css.icon.base)} />
						</div>
					{/if}

					<span class={css.label}>
						{link.label}
						{#if link.target}
							<UIcon name={css.icon.external.name} class={css.icon.external.base} />
						{/if}
					</span>
				</div>
			</ULink>
		{/each}
	</div>
{/if}
