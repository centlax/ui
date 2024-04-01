<script lang="ts">
	import type { ColorPallet } from '$lib/types/index.js';
	/* imports ==== === === === === === */
	import { Switch, type SwitchProps, Checkbox } from 'bits-ui';
	import { colors } from '$lib/theme/colors.js';
	/* props ==== === === === === === */

	export let color: keyof ColorPallet = 'primary';
	/* configs ==== === === === === === */
</script>

<Switch.Root
	{...$$restProps}
	style="
			--fore: {colors[color][600]};
			--back: {colors[color][500]};
			--dark-fore: {colors[color][600]};
			--dark-back: {colors[color][500]};
		"
	id="switch"
	class="switch peer inline-flex h-[36px] bg-gray-100 min-h-[36px] w-[60px] shrink-0 cursor-pointer items-center rounded-full px-[3px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-foreground data-[state=unchecked]:bg-dark-10 data-[state=unchecked]:shadow-mini-inset dark:data-[state=checked]:bg-foreground"
>
	<Switch.Thumb
		class="pointer-events-none bg-red-600 block size-[30px] shrink-0 rounded-full bg-background transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:shadow-mini dark:border dark:border-background/30 dark:bg-foreground dark:shadow-popover dark:data-[state=unchecked]:border"
	/>
</Switch.Root>
