<script lang="ts">
	import { ui } from '$lib/ui.config.js';
	import { UTooltip, ULink, UIcon, UHeaderMenu, UCard, UContainer } from '$lib/index.js';
	import type { HeaderLink } from '$lib/types/link.js';
	import { twJoin } from 'tailwind-merge';
	export let links: HeaderLink[];
	let classProp: string = '';
	export { classProp as class };
	export let state: 'open' | 'close' = 'close';

	const css = {
		wrapper: 'flex items-center gap-x-8',
		base: 'text-sm font-medium flex items-center gap-1',
		active: 'text-primary',
		inactive: 'hover:text-primary-500',
		icon: {
			base: 'size-3 text-gray-600 dark:text-gray-300',
			trailing: {
				name: ui.icon.chevron,
				base: 'w-5 h-5 transform transition-transform  duration-200 flex-shrink-0',
				active: 'rotate-180',
				inactive: ''
			},
			external: {
				name: ui.icon.external,
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
					<UTooltip bind:state let:state>
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

						<svelte:fragment slot="content">
							<UCard padded={false} class="shadow-lg w-[20rem]">
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
