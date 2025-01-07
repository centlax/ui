<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.svelte.js';
	import { UIcon } from '$lib/index.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { dashAItems$, type XDashAItems } from './a-items.js';

	/** Props */
	let { data, attrs, ...props }: XDashAItems = $props();

	/** Styles */
	const ui = useUI(dashAItems$, props.class, props.override);
</script>

<nav data-name="dash-a-items" class={cn(st(ui.root), ui.class)} {...props} {...attrs}>
	{#each data as { items, title }}
		<div data-last={data.length > 1} role="list" class={st(ui.box)}>
			<h3 hidden class={st(ui.box.title)}>{title}</h3>
			{#if items}
				<ul class={st(ui.box.list)}>
					{#each items as it, i}
						<li aria-label="list-item">
							<svelte:element
								this={it.href ? 'a' : 'button'}
								data-selected={i === 0}
								href={it.href}
								class={st(ui.box.list.item)}
							>
								<UIcon
									data-selected={i === 0}
									data-filled={false}
									class={st(ui.box.list.item.icon)}
									name={it.icon || ''}
								/>
								<span>{it.text}</span>
								{#if it.badge}
									<span class={st(ui.box.list.item.badge)} aria-hidden="true">{it.badge}</span>
								{/if}
							</svelte:element>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	{/each}
</nav>
