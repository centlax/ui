<script lang="ts">
	import {
		UButton,
		UDrawer,
		UIcon,
		URadio,
		URadioGroup,
		USheet,
		USite,
		USwitch,
		UToggle
	} from '$lib/index.js';
	import Logo from '../../logo.svelte';
	import { data } from './one.js';
	import { useDark } from '$lib/composables/dark.js';

	let {}: {} = $props();
	const { heads, foots } = data;
	const dark = useDark();
	let simba = $state<HTMLElement>(null!);
</script>

{#snippet centlax()}
	<a href="/" class="-m-1.5 p-1.5">
		<span class="sr-only">Centlax</span>
		<Logo />
	</a>
{/snippet}
{#snippet site(mode: 'header' | 'aside')}
	{@render centlax()}
	<UToggle as="button" class={mode === 'header' ? 'flex lg:hidden' : ''}>
		<span class="sr-only">Open/Close main menu</span>
		<UIcon
			class="size-6"
			name={mode === 'header'
				? 'i-fluent-text-align-justify-24-regular'
				: 'i-fluent-dismiss-24-regular'}
		/>
	</UToggle>
{/snippet}

<USite.Layout class="container">
	{#snippet children()}
		<USheet transition={{ duration: 300 }} class="w-full sm:max-w-[--site-width]">
			<!-- Header -->
			<USite.Header items={heads}>
				{#snippet west()}
					{@render site('header')}
				{/snippet}
				{#snippet east()}
					<a href="/" class="0 text-sm/6 font-semibold"
						>Log in <span aria-hidden="true">&rarr;</span></a
					>
				{/snippet}
			</USite.Header>

			<!-- Aside  -->
			{#snippet content()}
				<USite.Aside items={heads}>
					{#snippet north()}
						{@render site('aside')}
					{/snippet}
				</USite.Aside>
			{/snippet}
		</USheet>

		<!-- Main  -->
		<USite.Main>
			<UButton text="dark" onclick={dark.toggle} />

			<USwitch class="mt-2" />
			<UDrawer />
			<URadioGroup>
				<URadio value="one" />
				<URadio value="two" />
				<URadio value="three" />
			</URadioGroup>
		</USite.Main>

		<!-- Footer -->
		<USite.Footer />
	{/snippet}
</USite.Layout>
