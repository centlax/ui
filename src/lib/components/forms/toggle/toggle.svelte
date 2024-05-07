<script lang="ts">
	import { createSwitch, melt } from '@melt-ui/svelte';
	import { ui } from '$lib/ui.config.js';
	import { css } from './toggle.js';
	import type { Size } from '$lib/types/index.js';
	import { twJoin, twMerge } from 'tailwind-merge';
	type Icon = {
		on: string;
		off: string;
	};
	import { UIcon } from '$lib/index.js';
	import Icon from '$lib/components/elements/+/icon.svelte';
	export let disabled: boolean = false;
	export let required: boolean = false;
	export let name: string = '';
	export let value: string = '';
	export let state: boolean = false;
	//export let size: Size = ui.size;
	export let icon: Icon = { on: '', off: '' };
	export let thumbUI: string = '';

	let classProp = '';
	export { classProp as class };

	const {
		elements: { root, input }
	} = createSwitch({
		disabled: disabled,
		required: required,
		name: name,
		value: value,
		onCheckedChange: ({ next }) => {
			return (state = next);
		}
	});

	$: buttonCSS = twMerge(
		twJoin(
			'focus:outline-none',
			'focus-visible:ring-2 focus-visible:ring-primary-600 dark:focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900',
			'relative cursor-default rounded-full bg-magnum-800 transition-colors data-[state=checked]:bg-magnum-950',
			'data-[state=checked]:bg-primary-600 data-[state=checked]:dark:bg-primary-500',
			'data-[state=unchecked]:bg-gray-200 data-[state=unchecked]:dark:bg-gray-700'
		),
		classProp
	);
	$: thumbCSS = twMerge(
		twJoin(
			'text-success-600',
			'thumb block rounded-full bg-white',
			'transition translate-x-3 rtl:-translate-x-3',
			'rotate-45 rotate-90 rotate-180 duration-150'
		),
		thumbUI
	);
	$: iconCSS = twJoin(!state && icon.on, state && icon.off, 'absolute inset-0 h-full w-full flex');
</script>

<form>
	<div class="flex items-center">
		<button use:melt={$root} class={buttonCSS} aria-labelledby="airplane-mode-label">
			<span class={thumbCSS}>
				<UIcon name="{iconCSS} text-sucess-600" />
			</span>
		</button>
		<input use:melt={$input} />
	</div>
</form>

<style>
	button {
		--w: 3rem;
		--h: 1.5rem;
		--padding: 0.125rem;
		width: var(--w);
		height: var(--h);
	}

	.thumb {
		--size: 1.25rem;
		width: var(--size);
		height: var(--size);
		transform: translateX(var(--padding));
	}

	:global([data-state='checked']) .thumb {
		transform: translateX(calc(var(--w) - var(--size) - var(--padding)));
	}
</style>
