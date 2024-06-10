<script lang="ts">
	import type { Link } from '@centlax/ui';
	import AsideMenu from './aside-menu.svelte';
	import AsideLinks from './aside-links.svelte';
	const links: Link[] = [
		{ label: 'Introduction', icon: 'i-fluent-star-emphasis-20-filled' },
		{ label: 'Installation', icon: 'i-fluent-code-text-20-filled' },
		{ label: 'Theming', icon: 'i-fluent-color-20-filled' },
		{ label: 'Configuration', icon: 'i-fluent-settings-20-filled' },
		{ label: 'Shortcuts', icon: 'i-fluent-fast-acceleration-20-filled' }
	];
	const asideLinks: Link[] = [
		{ label: 'Elements', children: [{ label: 'Accordion' }, { label: 'Button' }] },
		{ label: 'Forms', children: [{ label: 'Checkbox' }, { label: 'Form' }] }
	];
</script>

<div
	class="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[18rem] pb-10 pl-8 pr-6 overflow-y-auto bg-white dark:bg-gray-900/20"
>
	<nav id="nav" class="lg:text-sm mt-10 lg:leading-6 relative">
		<ul>
			<AsideMenu {links} />
			<AsideLinks links={asideLinks} />
		</ul>
	</nav>
</div>
