<script lang="ts">
	import { Button, type ButtonProps } from 'bits-ui';
	type $$Props = ButtonProps;
</script>

<Button.Root
	{...$$restProps}
	id="h"
	class="inline-flex h-12 items-center justify-center rounded-input bg-dark
    px-[21px] text-[15px] font-semibold text-background shadow-mini
    hover:bg-dark/95 active:scale-98 active:transition-all"
>
	Unlimited
</Button.Root>
