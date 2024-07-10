import type { Link } from '../../../types/link.js';
import type { DeepStyles } from '../../../types/utility.js';
export declare const props: {
    class: string | DeepStyles<typeof headerLinks>;
    override: false;
    vertical: boolean;
    links: Link[];
};
export declare const headerLinks: {
    root: {};
    opt: {
        mode: {
            horizontal: {
                flex: string;
            };
            vertical: {
                flex: string;
            };
        };
    };
    list: {
        interactive: string;
        ancor: {
            typography: string;
        };
    };
};
