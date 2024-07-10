/** Imports */
import type { DeepStyles, Size } from '../../../types/index.js';
export declare const input: {
    wrapper: {
        layout: string;
    };
    root: {
        layout: string;
        sizing: string;
        interactive: string;
        effect: string;
        typography: string;
        background: string;
        border: string;
    };
    west: {
        layout: string;
        flex: string;
        interactive: string;
    };
    east: {
        layout: string;
        flex: string;
        interactive: string;
    };
    opt: {
        size: {
            xs: {
                typography: string;
                spacing: string;
                border: string;
                side: {
                    spacing: string;
                };
            };
            sm: {
                typography: string;
                spacing: string;
                border: string;
                side: {
                    spacing: string;
                };
            };
            md: {
                typography: string;
                spacing: string;
                border: string;
                side: {
                    spacing: string;
                };
            };
            lg: {
                typography: string;
                spacing: string;
                border: string;
                side: {
                    spacing: string;
                };
            };
            xl: {
                typography: string;
                spacing: string;
                border: string;
                side: {
                    spacing: string;
                };
            };
        };
    };
};
/** Props */
export declare const props: {
    class: string | DeepStyles<typeof input>;
    override: false;
    size: Size;
    icon: string | {
        west?: string;
        east?: string;
    };
    loading: boolean;
};
