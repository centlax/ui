import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        class?: string | import("../../../index.js").DeepStyles<{
            root: {
                layout: string;
                border: string;
            };
            opt: {
                size: {
                    xs: {
                        sizing: string;
                    };
                    sm: {
                        sizing: string;
                    };
                    md: {
                        sizing: string;
                    };
                    lg: {
                        sizing: string;
                    };
                    xl: {
                        sizing: string;
                    };
                };
            };
            img: {};
            fallback: {};
        }>;
        override?: false;
        src?: string;
        alt?: string;
        text?: string;
        size?: "xs" | "sm" | "md" | "lg" | "xl";
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type AvatarProps = typeof __propDef.props;
export type AvatarEvents = typeof __propDef.events;
export type AvatarSlots = typeof __propDef.slots;
export default class Avatar extends SvelteComponent<AvatarProps, AvatarEvents, AvatarSlots> {
}
export {};
