<script lang="ts">
	import { PaneGroup, Pane, PaneResizer } from 'paneforge';
</script>

<div class="m-20 bg-pink-500">
	<PaneGroup direction="horizontal">
		<Pane defaultSize={50}>Pane 1</Pane>
		<PaneResizer class="w-2 bg-red-500" />
		<Pane defaultSize={50}>Pane 2</Pane>
	</PaneGroup>
</div>
