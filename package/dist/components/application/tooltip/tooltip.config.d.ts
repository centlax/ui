import type { DeepStyles } from '../../../types/utility.js';
import { type CreatePopoverProps } from '@melt-ui/svelte';
import type { FadeParams } from 'svelte/transition';
export declare const props: {
    class: string | DeepStyles<typeof styles>;
    override: false;
    open: boolean;
    float: CreatePopoverProps["positioning"];
    arrow: number;
    pointer: boolean;
    transition: FadeParams;
    visible: boolean;
    portal: CreatePopoverProps["portal"];
    delay: {
        open: number | undefined;
        close: number | undefined;
    };
    hover: boolean;
    group: string | boolean;
};
declare const styles: {
    trigger: {
        flex: string;
        sizing: string;
    };
    arrow: {};
    content: {
        layout: string;
    };
};
export declare const tooltip: {
    trigger: {
        flex: string;
        sizing: string;
    };
    arrow: {};
    content: {
        layout: string;
    };
};
export {};
