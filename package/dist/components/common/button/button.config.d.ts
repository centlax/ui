import type { DeepStyles, Colors } from '../../../types/index.js';
type ButtonColor = keyof typeof styles.opt.variant.solid;
type ButtonVariant = keyof typeof styles.opt.variant;
export declare const props: {
    class: string | DeepStyles<typeof button>;
    override: false;
    loading: boolean;
    disabled: boolean;
    href: string;
    label: string;
    color: Colors["mask"] | Exclude<ButtonColor, "color">;
    variant: ButtonVariant;
    size: keyof typeof button.opt.size;
};
declare const styles: {
    root: {
        flex: string;
        border: string;
        effect: string;
        interactive: string;
        typography: string;
    };
    opt: {
        size: {
            xs: {
                flex: string;
                typography: string;
                spacing: string;
                border: string;
            };
            sm: {
                flex: string;
                typography: string;
                spacing: string;
                border: string;
            };
            md: {
                flex: string;
                typography: string;
                spacing: string;
                border: string;
            };
            lg: {
                flex: string;
                typography: string;
                spacing: string;
                border: string;
            };
            xl: {
                flex: string;
                typography: string;
                spacing: string;
                border: string;
            };
        };
        variant: {
            solid: {
                color: {
                    background: string;
                    border: string;
                    typography: string;
                    effect: string;
                };
                'black-white': {
                    background: string;
                    border: string;
                    typography: string;
                    effect: string;
                };
            };
        };
    };
};
export declare const button: {
    root: {
        flex: string;
        border: string;
        effect: string;
        interactive: string;
        typography: string;
    };
    opt: {
        size: {
            xs: {
                flex: string;
                typography: string;
                spacing: string;
                border: string;
            };
            sm: {
                flex: string;
                typography: string;
                spacing: string;
                border: string;
            };
            md: {
                flex: string;
                typography: string;
                spacing: string;
                border: string;
            };
            lg: {
                flex: string;
                typography: string;
                spacing: string;
                border: string;
            };
            xl: {
                flex: string;
                typography: string;
                spacing: string;
                border: string;
            };
        };
        variant: {
            solid: {
                color: {
                    background: string;
                    border: string;
                    typography: string;
                    effect: string;
                };
                'black-white': {
                    background: string;
                    border: string;
                    typography: string;
                    effect: string;
                };
            };
        };
    };
};
export {};
