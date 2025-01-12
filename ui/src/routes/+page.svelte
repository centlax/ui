<script lang="ts">
	import { UResize } from '$lib/index.js';
</script>

<UResize.Layout class="h-screen relative">
	<UResize.Panel class=" ">ONE</UResize.Panel>
	<UResize.Handle/>
	<UResize.Panel class="border">TWO</UResize.Panel>
	<UResize.PGroup direction="vertical">
		<UResize.Panel class="border-b border-[--ui-border]">ONE</UResize.Panel>
		<UResize.Handle/>
		<UResize.Panel>TWO</UResize.Panel>
	</UResize.PGroup>
</UResize.Layout>
