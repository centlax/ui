<script lang="ts">
	/** Imports */
	import { sidebar } from './sidebar.config.js';
	import NavButton from './_nav.svelte';
	import { type AccordionLink, useProps, useUI } from '$lib/import.js';
	import { merge, stringify } from '$lib/utils/helpers.js';

	/** Props */
	const props = useProps('Sidebar');
	let _class = props.class;
	export { _class as class };
	export let override = props.override;
	export let mode = props.mode;
	export let links: AccordionLink[] = [];

	/** UI */
	const { css, classer } = useUI(sidebar, _class, override);
	console.info(mode);
</script>

<section class={merge(stringify(css.root), classer)}>
	<div class={stringify(css.north)}>
		<div class={stringify(css.north.header)}>
			<div class="flex px-3 gap-3 items-center">
				<div class="border-2 rounded-full border-primary-400">
					<span class="i-fluent-home-garage-24-filled block bg-primary-400" />
				</div>
				<span class="font-semibold"> Depot </span>
			</div>
		</div>
		<slot name="search" />
		<div class="flex h-full justify-between flex-col gap-y-2">
			{#each links as link}
				<nav>
					{#if link.links}
						<ul>
							{#each link.links as linker}
								<li>
									<NavButton link={linker} />
								</li>
							{/each}
						</ul>
					{/if}
				</nav>
			{/each}
		</div>
	</div>
	<div id="south" class={stringify(css.south)}>
		<slot name="feature" />
		<slot name="account" />
	</div>
</section>
