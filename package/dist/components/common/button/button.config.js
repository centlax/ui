export const props = {
    class: {},
    override: false,
    loading: false,
    disabled: false,
    href: '',
    label: '',
    color: 'sky',
    variant: 'solid',
    size: 'md'
};
const styles = {
    root: {
        flex: 'flex justify-center items-center',
        border: 'focus:outline-none focus-visible:outline-0',
        effect: 'disabled:opacity-75',
        interactive: 'cursor-pointer disabled:cursor-not-allowed',
        typography: 'font-semibold'
    },
    opt: {
        size: {
            xs: {
                flex: 'gap-x-1',
                typography: 'text-xs',
                spacing: 'px-2 py-1',
                border: 'rounded'
            },
            sm: {
                flex: 'gap-x-1',
                typography: 'text-sm',
                spacing: 'px-2 py-1',
                border: 'rounded'
            },
            md: {
                flex: 'gap-x-1.5',
                typography: 'text-sm',
                spacing: 'px-2.5 py-1.5',
                border: 'rounded-md'
            },
            lg: {
                flex: 'gap-x-2',
                typography: 'text-sm',
                spacing: 'px-3 py-2',
                border: 'rounded-md'
            },
            xl: {
                flex: 'gap-x-2',
                typography: 'text-sm',
                spacing: 'px-3.5 py-2.5',
                border: 'rounded-md'
            }
        },
        variant: {
            solid: {
                color: {
                    background: 'bg-color-500 hover:bg-color-600 disabled:bg-color-500',
                    border: `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color-500`,
                    typography: 'text-white',
                    effect: 'shadow-sm'
                },
                'black-white': {
                    background: `bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 disabled:bg-gray-900 dark:disabled:bg-white`,
                    border: 'focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500',
                    typography: 'text-white dark:text-gray-900',
                    effect: 'shadow-sm'
                }
            }
        }
    }
};
export const button = styles;
