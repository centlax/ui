<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import { UNotification } from '$lib/index.js';
</script>

<div id="ui-layout">
	<ModeWatcher />
	<UNotification />
	<slot />
</div>
