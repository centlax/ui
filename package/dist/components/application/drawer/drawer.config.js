import {} from '@melt-ui/svelte';
export const props = {
    class: {},
    override: false,
    open: false,
    role: 'dialog',
    scroll: true,
    outside: true,
    visible: true,
    portal: 'body',
    transition: {
        content: { x: 350, duration: 300, opacity: 1 },
        overlay: { duration: 150 }
    }
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
        layout: 'fixed right-0 top-0 z-50 '
    }
};
export const drawer = styles;
