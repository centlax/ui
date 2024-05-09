<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import type { PageData } from './$types.js';
	import { schema } from './schema.js';
	import { UInput, UForm, UFieldset, UButton } from '$lib/index.js';

	export let data: PageData;
	const form = superForm(data.form, {
		validators: zodClient(schema)
	});
	const { form: formData, enhance } = form;
</script>

<svelte:head>
	<title>Sign in - Centlax</title>
</svelte:head>

<UForm debug use={enhance} class="space-y-6" method="POST" data={$formData}>
	<UFieldset
		{form}
		label="Email or username"
		name="email"
		hint={{ message: 'Forgot password?', href: '/recover/password' }}
		let:attrs
	>
		<UInput {...attrs} type="email" bind:value={$formData.email} />
	</UFieldset>

	<UFieldset {form} name="password" let:attrs>
		<UInput {...attrs} type="password" bind:value={$formData.password} />
	</UFieldset>
	<UButton type="submit" block label="Sign in" />
</UForm>
