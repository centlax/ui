import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        class?: string | import("../../../index.js").DeepStyles<{
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
        arrow?: number;
        pointer?: boolean;
        transition?: import("svelte/transition").FadeParams;
        visible?: boolean;
        portal?: import("@melt-ui/svelte/internal/actions").PortalConfig | null;
        delay?: {
            open: number | undefined;
            close: number | undefined;
        };
        hover?: boolean;
        group?: boolean;
        toggle?: () => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        trigger: {
            open: boolean;
        };
        open: {
            open: boolean;
        };
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type TooltipProps = typeof __propDef.props;
export type TooltipEvents = typeof __propDef.events;
export type TooltipSlots = typeof __propDef.slots;
export default class Tooltip extends SvelteComponent<TooltipProps, TooltipEvents, TooltipSlots> {
    get toggle(): () => void;
}
export {};
