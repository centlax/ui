<script lang="ts">
	import { type Link } from '@centlax/ui';
	export let links: Link[] = [];
</script>

{#each links as link}
	<li>
		<a
			class="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-gray-900 dark:text-white"
			href="/docs/installation"
			><div
				class="mr-4 flex items-center p-0.5 rounded-md ring-1 ring-gray-300/50 dark:ring-gray-700/50 shadow-sm group-hover:shadow dark:shadow-none dark:group-hover:shadow-none"
			>
				<span class="{link.icon} size-5 dark:text-white text-gray-900" />
			</div>
			{link.label}</a
		>
	</li>
{/each}
