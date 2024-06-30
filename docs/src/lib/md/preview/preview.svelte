<script lang="ts">
	import Demo from '$content/components/common/elements/button/demos/button/index.svelte';
	import { marked } from 'marked';
	import demoRaw from '$content/components/common/elements/button/demos/button/index.svelte?raw';
	import { ButtonCopy, Switch } from '$lib/components';
	import { parseMD } from '$lib/utils/parser';
	import { onMount } from 'svelte';
	import { pre as Pre } from '..';

	$: value = 'Preview';
	const items = [
		{ value: 'Preview', icon: 'i-fluent-eye-lines-20-filled' },
		{ value: 'Svelte', icon: 'i-fluent-code-text-20-filled' }
	];
	$: code = marked(`\`\`\`svelte\n${demoRaw}\n\`\`\`\n`);

	onMount(async () => {
		code = await parseMD(code);
	});

	export let name: string = 'base';
	export let props: object = {};
	export let title: string = '';
	export let requires: string = '';
</script>

<div class="flex-col gap-y-2">
	<div class="flex justify-between my-4 space-x-1 rounded-lg p-0.5">
		<div class="flex items-center min-w-0">
			<a class="f" href="/">{title}</a>
			{#if requires}
				<a
					class="ml-3 hidden whitespace-nowrap rounded-lg bg-gray-100 px-2 py-0.5 text-xs font-semibold leading-6 text-gray-700 hover:bg-gray-200 lg:block"
					href="/documentation#using-html-and-your-own-js">Requires JS</a
				>
			{/if}
		</div>
		<div class="ml-6 flex items-center">
			<Switch {items} bind:value />
			<div class="ml-6 mr-3 hidden h-5 w-px bg-gray-900/10 sm:block"></div>
			<ButtonCopy />
		</div>
	</div>

	<div class={value != 'Preview' ? 'hidden' : ''}>
		<div class="w-full overflow-hidden rounded-lg ring-1 ring-inset ring-gray-900/10">
			{#if props && !name}
				<div class="w-full mt-2 p-4 bg-gray-500/10 h-8"></div>
			{/if}
			<div class="p-4">
				<Demo />
			</div>
		</div>
	</div>

	<div class={value == 'Preview' ? 'hidden' : ''}>
		<Pre {...$$restProps} language="svelte">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html code}
		</Pre>
	</div>
</div>
