<script lang="ts">
	/** Imports */
	import { cn, st } from '$lib/internal/utils/wind.js';
	import { calendarFooter, type CalendarFooterProps } from './footer.js';
	import { useUI } from '$lib/composables/ui.js';

	/** Props */
	let { ...props }: CalendarFooterProps = $props();

	/** Styles */
	const ui = useUI(calendarFooter, props.class, props.override);
</script>

<footer hidden class={cn(st(ui.root), ui.class)}>
	{@render props.children?.()}
</footer>
