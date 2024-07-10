import type { UAccordion } from '../../../config/imports/components.js';
import type { DeepStyles } from '../../../types/index.js';
import type { ComponentProps } from 'svelte';
export declare const props: {
    /** Accordion Props */
    links: ComponentProps<UAccordion>["links"];
    value: ComponentProps<UAccordion>["value"];
    multiple: boolean;
    disabled: boolean;
    visible: boolean;
    /** Extended Props */
    class: string | DeepStyles<typeof styles>;
    override: false;
};
declare const styles: {
    /** Accordion Styles */
    accordion: {
        root: {
            sizing: string;
            spacing: string;
        };
        item: {
            flex: string;
            trigger: {
                layout: string;
                flex: string;
                typography: string;
                sizing: string;
                border: string;
                spacing: string;
                first: {};
            };
            content: {
                typography: string;
            };
        };
    };
    /** Extended Styles */
    trigger: {
        icon: {
            sizing: string;
        };
        chevron: {
            sizing: string;
            spacing: string;
            typography: string;
            svg: string;
            motion: string;
        };
    };
    content: {
        nav: {
            spacing: string;
            border: string;
            ancor: {
                flex: string;
                typography: string;
                border: string;
            };
        };
    };
};
export declare const asideLinks: {
    /** Accordion Styles */
    accordion: {
        root: {
            sizing: string;
            spacing: string;
        };
        item: {
            flex: string;
            trigger: {
                layout: string;
                flex: string;
                typography: string;
                sizing: string;
                border: string;
                spacing: string;
                first: {};
            };
            content: {
                typography: string;
            };
        };
    };
    /** Extended Styles */
    trigger: {
        icon: {
            sizing: string;
        };
        chevron: {
            sizing: string;
            spacing: string;
            typography: string;
            svg: string;
            motion: string;
        };
    };
    content: {
        nav: {
            spacing: string;
            border: string;
            ancor: {
                flex: string;
                typography: string;
                border: string;
            };
        };
    };
};
export {};
