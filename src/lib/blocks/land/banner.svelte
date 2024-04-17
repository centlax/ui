<script lang="ts">
	// imports
	import { twJoin } from 'tailwind-merge';
	// props
	export let message: string = '';
	export let action: string = '';
	export let href: string = '';
	// config
	const css = {
		wrapper: 'relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 dark:text-gray-300',
		background: 'bg-gray-50/50 dark:bg-gray-800/50',
		ring: 'ring-1 ring-gray-300 dark:ring-gray-600/50 hover:ring-gray-900/20',
		base: 'font-semibold text-primary-600 dark:text-primary-500'
	};
</script>

<div class={twJoin(css.wrapper, css.background, css.ring)}>
	{message}
	<a {href} class={css.base}>
		<span class="absolute inset-0" aria-hidden="true"></span>
		{action}
		<span aria-hidden="true">&rarr;</span>
	</a>
</div>
