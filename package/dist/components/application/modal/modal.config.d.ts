import type { FlyAndScaleParams } from '../../../theme/motion/fly-scale.js';
import type { DeepStyles } from '../../../types/utility.js';
import type { CreateDialogProps } from '@melt-ui/svelte';
export declare const props: {
    class: string | DeepStyles<typeof modal>;
    override: false;
    open: boolean;
    role: CreateDialogProps["role"];
    scroll: boolean;
    close: {
        outsie: boolean | undefined;
    };
    portal: CreateDialogProps["portal"];
    visible: boolean;
    motion: FlyAndScaleParams;
};
export declare const modal: {
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
