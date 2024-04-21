<script lang="ts">
	// imports
	import type { Link } from '$lib/types/link.js';
	import { twJoin } from 'tailwind-merge';
	// props
	export let links: Link[] = [];
	export let title: string = 'Centlax';
	export let title_href: string = 'https://www.centlax.com';
	export let border: boolean = false;

	// config
	let year = new Date().getFullYear();
	const css = {
		border: 'border-t border-gray-900/10 dark:border-white/10',
		base: 'w-full flex justify-center items-center py-2 ',
		list: 'text-sm leading-5 text-gray-600 dark:text-gray-300'
	};
</script>

<ul class={twJoin(css.base, border && css.border)}>
	<li class={css.list}>
		<a href={title_href}>
			{title} &copy; {year}
		</a>
	</li>
	{#each links as link}
		<li class={css.list}>
			<a href={link.href}>
				{link.label}
			</a>
		</li>
	{/each}
</ul>
