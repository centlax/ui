<script setup lang="ts">
	import type { AsideLink } from '$lib/types/link.d.js';
	import { UAsideLinks } from '$lib/index.js';
	import { twJoin } from 'tailwind-merge';
	export let links: AsideLink[];
	let classProp: string | string[] = '';
	export { classProp as class };

	const css = {
		wrapper:
			'hidden overflow-y-auto lg:block lg:max-h-[calc(100vh-var(--header-height))] lg:sticky lg:top-[--header-height] py-8 lg:px-4 lg:-mx-4',
		top: {
			wrapper: 'sticky -top-8 -mt-8 pointer-events-none z-[1]',
			header: 'h-8 bg-background -mx-4 px-4',
			body: 'bg-background relative pointer-events-auto flex -mx-4 px-4',
			footer: 'h-8 bg-gradient-to-b from-background -mx-4 px-4'
		}
	};
</script>

<aside class={twJoin(css.wrapper, classProp)}>
	<div class="relative">
		{#if $$slots.top}
			<div class={css.top.wrapper}>
				<div class={css.top.header} />
				<div class={css.top.body}>
					<slot name="top" />
				</div>
				<div class={css.top.footer} />
			</div>
		{/if}

		<slot name="links">
			<UAsideLinks {links} />
		</slot>

		<slot />

		<slot name="bottom" />
	</div>
</aside>
