<script lang="ts">
	import { components } from '$lib/config/imports/components';
	import { config } from '$lib/config/stores/index';
	import { page } from '$app/stores';
	import { twJoin } from 'tailwind-merge';

	type GroupedComponents = {
		group: string;
		components: { name: string; path: string }[];
	};

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
		}
	};
</script>

<div
	class="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19rem] pb-10 pl-8 pr-6 overflow-y-auto bg-white dark:bg-gray-900/20"
>
	<nav id="nav" class="lg:text-sm lg:leading-6 relative">
		<div class="sticky top-0 -ml-0.5 pointer-events-none">
			<div class="h-10 bg-white/10 dark:bg-gray-900/10"></div>
		</div>
		<ul>
			<li>
				<a
					class="group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold text-primary-500 dark:text-primary-400"
					href="/docs/installation"
					><div
						class="mr-4 rounded-md ring-1 ring-gray-900/5 shadow-sm group-hover:shadow group-hover:ring-gray-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-primary-200 dark:group-hover:bg-primary-500 dark:bg-primary-500 dark:highlight-white/10"
					>
						<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none"
							><path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M8.5 7c1.093 0 2.117.27 3 .743V17a6.345 6.345 0 0 0-3-.743c-1.093 0-2.617.27-3.5.743V7.743C5.883 7.27 7.407 7 8.5 7Z"
								class="fill-primary-200 group-hover:fill-primary-500 dark:fill-primary-300 dark:group-hover:fill-primary-300"
							></path><path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M15.5 7c1.093 0 2.617.27 3.5.743V17c-.883-.473-2.407-.743-3.5-.743s-2.117.27-3 .743V7.743a6.344 6.344 0 0 1 3-.743Z"
								class="fill-primary-400 group-hover:fill-primary-500 dark:fill-primary-200 dark:group-hover:fill-primary-200"
							></path></svg
						>
					</div>
					Documentation</a
				>
			</li>
			<li>
				<a
					class="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
					href="https://tailwindui.com/components?ref=sidebar"
					><div
						class="mr-4 rounded-md ring-1 ring-gray-900/5 shadow-sm group-hover:shadow group-hover:ring-gray-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-indigo-200 dark:group-hover:bg-indigo-500 dark:bg-gray-800 dark:highlight-white/5"
					>
						<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none"
							><path
								d="m6 9 6-3 6 3v6l-6 3-6-3V9Z"
								class="fill-indigo-100 group-hover:fill-indigo-200 dark:fill-gray-400"
							></path><path
								d="m6 9 6 3v7l-6-3V9Z"
								class="fill-indigo-300 group-hover:fill-indigo-400 dark:group-hover:fill-indigo-300 dark:fill-gray-500"
							></path><path
								d="m18 9-6 3v7l6-3V9Z"
								class="fill-indigo-400 group-hover:fill-indigo-500 dark:group-hover:fill-indigo-400 dark:fill-gray-600"
							></path></svg
						>
					</div>
					Components</a
				>
			</li>
			<li>
				<a
					class="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
					href="https://tailwindui.com/templates?ref=sidebar"
					><div
						class="mr-4 rounded-md ring-1 ring-gray-900/5 shadow-sm group-hover:shadow group-hover:ring-gray-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-fuchsia-200 dark:group-hover:bg-fuchsia-600 dark:bg-gray-800 dark:highlight-white/5"
					>
						<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none"
							><path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M8 6C6.89543 6 6 6.89543 6 8V16C6 17.1046 6.89543 18 8 18H10.5C11.0523 18 11.5 17.5523 11.5 17V12C11.5 10.6193 12.6193 9.5 14 9.5H18V8C18 6.89543 17.1046 6 16 6H8ZM7.25 8C7.25 7.58579 7.58579 7.25 8 7.25H8.01C8.42421 7.25 8.76 7.58579 8.76 8C8.76 8.41421 8.42421 8.75 8.01 8.75H8C7.58579 8.75 7.25 8.41421 7.25 8ZM10 7.25C9.58579 7.25 9.25 7.58579 9.25 8C9.25 8.41421 9.58579 8.75 10 8.75H10.01C10.4242 8.75 10.76 8.41421 10.76 8C10.76 7.58579 10.4242 7.25 10.01 7.25H10Z"
								fill="#E879F9"
								class="fill-fuchsia-400 group-hover:fill-fuchsia-500 dark:group-hover:fill-fuchsia-300 dark:fill-gray-400"
							></path><path
								d="M13 12C13 11.4477 13.4477 11 14 11H17C17.5523 11 18 11.4477 18 12V17C18 17.5523 17.5523 18 17 18H14C13.4477 18 13 17.5523 13 17V12Z"
								fill="#F0ABFC"
								class="fill-fuchsia-300 group-hover:fill-fuchsia-400 dark:fill-gray-500"
							></path></svg
						>
					</div>
					Templates</a
				>
			</li>

			<li>
				<a
					class="group flex items-center lg:text-sm lg:leading-6 mb-4 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
					href="https://github.com/tailwindlabs/tailwindcss/discussions"
					><div
						class="mr-4 rounded-md ring-1 ring-gray-900/5 shadow-sm group-hover:shadow group-hover:ring-gray-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-violet-200 dark:group-hover:bg-violet-500 dark:bg-gray-800 dark:highlight-white/5"
					>
						<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none"
							><path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M11 5a6 6 0 0 0-4.687 9.746c.215.27.315.62.231.954l-.514 2.058a1 1 0 0 0 1.485 1.1l2.848-1.71c.174-.104.374-.15.576-.148H13a6 6 0 0 0 0-12h-2Z"
								class="fill-violet-400 group-hover:fill-violet-500 dark:group-hover:fill-violet-300 dark:fill-gray-600"
							></path><circle
								cx="12"
								cy="11"
								r="1"
								class="fill-white dark:group-hover:fill-white dark:fill-gray-400"
							></circle><circle
								cx="9"
								cy="11"
								r="1"
								class="fill-violet-200 dark:group-hover:fill-white dark:fill-gray-400"
							></circle><circle
								cx="15"
								cy="11"
								r="1"
								class="fill-violet-200 dark:fill-gray-400 dark:group-hover:fill-white"
							></circle></svg
						>
					</div>
					Community</a
				>
			</li>

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
