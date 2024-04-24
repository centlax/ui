<script lang="ts">
	// imports
	// props
	let elementX: number = 200;
	let elementY: number = 200;
	const css = {
		wrapper:
			'relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow',
		to: 'hover:ring-primary-500 dark:hover:ring-primary-400 transition-shadow duration-200',
		base: 'flex-1 flex flex-col overflow-hidden',
		container: '',
		body: {
			base: ''
		},
		background:
			'bg-white dark:bg-gray-900 hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity]',
		ring: '',
		rounded: 'rounded-xl',
		shadow: '',
		icon: {
			wrapper: 'mb-2 pointer-events-none',
			base: 'w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white'
		},
		title: 'text-gray-900 dark:text-white text-base font-bold truncate',
		description: 'text-[15px] text-gray-500 dark:text-gray-400 mt-1'
	};
</script>

<div
	style="
  '--x': {elementX}px,
  '--y': {elementY}px,
"
>
	<slot />
</div>
