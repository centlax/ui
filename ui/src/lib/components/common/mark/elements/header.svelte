<script lang="ts">
	/** Imports */
	import { useUI } from '$lib/composables/ui.js';
	import { markHeader, type MarkHeaderProps } from './header.js';
	import { UIcon, useDark } from '$lib/index.js';

	/** Props */
	let { items, children, ...props }: MarkHeaderProps = $props();
	const dark = useDark();

	/** Styles */
	const ui = useUI(markHeader, props.class, props.override);
</script>
