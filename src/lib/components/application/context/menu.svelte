<script lang="ts">
	import { createContextMenu, melt } from '@melt-ui/svelte';
	const {
		elements: { trigger, menu }
	} = createContextMenu({
		arrowSize: 100,
		loop: true
	});
</script>

<div class="trigger" use:melt={$trigger} aria-label="Update dimensions">Right click me.</div>
<div class=" menu" use:melt={$menu}></div>

<style lang="postcss">
	.menu {
		@apply z-10 flex bg-sky-500  size-[220px] flex-col shadow;
		@apply rounded-lg bg-white p-1 lg:max-h-none;
		@apply ring-0 !important;
	}
	.trigger {
		@apply block rounded-xl border-2 border-dashed border-sky-900 font-semibold text-sky-700;
		@apply h-screen w-screen bg-sky-100 py-12 text-center shadow;
	}
</style>
