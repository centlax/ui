<script lang="ts">
	import { twJoin } from 'tailwind-merge';

	export let name: string;
	$: spanUI = twJoin('text-current', $$props.class);
</script>

<span class="{name} {spanUI}" />
