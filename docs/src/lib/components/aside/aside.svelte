<script lang="ts">
	import { components } from '$lib/config/imports/components';
	import { config } from '$lib/config/stores/index';
	import { page } from '$app/stores';
	import { twJoin } from 'tailwind-merge';

	type GroupedComponents = {
		group: string;
		components: { name: string; path: string }[];
	};

	const starts = [
		{
			label: 'introduction',
			icon: 'i-fluent-star-emphasis-20-filled',
			get href() {
				return `/start/${this.label}`;
			}
		},
		{
			label: 'installation',
			icon: 'i-fluent-window-dev-tools-20-filled',
			get href() {
				return `/start/${this.label}`;
			}
		},
		{
			label: 'foundation',
			icon: 'i-fluent-layout-column-four-20-filled',
			get href() {
				return `/start/${this.label}`;
			}
		}
	];

	$: grouped = Object.entries(components)
		.filter(([, component]) => component.category === $config.category)
		.reduce((acc, [componentName, component]) => {
			const group = acc.find((g) => g.group === component.group);
			const componentData = { name: componentName, path: component.path };

			if (group) {
				group.components.push(componentData);
			} else {
				acc.push({ group: component.group, components: [componentData] });
			}

			return acc;
		}, [] as GroupedComponents[]);

	$: ui = {
		component: {
			active: twJoin(
				'block border-l pl-4 -ml-px text-primary-500 border-current font-semibold dark:text-primary-400'
			),
			inactive: twJoin(
				'block border-l pl-4 -ml-px border-transparent hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300'
			)
		},
		start: {
			active: {
				base: twJoin(
					'group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold text-primary-500 dark:text-primary-400'
				),
				icon: 'group-hover:shadow-primary-200 dark:group-hover:bg-primary-500 dark:bg-primary-500 dark:highlight-white/10'
			},
			inactive: {
				base: twJoin(
					'group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300'
				),
				icon: 'group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-gray-800 dark:highlight-white/5'
			}
		}
	};
</script>

<div
	class="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[16rem] pb-10 pl-8 pr-6 overflow-y-auto bg-white dark:bg-gray-900/20"
>
	<nav id="nav" class="lg:text-sm lg:leading-6 relative">
		<div class="sticky top-0 -ml-0.5 pointer-events-none">
			<div class="h-10 bg-white/10 dark:bg-gray-900/10"></div>
		</div>
		<ul>
			{#each starts as start}
				<li>
					<a
						class="capitalize {ui.start[$page.url.pathname === start.href ? 'active' : 'inactive']
							.base}"
						href={start.href}
						><div
							class="flex justify-center items-center mr-4 rounded-md ring-1 ring-gray-900/5 shadow-sm group-hover:shadow group-hover:ring-gray-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 {ui
								.start[$page.url.pathname === start.href ? 'active' : 'inactive'].icon}"
						>
							<span class="{start.icon} size-6" />
						</div>
						{start.label}</a
					>
				</li>
			{/each}

			{#each grouped as comp}
				<li class="mt-12 lg:mt-8">
					<h5 class="mb-8 lg:mb-3 font-semibold text-gray-900 dark:text-gray-200 capitalize">
						{comp.group}
					</h5>
					<ul class="space-y-6 lg:space-y-2 border-l border-gray-200 dark:border-gray-800">
						{#each comp['components'] as com}
							<li>
								<a
									class="capitalize {ui.component[
										$page.url.pathname === `/components/${com.name}` ? 'active' : 'inactive'
									]}"
									href="/components/{com.name}"
									>{com.name.replaceAll('-', ' ')}
								</a>
							</li>
						{/each}
					</ul>
				</li>
			{/each}
		</ul>
	</nav>
</div>
