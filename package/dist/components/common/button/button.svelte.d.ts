import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | import("../../../index.js").DeepStyles<{
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
        }>;
        override?: false;
        href?: string;
        loading?: boolean;
        disabled?: boolean;
        label?: string;
        color?: "primary" | "sky" | "green" | "yellow" | "red" | "orange" | "amber" | "lime" | "emerald" | "teal" | "cyan" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | "success" | "warning" | "danger" | "black-white";
        variant?: "solid";
        size?: "xs" | "sm" | "md" | "lg" | "xl";
    };
    events: {
        click: MouseEvent;
        dblclick: MouseEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type ButtonProps = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponent<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};
