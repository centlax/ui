import type { DeepStyles } from '../../../types/utility.js';
import { type CreatePopoverProps } from '@melt-ui/svelte';
import { type FadeParams } from 'svelte/transition';
export declare const props: {
    class: string | DeepStyles<typeof popover>;
    override: false;
    open: boolean;
    float: CreatePopoverProps["positioning"];
    scroll: boolean;
    overlay: boolean;
    visible: boolean;
    trap: boolean;
    arrow: number;
    pointer: boolean;
    portal: CreatePopoverProps["portal"];
    transition: FadeParams;
};
export declare const popover: {
    overlay: {
        layout: string;
        background: string;
    };
    trigger: {
        flex: string;
        sizing: string;
    };
    arrow: {};
    content: {
        layout: string;
    };
};
