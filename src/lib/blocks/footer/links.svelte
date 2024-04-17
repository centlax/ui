<script lang="ts">
	// imports
	import type { FooterLink } from '$lib/types/link.js';
	// props
	export let links: FooterLink[] = [];
	export let cols: number = 4;
	// config
	let wrapperCSS = 'mt-16 grid  gap-8 xl:col-span-2 xl:mt-0';
	let columnCSS = 'md:grid md:grid-cols-2 md:gap-8';
</script>

<h2 id="footer-heading" class="sr-only">Footer Links</h2>

<div style="grid-template-columns: repeat({cols}, minmax(0, 1fr));" class={wrapperCSS}>
	{#each links as link}
		<div class={columnCSS}>
			<div>
				<h3 class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">{link.label}</h3>
				{#if link.children}
					<ul role="list" class="mt-6 space-y-2">
						{#each link.children as child}
							<li>
								<a
									href={child.href}
									class="text-sm leading-6 text-gray-600 dark:text-gray-300 underline-offset-2 hover:underline hover:decoration-dashed hover:font-medium"
									>{child.label}</a
								>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		</div>
	{/each}
</div>
