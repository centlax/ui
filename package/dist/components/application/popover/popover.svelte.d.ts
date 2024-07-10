import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        class?: string | import("../../../index.js").DeepStyles<{
            overlay: {
                layout: string;
                background: string;
            };
            trigger: {
                flex: string;
                sizing: string;
            };
            arrow: {};
            content: {
                layout: string;
            };
        }>;
        open?: boolean;
        override?: false;
        float?: import("@melt-ui/svelte/internal/actions").FloatingConfig | undefined;
        scroll?: boolean;
        overlay?: boolean;
        visible?: boolean;
        trap?: boolean;
        arrow?: number;
        pointer?: boolean;
        portal?: import("@melt-ui/svelte/internal/actions").PortalConfig | null;
        transition?: import("svelte/transition").FadeParams;
        toggle?: () => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        trigger: {};
        open: {};
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type PopoverProps = typeof __propDef.props;
export type PopoverEvents = typeof __propDef.events;
export type PopoverSlots = typeof __propDef.slots;
export default class Popover extends SvelteComponent<PopoverProps, PopoverEvents, PopoverSlots> {
    get toggle(): () => void;
}
export {};
