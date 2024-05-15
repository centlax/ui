<script lang="ts" context="module">
	const css = {
		header: {},
		list: {
			base: 'text-base ml-3 text-gray-600 dark:text-gray-400 ',
			hover: 'hover:text-gray-800 dark:hover:text-gray-200'
		}
	};
</script>

<script lang="ts">
	// Imports
	import { UAccordion } from '$lib/index.js';
	import type { ComponentProps } from 'svelte';
	import { stringfy } from '$lib/utils/index.js';

	// Props
	export let accordion: ComponentProps<UAccordion> = {};
</script>

<UAccordion let:link {...accordion}>
	<ul class="flex flex-col">
		{#if link?.children}
			{#each link.children as child}
				<a href="/">
					<li class={stringfy(css.list)}>
						{child.title}
					</li>
				</a>
			{/each}
		{/if}
	</ul>
</UAccordion>
