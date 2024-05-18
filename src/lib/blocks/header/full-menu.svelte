<script lang="ts">
	import { twJoin, twMerge } from 'tailwind-merge';
	import { ULink, UIcon } from '$lib/index.js';
	import type { HeaderLink } from '$lib/types/link.js';

	export let links: HeaderLink[];
	let classProp: string | string[] = '';
	export { classProp as class };

	const css = {
		wrapper: 'mt-2 space-y-1 bg-white dark:bg-gray-800',
		base: 'outline-none block px-2 py-1.5 rounded-md flex items-start gap-1.5',
		active: 'bg-gray-100/50 dark:bg-gray-800/50 text-primary',
		background: 'hover:bg-gray-200/50 dark:hover:bg-gray-800/50',
		inactive: 'hover:bg-gray-100/50 dark:hover:bg-gray-800/50',
		label: 'font-semibold text-sm/6 inline-block relative',
		description: 'text-sm leading-snug text-gray-500 dark:text-gray-400 line-clamp-2',
		icon: {
			base: 'w-4 h-4 flex-shrink-0 mt-1'
		},
		externalIcon: {
			name: 'i-heroicons-arrow-up-right-20-solid',
			base: 'size-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500'
		}
	};
	$: linkCSS = twJoin(css.base, css.background);
</script>

{#if links?.length}
	<div class={twJoin(css.wrapper, classProp)}>
		{#each links as link}
			<a href={link.href} class={linkCSS}>
				{#if link.icon}
					<UIcon name={link.icon} class={css.icon.base} />
				{/if}
				<p class={link.target === '_blank' ? 'pr-3' : 'pr-0'}>
					<span class={css.label}>
						{link.label}
						{#if link.target === '_blank'}
							<UIcon name={css.externalIcon.name} class={css.externalIcon.base} />
						{/if}
					</span>
					{#if link.description}
						<span class={css.description}>
							{link.description}
						</span>
					{/if}
				</p>
			</a>
		{/each}
	</div>
{/if}
