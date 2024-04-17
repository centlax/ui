<script lang="ts">
	import { ui } from '$lib/ui.config.js';
	import { UTipper, ULink, UIcon, UHeaderTipper, UCard } from '$lib/index.js';
	import type { HeaderLink } from '$lib/types/link.js';
	import { twJoin } from 'tailwind-merge';
	export let links: HeaderLink[];

	const css = {
		wrapper: 'flex items-center gap-x-8',
		base: 'text-sm/6 font-semibold flex items-center gap-1',
		active: 'text-primary',
		inactive: 'hover:text-primary',
		icon: {
			base: 'size-2 text-gray-500 dark:text-gray-400',
			trailing: {
				name: ui.icon.chevron,
				base: 'w-5 h-5 transform transition-transform  duration-200 flex-shrink-0',
				active: 'rotate-180',
				inactive: ''
			},
			external: {
				name: ui.icon.external,
				base: 'size-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500'
			}
		}
	};
</script>

{#if links?.length}
	<ul class={css.wrapper}>
		{#each links as link}
			<li class="relative">
				{#if link.children?.length}
					<UTipper let:state>
						<ULink active href={link.href} class={css.base}>
							<slot name="label" {link}>
								{link.label}
							</slot>

							<UIcon
								name={css.icon.trailing.name}
								class={twJoin(
									css.icon.base,
									css.icon.trailing.base,
									state === 'open' ? css.icon.trailing.active : css.icon.trailing.inactive
								)}
							/>
						</ULink>

						<UCard slot="content" padded={false} class="shadow-lg max-w-sm">
							<UHeaderTipper links={link.children} on:click={close} />
						</UCard>
					</UTipper>
				{:else}
					<ULink active href={link.href} class={css.base}>
						<slot name="label" {link}>
							{link.label}
						</slot>
						{#if link.target === '__blank'}
							<UIcon name={css.icon.external.name} class={css.icon.external.base} />
						{/if}
					</ULink>
				{/if}
			</li>
		{/each}
	</ul>
{/if}
