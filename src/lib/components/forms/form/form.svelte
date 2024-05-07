<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { Field, Control, Label, Description, FieldErrors } from 'formsnap';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import SuperDebug from 'sveltekit-superforms';
	import { UInput } from '$lib/index.js';

	export let data: any = null;
	export let schema: any = null;
	const form = superForm(data.form, {
		validators: zodClient(schema)
	});
	const { form: formData, enhance } = form;
</script>

<SuperDebug data={$formData} />
<form method="POST" use:enhance>
	<Field {form} name="email">
		<Control let:attrs>
			<Label>Email</Label>
			<UInput {...attrs} type="email" bind:value={$formData.email} />
		</Control>
		<Description>Use your company email if you have one.</Description>
		<FieldErrors />
	</Field>
</form>
