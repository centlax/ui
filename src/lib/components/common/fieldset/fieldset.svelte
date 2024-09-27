<script lang="ts">
	let { children, href, hint, label, name, help, error, ...props } = $props();
</script>

<fieldset {...props}>
	<div class="mb-2">
		<label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
		<svelte:element this={href ? 'a' : 'span'} {href}>{hint}</svelte:element>
	</div>
	{@render children()}
	<p class="mt-2 text-sm text-gray-500">We'll only use this for spam.</p>
</fieldset>
