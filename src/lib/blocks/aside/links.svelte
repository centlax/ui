<script setup lang="ts">
	import { ULink, UIcon } from '$lib/index.js';
	import { ui } from '$lib/index.js';
	import { twJoin, twMerge } from 'tailwind-merge';
	import type { AsideLink } from '$lib/types/link.js';
	export let links: AsideLink[];
	let classProp: string | string[] = '';
	export { classProp as class };
	let isActive: boolean = false;

	const css = {
		wrapper: 'space-y-3 mb-3 lg:mb-6 -mx-1 lg:mx-0',
		base: 'flex justify-between items-center gap-1.5 lg:gap-2 group',
		active: 'text-primary font-semibold',
		inactive:
			'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 font-medium',
		icon: {
			wrapper: 'rounded-md p-1 inline-flex ring-inset ring-1',
			base: 'w-4 h-4 flex-shrink-0',
			active: 'bg-primary ring-primary text-background',
			inactive:
				'bg-gray-100/50 dark:bg-gray-800/50 ring-gray-300 dark:ring-gray-700 group-hover:bg-primary group-hover:ring-primary group-hover:text-background'
		},
		externalIcon: {
			name: ui.icon.external,
			base: 'w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500'
		},
		label: 'text-sm/6 relative'
	};
	$: open = false;
</script>

{#if links?.length}
	<div class={twJoin(css.wrapper, classProp)}>
		{#each links as link}
			<ULink class={css.base} active_class={css.active} inactive_class={css.inactive}>
				<div>
					{#if link.icon}
						<div
							class={twJoin(
								css.icon.wrapper,
								link.active || isActive ? css.icon.active : css.icon.inactive
							)}
						>
							<UIcon name={link.icon} class={twJoin(css.icon.base, link.iconClass)} />
						</div>
					{/if}

					<span class={css.label}>
						{link.label}
						{#if link.target}
							<UIcon name={css.externalIcon.name} class={css.externalIcon.base} />
						{/if}
					</span>
				</div>
				{#if link.children}
					<UIcon
						on:click={() => (open = !open)}
						class="justify-end {css.label}"
						name={open ? 'i-fluent-subtract-24-regular' : 'i-fluent-add-24-regular'}
					/>
				{/if}
			</ULink>
		{/each}
	</div>
{/if}
