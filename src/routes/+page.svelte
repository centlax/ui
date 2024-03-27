
<script lang="ts">
	import {colors} from '$lib/theme/colors.js';
	import { UIcon } from '$lib/index.js';
	let isDark: boolean = false;
	let color = isDark ? colors.green[600]: colors.pink[500];
	let _text_color = isDark ? colors.red[600]: colors.red[500];
</script>

<div style='--bg-color:{color};--text-color:{_text_color}'
	class="font-bold">TEXT
</div>

<style lang="postcss">
	div {
		background-color: var(--bg-color);
		color: var(--text-color);
	}
</style>
