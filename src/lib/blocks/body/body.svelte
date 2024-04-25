<script lang="ts">
	// Imports
	import { UHeader } from '$lib/index.js';
	import { UFooter } from '$lib/index.js';
	import { twJoin } from 'tailwind-merge';

	// Props
	let classProp:string|null|undefined = '';
	export { classProp as class};
</script>

<div class={twJoin("relative justify-between flex flex-col min-h-screen overflow-x-hidden bg-gray-50 dark:bg-gray-950", classProp)}>
	<slot {UHeader} {UFooter} />
</div>

