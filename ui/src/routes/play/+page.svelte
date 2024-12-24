<script lang="ts">
	import { UChoose, UDrawer, UResize } from '$lib/index.js';

	let value = $state<string>('');
</script>

<UResize.Layout direction="horizontal">
	<UResize.PGroup direction="horizontal">
		<UResize.Panel>PANEL ONE</UResize.Panel>
		<UResize.Handle class="w-2 bg-red-500" />
		<UResize.Panel>PANEL TWO</UResize.Panel>
	</UResize.PGroup>
</UResize.Layout>

<UDrawer>
	<UDrawer.Trigger>OPEN</UDrawer.Trigger>
	<UDrawer.Content>CONTENT</UDrawer.Content>
</UDrawer>

<UChoose>
	<UChoose.Trigger />
	<UChoose.Content>
		<UChoose.OGroup>
			<UChoose.Option />
		</UChoose.OGroup>
	</UChoose.Content>
</UChoose>
