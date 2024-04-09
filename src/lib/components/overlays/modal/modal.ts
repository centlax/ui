export const css = {
	wrapper: 'relative z-50',
	inner: 'fixed inset-0 overflow-y-auto',
	container: 'flex min-h-full items-end sm:items-center justify-center text-center',
	content:
		'fixed left-[50%] top-[50%] z-50 w-full max-w-[94%] translate-x-[-50%] translate-y-[-50%] rounded-card-lg border bg-background p-5 shadow-popover outline-none sm:max-w-[490px] md:w-full',
	padding: 'p-4 sm:p-0',
	margin: 'sm:my-8',
	base: 'relative text-left rtl:text-right flex flex-col',
	overlay: {
		base: 'fixed inset-0 transition-opacity',
		background: 'bg-gray-200/75 dark:bg-gray-800/75',
		// Syntax for `<TransitionRoot>` component https://headlessui.com/vue/transition#basic-example
		transition: {
			enter: 'ease-out duration-300',
			enterFrom: 'opacity-0',
			enterTo: 'opacity-100',
			leave: 'ease-in duration-200',
			leaveFrom: 'opacity-100',
			leaveTo: 'opacity-0'
		}
	},

	background: 'bg-white dark:bg-gray-900',
	ring: '',
	rounded: 'rounded-lg',
	shadow: 'shadow-xl',
	width: 'w-full sm:max-w-lg',
	height: '',
	fullscreen: 'w-screen h-screen',
	// Syntax for `<TransitionRoot>` component https://headlessui.com/vue/transition#basic-example
	transition: {
		enter: 'ease-out duration-300',
		enterFrom: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
		enterTo: 'opacity-100 translate-y-0 sm:scale-100',
		leave: 'ease-in duration-200',
		leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
		leaveTo: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
	}
};
