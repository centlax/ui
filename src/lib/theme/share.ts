// share.ts
// @unocss-include
export const share = {
	color: {
		primary: 'primary',
		success: 'success',
		warning: 'warning',
		danger: 'danger'
	},
	rounded: {
		xs: 'rounded',
		sm: 'rounded',
		md: 'rounded-md',
		lg: 'rounded-md',
		xl: 'rounded-md'
	},
	size: {
		xs: 'xs',
		sm: 'sm',
		md: 'md',
		lg: 'lg',
		xl: 'xl'
	},
	text: {
		xs: 'text-xs sm:leading-6',
		sm: 'text-sm sm:leading-6',
		md: 'text-sm sm:leading-6',
		lg: 'text-sm sm:leading-6',
		xl: 'text-sm sm:leading-6'
	},
	gap: {
		xs: 'gap-x-1',
		sm: 'gap-x-1',
		md: 'gap-x-1.5',
		lg: 'gap-x-2',
		xl: 'gap-x-2.5'
	},
	padding: {
		xs: 'px-2 py-1',
		sm: 'px-2 py-1',
		md: 'px-2.5 py-1.5',
		lg: 'px-3 py-2',
		xl: 'px-3.5 py-2.5'
	},
	square: {
		xs: 'p-1',
		sm: 'p-1',
		md: 'p-1.5',
		lg: 'p-2',
		xl: 'p-2.5'
	},
	icon: {
		size: {
			xs: 'size-4',
			sm: 'size-5',
			md: 'size-5',
			lg: 'size-5',
			xl: 'size-6'
		}
	}
};

export const arrowUI = {
	base: 'invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2',
	ring: 'before:ring-1 before:ring-gray-200 dark:before:ring-gray-800',
	rounded: 'before:rounded-sm',
	background: 'before:bg-gray-200 dark:before:bg-gray-800',
	shadow: 'before:shadow',
	// eslint-disable-next-line quotes
	placement: `group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1`
};

export const iconUI = {
	dark: 'heroicons:moon-20-solid',
	light: 'heroicons:sun-20-solid',
	system: 'heroicons:computer-desktop-20-solid',
	search: 'heroicons:magnifying-glass-20-solid',
	external: 'heroicons:arrow-up-right-20-solid',
	chevron: 'heroicons:chevron-down-20-solid',
	hash: 'heroicons:hashtag-20-solid'
};
