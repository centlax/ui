<script lang="ts">
	import { UBody, UHeader, useDark, UInput } from '$lib/index.js';
	const dark = useDark();
</script>

<UBody>
	<UHeader />
	<button on:click={dark.toggle}>mode</button>
	<main class="p-2">
		<form class="space-y-3 mx-auto max-w-sm">
			<UInput placeholder="Email" type="email" />
			<UInput placeholder="Full name" type="text" />
			<UInput placeholder="password" type="password" />
		</form>
	</main>
</UBody>
