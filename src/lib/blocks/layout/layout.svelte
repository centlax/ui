<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import { twJoin } from 'tailwind-merge';

	let classProp: string | string[] = '';
	export { classProp as class };
</script>

<div id="ui-app" class={twJoin('relative flex flex-col justify-between min-h-lvh', classProp)}>
	<ModeWatcher />
	<slot />
</div>
