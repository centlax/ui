<script lang="ts">
	import { toggleMode } from 'mode-watcher';
	import { ui } from '$lib/ui.config.js';
	let icon = {
		dark: ui.icon.dark,
		light: ui.icon.light
	};
</script>

<slot {toggleMode} {icon} />
