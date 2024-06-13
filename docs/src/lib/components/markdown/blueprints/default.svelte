<script lang="ts" context="module">
	import { pre, code } from '..';
	export { pre, code };
</script>

<script lang="ts">
	export let title = '';
	export let description = '';
	export let source = '';
	export let component = '';
	export let radix = '';
</script>

<slot {title} {description} {source} {component} {radix} />
