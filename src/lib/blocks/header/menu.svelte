<script lang="ts">
	import { twJoin } from 'tailwind-merge';
	import { ULink, UIcon } from '$lib/index.js';
	import type { Link } from '$lib/types/link.js';

	export let links: Link[];
	const css = {
		wrapper: 'p-2 space-y-1',
		base: 'outline-none block px-2 py-1.5 rounded-md flex items-start gap-1.5',
		active: 'bg-gray-100/50 dark:bg-gray-800/50 text-primary-500',
		background: 'hover:bg-gray-200/50 dark:hover:bg-gray-800/50',
		label: 'font-medium text-sm/6 inline-block relative',
		description: 'text-sm leading-snug text-gray-500 dark:text-gray-400 line-clamp-2',
		icon: {
			base: 'size-5 flex-shrink-0 mt-1 text-gray-600 dark:text-gray-300'
		},
		externalIcon: {
			name: 'i-heroicons-arrow-up-right-20-solid',
			base: 'size-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500'
		}
	};
</script>

{#if links?.length}
	<ul class={css.wrapper}>
		{#each links as link}
			<ULink let:exact href={link.href}>
				<li class={twJoin(css.base, css.background, exact && 'text-primary-500')}>
					{#if link.icon}
						<UIcon
							name={link.icon}
							class={twJoin(css.icon.base, exact && 'text-primary-500 dark:text-primary-500')}
						/>
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
				</li>
			</ULink>
		{/each}
	</ul>
{/if}
