<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { cn, st } from '$lib/utils/wind.js';
	import { markAsideItem, type MarkAsideItemProps } from './a-item.js';

	/** Props */
	let { as = 'li', item, mode = 'pine', ...props }: MarkAsideItemProps = $props();

	/** Styles */
	const ui = useUI(markAsideItem, props.class, props.override);
	// -ml-px block border-l border-current pl-4 font-semibold text-sky-500 dark:text-sky-400
</script>

