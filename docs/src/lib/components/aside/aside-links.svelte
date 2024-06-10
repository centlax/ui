<script lang="ts">
	import { type Link } from '@centlax/ui';
	export let links: Link[] = [];
</script>

{#each links as link}
	<li class="mt-12 lg:mt-8">
		<h5 class="mb-8 lg:mb-3 font-semibold text-gray-900 dark:text-gray-200">{link.label}</h5>
		<ul class="space-y-6 lg:space-y-2 border-l border-gray-100 dark:border-gray-800">
			{#if link['children']}
				{#each link.children as child}
					<li>
						<a
							class="block border-l pl-4 -ml-px border-transparent hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
							href="/docs/installation">{child.label}</a
						>
					</li>
				{/each}
			{/if}
		</ul>
	</li>
{/each}
