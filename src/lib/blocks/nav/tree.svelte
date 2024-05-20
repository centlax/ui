<script lang="ts" context="module">
	export const css = {
		root: 'max-w-fit',
		header: {
			base: 'flex items-center gap-1.5 group w-full pb-2',
			focus: 'focus-visible:outline-primary-500 border-transparent',
			font: 'text-sm/6 font-semibold truncate',
			icon: {
				base: 'flex-shrink-0 mr-1.5 text-gray-700 dark:text-gray-200',
				transform: 'ms-auto transform transition-transform duration-200',
				size: 'size-5',
				name: 'i-fluent-chevron-down-20-filled'
			}
		},
		panel: {
			base: 'flex flex-col',
			border: 'space-y-3 border-l border-gray-200 dark:border-gray-800 ml-2.5'
		},
		ul: {
			base: 'flex flex-col space-y-3',
			border: 'border-l border-gray-200 dark:border-gray-800 ml-2.5'
		},
		list: {
			base: 'flex items-center gap-1.5 group border-l -ml-px pl-4 ',
			font: 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200',
			border: 'border-transparent hover:border-gray-600 dark:hover:border-gray-400'
		}
	};
</script>

<script lang="ts">
	// Imports
	import { UNavTree } from '$lib/index.js';
	import type { ComponentProps } from 'svelte';
	import { stringify } from '$lib/utils/index.js';

	// Props
	//export let accordion: ComponentProps<UAccordion> = {};
</script>
