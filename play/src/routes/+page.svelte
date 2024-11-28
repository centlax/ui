<script lang="ts">
	import Logo from '$lib/components/logo/logo.svelte';
	import {
		UDashAside,
		USheet,
		UIcon,
		UDashHeader,
		UDashMain,
		USwitch,
		useDark,
		UInput,
		UAvatar,
		UDashLayout,

		UButton,
	} from '@centlax/ui';
	import { data } from './one';
	const dark = useDark();
	let sheet = $state(false);
	function toggle() {
		sheet = !sheet;
	}
	function dismiss() {
		sheet = false;
	}
	const { asides } = data;

</script>


{#snippet aside()}
	<UDashAside item-dismiss={dismiss} items={asides}>
		{#snippet north()}
			<Logo />
		{/snippet}
	</UDashAside>
{/snippet}
<UDashLayout>
	<USheet
		transition={{ duration: 250 }}
		from="west"
		bind:value={sheet}
		class="h-full w-full sm:w-[--dash-width] lg:z-50 lg:flex lg:flex-col "
	>
		<!-- Static sidebar for desktop -->
		<div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[--dash-width] lg:flex-col">
			<!-- Sidebar component, swap this element with another sidebar if you like -->
			{@render aside()}
		</div>
		{#snippet content()}
			<!-- Sidebar component, swap this element with another sidebar if you like -->
			{@render aside()}
			<div
				class="absolute left-full top-0 flex h-full w-10 items-start justify-center bg-neutral-900/10 pt-5"
			>
				<button onclick={toggle} type="button" class="-m-2.5 p-2.5">
					<span class="sr-only">Close sidebar</span>
					<UIcon class="size-6 text-white" name="i-fluent-dismiss-24-regular" />
				</button>
			</div>
		{/snippet}
	</USheet>

	<UDashHeader onclick={toggle}>
		{#snippet west()}
			<button onclick={toggle} type="button" class="-m-2.5 p-2.5 text-neutral-700 lg:hidden">
				<span class="sr-only">Open sidebar</span>
				<UIcon
					class="size-6 text-neutral-900 dark:text-white"
					name="i-fluent-text-align-justify-24-regular"
				/>
			</button>
		{/snippet}
		<form class="relative flex flex-1 items-center justify-center" action="#" method="GET">
			<label for="search-field" class="sr-only">Search</label>
			<UInput />
		</form>
		{#snippet east()}
			<button type="button" class="text-neutral-400 hover:text-neutral-500">
				<span class="sr-only">View notifications</span>
				<UIcon class="size-6" name="i-fluent-alert-24-regular" />
			</button>

			<UAvatar
				class="size-7 rounded-full bg-neutral-50"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
			/>
		{/snippet}
	</UDashHeader>
	<UDashMain>
		<USwitch onclick={dark.toggle} />
	</UDashMain>
</UDashLayout>
