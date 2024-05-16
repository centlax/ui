<script lang="ts" context="module">
	export const styles = {
		root: 'space-y-3',
		title: 'text-sm/6 font-semibold flex items-center gap-1.5',
		container: 'space-y-3 lg:space-y-1.5',
		ancor: {
			base: {
				flex: 'flex items-center gap-1.5',
				text: 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
			},
			exact: 'text-primary-500',
			active: '',
			inactive: ''
		},

		icon: {
			base: 'size-5 flex-shrink-0',
			external: {
				name: config.icon.external,
				base: 'size-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-600'
			}
		},
		avatar: {
			base: 'self-center',
			size: ''
		},
		label: {
			base: 'text-sm/6 relative',
			font: 'font-medium',
			text: ''
		}
	};
</script>

<script lang="ts">
	// Imports
	import { config } from '$lib/index.js';
	import type { Link } from '$lib/types/link.js';
	import { ULink, UAvatar } from '$lib/index.js';
	import type { ComponentProps } from 'svelte';
	import { stringfy, twJoin } from '$lib/utils/index.js';
	import { useUI } from '$lib/composables/useUI.js';
	import type { DeepPartial } from '$lib/types/index.js';

	// Props
	let _class: string | DeepPartial<typeof styles> = '';
	export { _class as class };
	export let title: string = '';
	export let links: Link[] = [];
	export let avatar: ComponentProps<UAvatar> = {};

	// Config
	const { css, classer } = useUI(styles, _class);
</script>

<div class={twJoin(css.root, classer)}>
	{#if title || $$slots.title}
		<p class={css.title}>
			<slot name="title">
				{title}
			</slot>
		</p>
	{/if}
	<div class={css.container}>
		<slot>
			{#each links as link}
				<ULink
					href={link.href}
					class={{
						base: stringfy(css.ancor.base),
						active: css.ancor.active,
						inactive: css.ancor.inactive
					}}
				>
					{#if link.icon}
						<span class="{link.icon} {css.icon.base}" />
					{:else if avatar}
						<UAvatar {...avatar} class={stringfy(css.avatar)} />
					{/if}
					<span class={stringfy(css.label)}>
						{link.label}
						{#if link.target === '_blank'}
							<span class={stringfy(css.icon.external)} />
						{/if}
					</span>
				</ULink>
			{/each}
		</slot>
	</div>
</div>
