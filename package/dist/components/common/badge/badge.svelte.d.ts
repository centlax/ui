import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        class?: string | import("../../../index.js").DeepStyles<{
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
        }>;
        override?: false;
        color?: "primary" | "sky" | "cool" | "green" | "yellow" | "red" | "orange" | "amber" | "lime" | "emerald" | "teal" | "cyan" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | "success" | "warning" | "danger" | "slate" | "zinc" | "neutral" | "stone";
        dot?: boolean;
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
export type BadgeProps = typeof __propDef.props;
export type BadgeEvents = typeof __propDef.events;
export type BadgeSlots = typeof __propDef.slots;
export default class Badge extends SvelteComponent<BadgeProps, BadgeEvents, BadgeSlots> {
}
export {};
