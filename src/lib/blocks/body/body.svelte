<script lang="ts">
	// imports
	import { ui } from '$lib/ui.config.js';
	// props
	export let height: string = ui.header.height;
</script>

<div class="flex flex-col min-h-screen overflow-x-hidden bg-gray-50 dark:bg-gray-950">
	<div class="">
		<slot name="header" />
	</div>
	<div style="margin-top: {height};" id="ui-main" class="flex-grow">
		<slot {height} />
	</div>
	<div class="">
		<slot name="footer" />
	</div>
</div>
