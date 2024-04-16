<script lang="ts">
	import { UDivider, UDashSide, UDashHead, UDashMain } from '$lib/index.js';
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
		base: 'bg-white dark:bg-gray-900 w-full'
	};
</script>

<PaneGroup direction="horizontal" class={css.base}>
	<Pane defaultSize={aside.auto} minSize={aside.min} maxSize={aside.max}>
		<slot name="side">
			<UDashSide />
		</slot>
	</Pane>

	<PaneResizer class="w-[10px] ">
		<UDivider class="h-full w-[2px] bg-gray-800 hover:bg-gray-700" />
	</PaneResizer>

	<Pane defaultSize={main.auto}>
		<slot name="head">
			<UDashHead />
		</slot>
		<slot name="main">
			<UDashMain />
		</slot>
	</Pane>
</PaneGroup>
