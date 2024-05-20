<script lang="ts" context="module">
	export const css = {
		root: 'mt-8 pb-24',
		prose: 'prose prose-primary-500 dark:prose-invert max-w-none'
	};
</script>

<script lang="ts">
	import { stringify } from '$lib/utils/index.js';
</script>

<div class={stringify(css)}>
	<slot />
</div>
