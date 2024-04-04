<script lang="ts">
	import { UDivider } from '$lib/index.js';
	import { PaneGroup, Pane, PaneResizer } from 'paneforge';
	export let aside = {
		min: 10,
		auto: 15,
		max: 20
	};
	let main = {
		auto: 80
	};

	const css = {
		base: 'bg-white dark:bg-gray-900 w-full min-h-screen'
	};
</script>

<PaneGroup direction="horizontal" class={css.base}>
	<Pane defaultSize={aside.auto} minSize={aside.min} maxSize={aside.max}>
		<slot name="aside" />
	</Pane>

	<PaneResizer class="min-h-[200px] w-[1px] bg-green-600">
		<UDivider />
	</PaneResizer>

	<Pane defaultSize={main.auto}>
		<slot name="header" />
		<slot name="main" />
	</Pane>
</PaneGroup>
