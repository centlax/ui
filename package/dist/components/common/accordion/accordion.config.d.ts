import type { DeepStyles, Link } from '../../../types/index.js';
interface AccordionLink extends Link {
    id: string;
}
export declare const props: {
    class: string | DeepStyles<typeof styles>;
    override: false;
    links: AccordionLink[];
    multiple: boolean;
    disabled: boolean;
    visible: boolean;
    value: string | string[] | undefined;
};
declare const styles: {
    root: {};
    item: {
        motion: string;
        trigger: {
            motion: string;
            first: {};
        };
        content: {
            layout: string;
        };
    };
};
export declare const accordion: {
    root: {};
    item: {
        motion: string;
        trigger: {
            motion: string;
            first: {};
        };
        content: {
            layout: string;
        };
    };
};
export {};
