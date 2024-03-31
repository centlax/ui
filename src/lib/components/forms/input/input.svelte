<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import type { Size } from '$lib/types/index.js';
	import { twJoin, twMerge } from 'tailwind-merge';
	import { css } from './styles.js';
	type $$Props = HTMLInputAttributes & {
		size: Size;
	};
	export let size: Size = 'md';
	// config
	$: inputCSS = twMerge(css.base, css.rounded, css.placeholder, css.text[size], $$props.class);
</script>

<div class="relative">
	<input {...$$restProps} />
	<span id="east" class={inputCSS}>
		<slot name="east" />
	</span>
	<span id="west">
		<slot name="west" />
	</span>
</div>

<style lang="ts">
</style>
