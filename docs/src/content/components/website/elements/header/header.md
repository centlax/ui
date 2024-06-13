---
title: Header
description: Displays a button or a component that looks like a button.
featured: true
component: true
---

<script>
    import Source from '$lib/components/markdown/source.svelte';
</script>



Use the default slot to set the text of the Button.


```bash
npx shadcn-svelte@latest add alert-dialog
```


```svelte
<script lang="ts">
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
</script>

<AlertDialog.Root>
	<AlertDialog.Trigger>Open</AlertDialog.Trigger>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
			<AlertDialog.Description>
				This action cannot be undone. from our servers.
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
			<AlertDialog.Action>Continue</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
```
