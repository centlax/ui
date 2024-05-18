<script lang="ts">
	// Imports
	import { config } from '$lib/ui.config.js';
	import { UTooltip, ULink, UIcon, UHeaderMenu, UCard, UContainer } from '$lib/index.js';
	import type { HeaderLink } from '$lib/types/link.js';
	import { twJoin } from 'tailwind-merge';

	// Props
	export let links: HeaderLink[];
	let classProp: string = '';
	export { classProp as class };

	// Config
	const css = {
		wrapper: 'flex items-center gap-x-8',
		base: 'text-sm font-semibold flex items-center gap-1',
		active: 'text-primary-500',
		inactive: 'hover:text-primary-500',
		icon: {
			base: 'size-3 text-gray-500',
			trailing: {
				name: config.icon.chevron,
				base: 'size-5 transform transition-transform  duration-200 flex-shrink-0',
				active: 'rotate-180'
			},
			external: {
				name: config.icon.external,
				base: 'size-3 absolute top-0.5 -right-3.5'
			}
		}
	};
</script>

{#if links?.length}
	<ul class={twJoin(css.wrapper, classProp)}>
		{#each links as link}
			<li class="relative">
				{#if link.children?.length}
					<UTooltip let:state>
						<ULink let:exact active href={link.href} class={css.base}>
							<slot name="label" {link}>
								{link.label}
							</slot>

							<UIcon
								name={css.icon.trailing.name}
								class={twJoin(
									css.icon.base,
									css.icon.trailing.base,
									exact && 'text-primary-500',
									state === 'open' && css.icon.trailing.active
								)}
							/>
						</ULink>

						<svelte:fragment slot="content">
							<UCard class="shadow-lg w-[20rem]">
								<UHeaderMenu links={link.children} on:click={close} />
							</UCard>
						</svelte:fragment>
					</UTooltip>
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
