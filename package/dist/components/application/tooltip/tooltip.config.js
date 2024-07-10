import {} from '@melt-ui/svelte';
export const props = {
    class: {},
    override: false,
    open: false,
    float: { placement: 'bottom' },
    arrow: 0,
    pointer: true,
    transition: { duration: 100 },
    visible: false,
    portal: 'body',
    delay: { open: 100, close: 200 },
    hover: false,
    group: false
};
const styles = {
    trigger: {
        flex: 'inline-flex',
        sizing: 'w-fit'
    },
    arrow: {},
    content: {
        layout: 'z-10'
    }
};
export const tooltip = styles;
