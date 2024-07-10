import type { DeepStyles } from '../../../types/utility.js';
export declare const props: {
    class: string | DeepStyles<typeof card>;
    override: false;
    as: string;
};
export declare const card: {
    root: {
        layout: string;
        background: string;
        border: string;
        effect: string;
    };
    north: {
        spacing: string;
    };
    center: {
        spacing: string;
    };
    south: {
        spacing: string;
    };
};
