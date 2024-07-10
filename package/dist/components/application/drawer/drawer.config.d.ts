import type { DeepStyles } from '../../../types/utility.js';
import { type CreateDialogProps } from '@melt-ui/svelte';
import type { FadeParams, FlyParams } from 'svelte/transition';
export declare const props: {
    class: string | DeepStyles<typeof drawer>;
    override: false;
    open: boolean;
    role: CreateDialogProps["role"];
    scroll: boolean;
    outside: boolean;
    visible: boolean;
    portal: CreateDialogProps["portal"];
    transition: {
        content?: FlyParams;
        overlay?: FadeParams;
    };
};
export declare const drawer: {
    root: {};
    overlay: {
        layout: string;
        background: string;
    };
    trigger: {
        flex: string;
        sizing: string;
    };
    content: {
        layout: string;
    };
};
