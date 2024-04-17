export const arrowUI = {
	base: 'invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2',
	ring: 'before:ring-1 before:ring-gray-200 dark:before:ring-gray-800',
	rounded: 'before:rounded-sm',
	background: 'before:bg-gray-200 dark:before:bg-gray-800',
	shadow: 'before:shadow',
	placement: `group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1`
};

export const overUI = {
	base: 'fixed inset-0 z-50 bg-black/50'
};

export const backUI = {
	content: 'outline-none z-[99]',
	trigger: 'inline-flex w-full',
	width: '',
	background: 'bg-white dark:bg-gray-900',
	shadow: 'shadow-lg',
	rounded: 'rounded-md',
	ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
	base: 'overflow-hidden focus:outline-none relative'
};
