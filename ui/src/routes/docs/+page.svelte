<script lang="ts">
	import { UPopover, UResize, UTooltip } from '$lib/index.js';
	let date = $state<HTMLElement>(null!);
</script>

<div bind:this={date} class="w-fit rounded bg-red-500">custom anchor</div>

<UTooltip>
	<UTooltip.Trigger>OPEN</UTooltip.Trigger>
	<UTooltip.Content>CONTENT</UTooltip.Content>
</UTooltip>

<UPopover>
	<UPopover.Trigger>OPEN</UPopover.Trigger>
	<UPopover.Content side="left" custom-anchor={date} class="w-[10rem] rounded-lg bg-white p-2">
		CONTENT
		<UPopover.Trigger class="bg-red-500">CLOSE</UPopover.Trigger>
	</UPopover.Content>
</UPopover>

<UResize.Layout direction="horizontal">
	<UResize.Panel>
		ONE
	</UResize.Panel>
	<UResize.Handle class="w-2 bg-purple-500"/>
	<UResize.Panel>
		TWO
	</UResize.Panel>
</UResize.Layout>
