import {} from '@melt-ui/svelte';
import {} from 'svelte/transition';
export const props = {
    class: {},
    override: false,
    open: false,
    float: { placement: 'top' },
    scroll: false,
    overlay: false,
    visible: true,
    trap: false,
    arrow: 0,
    pointer: true,
    portal: 'body',
    transition: { duration: 100 }
};
const styles = {
    overlay: {
        layout: 'fixed inset-0 z-50',
        background: 'bg-black/50'
    },
    trigger: {
        flex: 'inline-flex',
        sizing: 'w-fit'
    },
    arrow: {},
    content: {
        layout: 'z-50'
    }
};
export const popover = styles;
