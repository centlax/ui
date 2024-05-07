<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { Field, Control, Label, Description, FieldErrors } from 'formsnap';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { UInput } from '$lib/index.js';

	export let data: any = null;
	export let schema: any = null;
	export let name: string = '';
	const form = superForm(data.form, {
		validators: zodClient(schema)
	});
	const { form: formData, enhance } = form;
</script>

<Field {form} {name}>
	<Control let:attrs>
		<Label>Email</Label>
		<UInput {...attrs} type="email" bind:value={$formData.email} />
	</Control>
	<Description>Use your company email if you have one.</Description>
	<FieldErrors />
</Field>
