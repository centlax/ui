import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        class?: string | import("../../../index.js").DeepStyles<{
            root: {};
            overlay: {
                layout: string;
                background: string;
            };
            trigger: {
                flex: string;
                sizing: string;
            };
            content: {
                layout: string;
            };
        }>;
        override?: false;
        open?: boolean;
        role?: "dialog" | "alertdialog" | undefined;
        scroll?: boolean;
        close?: {
            outsie: boolean | undefined;
        };
        portal?: import("@melt-ui/svelte/internal/actions").PortalConfig | null;
        visible?: boolean;
        motion?: import("../../../theme/motion/fly-scale.js").FlyAndScaleParams;
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
export type ModalProps = typeof __propDef.props;
export type ModalEvents = typeof __propDef.events;
export type ModalSlots = typeof __propDef.slots;
export default class Modal extends SvelteComponent<ModalProps, ModalEvents, ModalSlots> {
    get toggle(): () => void;
}
export {};
