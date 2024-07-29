<script lang="ts">
	import { Drawer } from 'vaul-svelte';
</script>

<Drawer.Portal>
	<Drawer.Overlay class="fixed inset-0 z-50 bg-black/80" />
	<Drawer.Content
		class="bg-background fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border"
	>
		<slot />
	</Drawer.Content>
</Drawer.Portal>
