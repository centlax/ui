<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { Field, Control, Label, Description, FieldErrors } from 'formsnap';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import type { PageData } from './$types.js';
	import { allergies, schema, themes } from './schema.js';
	import SuperDebug from 'sveltekit-superforms';
	import { UInput, UForm, UFieldset, UButton } from '$lib/index.js';

	export let data: PageData;

	const form = superForm(data.form, {
		validators: zodClient(schema)
	});
	const { form: formData, enhance } = form;
</script>

<UForm use={enhance} class="space-y-6" debug method="POST" data={$formData}>
	<UFieldset
		label="Email"
		{form}
		name="email"
		hint={{ message: 'Forgot password?', href: '/recover/password' }}
		let:attrs
		let:constraints
	>
	<UInput {...attrs} type="email" bind:value={$formData.email} />
	</UFieldset>

	<UFieldset label="Password" {form} name="password" let:attrs>
		<UInput {...attrs} type="password" bind:value={$formData.password} />
	</UFieldset>
	<UButton type="submit" block label="Sign in" />
</UForm>
