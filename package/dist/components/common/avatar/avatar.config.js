import {} from '@melt-ui/svelte';
export const props = {
    class: {},
    override: false,
    src: '',
    alt: '',
    name: '',
    size: 'md'
};
const styles = {
    root: {
        layout: 'relative inline-block overflow-hidden',
        border: 'rounded-full'
    },
    opt: {
        size: {
            xs: { sizing: 'size-6' },
            sm: { sizing: 'size-8' },
            md: { sizing: 'size-10' },
            lg: { sizing: 'size-12' },
            xl: { sizing: 'size-14' }
        }
    },
    img: {},
    fallback: {}
};
export const avatar = styles;
