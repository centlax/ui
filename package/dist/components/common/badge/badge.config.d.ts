/** Imports */
import type { Colors } from '../../../types/index.js';
import type { DeepStyles } from '../../../types/utility.js';
export declare const badge: {
    root: {
        layout: string;
        flex: string;
        border: string;
        background: string;
        spacing: string;
        typography: string;
    };
    dot: {
        sizing: string;
        border: string;
        background: string;
    };
};
/** Props */
export declare const props: {
    class: string | DeepStyles<typeof badge>;
    override: false;
    color: Colors["mask"] | Colors["base"];
    dot: boolean;
};
