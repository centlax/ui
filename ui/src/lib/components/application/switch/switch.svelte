<script lang="ts">
	/** Imports */
	import { createSwitch, createSync, melt } from '@melt-ui/svelte';
	import { cubicInOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import { _switch } from './switch.config.js';
	import { useProps, useUI } from '$lib/import.js';
	import { merge, stringify } from '$lib/utils/index.js';

	/** Props */
	const props = useProps('Switch');
	let _class = props.class;
	export { _class as class };
	export let override = props.override;

	export let value = false;

	/** Melt */
	const {
		elements: { root, input },
		states: _states
	} = createSwitch();
	const sync = createSync(_states);
	$: sync.checked(value, (v) => (value = v));

	/** Config */
	let states: boolean[] = [false, true];
	const [send, receive] = crossfade({
		duration: 250,
		easing: cubicInOut
	});

	/** UI */
	const { css, classer } = useUI(_switch, _class, override);
</script>

<button {...$$restProps} use:melt={$root} class={merge(stringify(css.root), classer)}>
	{#each states as state}
		<span class={stringify(css.state)}>
			{#if state === value}
				<span
					in:send={{ key: 'checked' }}
					out:receive={{ key: 'checked' }}
					class={stringify(css.state.thumb)}
				>
					<slot checked={value} />
				</span>
			{/if}
		</span>
	{/each}
	<input use:melt={$input} />
</button>
