<script lang="ts">
	import { UField, UIcon, UInput, useDark } from '$lib/index.js';
	const dark = useDark();
</script>

<div class="bg-red-500/50 dark:bg-lime-500/50">
	MAIN
	<button onclick={dark.toggle}> mode </button>
</div>

<UField.Group class="mt-3">
	<UField.Label>Username or email</UField.Label>
	<UInput />
	<UField.Warn><UIcon name="i-fluent-info-24-regular" /> Not a valid email address.</UField.Warn>
</UField.Group>
