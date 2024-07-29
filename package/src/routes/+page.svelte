<script lang="ts">
	import { UContainer, UTooltip } from '$lib/index.js';
</script>

<UContainer>
	<UTooltip let:close class="bg-white">
		<button slot="trigger">trigger</button>
		<button let:open on:click={open} slot="open"> OPEN </button>
		<div class="grid gap-4 py-4 w-3/4">
			<div class="grid grid-cols-4 items-center gap-4">
				<label
					data-melt-label=""
					data-label-root=""
					class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-right"
					for="name">Name</label
				>
				<input
					class="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 col-span-3"
					id="name"
				/>
			</div>
			<div class="grid grid-cols-4 items-center gap-4">
				<label
					data-melt-label=""
					data-label-root=""
					class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-right"
					for="username">Username</label
				>
				<input
					class="border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 col-span-3"
					id="username"
				/>
			</div>
		</div>
		<button on:click={close}> Close </button>
	</UTooltip>
</UContainer>
