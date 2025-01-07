<script lang="ts">
	import { UAvatar } from '$lib/index.js';
</script>

<div class="-mx-[calc(var(--ui-dash-space)/2)] mt-auto">
	<a
		href="/"
		class="flex items-center gap-x-4 rounded-md px-2.5 py-1.5 text-sm/6 font-semibold text-gray-900 hover:bg-gray-50"
	>
		<UAvatar
			class="size-8"
			src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
		/>
		<div class="flex flex-col leading-4">
			<span class="">Tom Cook</span>
			<span class="font-base text-[--ui-text-toned]">tom.cook@centlax.com</span>
		</div>
	</a>
</div>
