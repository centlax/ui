<script lang="ts">
	// imports
	import { UContainer, UFooterLinks } from '$lib/index.js';
	import type { XDir } from '$lib/types/index.js';
	import type { Link } from '$lib/types/link.js';
	import { twJoin } from 'tailwind-merge';
	// props
	export let title: string = 'Centlax';
	export let dir: XDir = 'east';
	export let links: Link[] = [];
	let classProp: string | string[] = '';
	export { classProp as class };
	// config
	let year = new Date().getFullYear();
	const css = {
		wrapper: 'bg-white/50 dark:bg-gray-900/50 ',
		border: 'border-t border-gray-900/10 dark:border-white/10',
		base: 'mx-auto',
		grid: 'py-8 lg:py-12 xl:grid xl:grid-cols-3 xl:gap-8',
		east: 'space-y-8 text-gray-600 dark:text-gray-300 lg:mr-10',
		center: '',
		west: 'space-y-8 text-gray-600 dark:text-gray-300 lg:ml-10',
		notes: {
			base: 'py-2 lg:py-4 ',
			year: 'text-sm leading-5 text-gray-600/80 dark:text-gray-300/80'
		}
	};
	// reactive
	$: full = $$slots.default || links.length;
</script>

<footer class={twJoin(css.wrapper, css.border, classProp)} aria-labelledby="footer-heading">
	<UContainer>
		<h2 id="footer-heading" class="sr-only">Footer</h2>

		<div class={twJoin(css.base, !full && 'pt-1')}>
			{#if full}
				<div class={css.grid}>
					{#if $$slots.default && dir === 'east'}
						<div class={css.east}>
							<slot />
						</div>
					{/if}
					<slot name="links">
						<UFooterLinks {links} />
					</slot>
					{#if $$slots.default && dir === 'west'}
						<div class={css.west}>
							<slot />
						</div>
					{/if}
				</div>
			{/if}
			<div class="{css.notes.base} {full && css.border}">
				<p class={css.notes.year}>
					{title} &copy; {year}
				</p>
				<slot name="notes" />
			</div>
		</div>
	</UContainer>
</footer>
