/** Styles */
const styles = {
    root: {
        layout: 'inline-flex',
        flex: 'items-center gap-x-1.5',
        border: 'rounded-full ring-1 ring-inset ring-color-500/30 dark:ring-color-500/10',
        background: 'bg-color-50 dark:bg-color-950',
        spacing: 'px-2 py-1',
        typography: 'text-xs font-medium text-color-500'
    },
    dot: {
        sizing: 'size-1.5',
        border: 'rounded-full',
        background: 'bg-color-500'
    }
};
export const badge = styles;
/** Props */
export const props = {
    class: {},
    override: false,
    color: 'primary',
    dot: false
};
