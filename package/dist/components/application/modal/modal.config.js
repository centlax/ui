export const props = {
    class: {},
    override: false,
    open: false,
    role: 'dialog',
    scroll: true,
    close: { outsie: true },
    portal: 'body',
    visible: false,
    motion: { duration: 200, y: 8, start: 0.96 }
};
const styles = {
    root: {},
    overlay: {
        layout: 'fixed inset-0 z-50',
        background: 'bg-black/50'
    },
    trigger: {
        flex: 'inline-flex',
        sizing: 'w-fit'
    },
    content: {
        layout: 'fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2'
    }
};
export const modal = styles;
