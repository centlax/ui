export const props = {
    class: {},
    override: false,
    vertical: false,
    links: []
};
const styles = {
    root: {},
    opt: {
        mode: {
            horizontal: {
                flex: 'flex items-center gap-x-6'
            },
            vertical: {
                flex: 'flex-col space-y-2'
            }
        }
    },
    list: {
        interactive: 'cursor-pointer',
        ancor: {
            typography: 'text-gray-900 dark:text-white text-sm font-semibold'
        }
    }
};
export const headerLinks = styles;
