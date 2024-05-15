<script lang="ts">
	import { toggleMode } from 'mode-watcher';
	import { config } from '$lib/ui.config.js';
	let icon = {
		dark: config.icon.dark,
		light: config.icon.light
	};
</script>

<slot {toggleMode} {icon} />
