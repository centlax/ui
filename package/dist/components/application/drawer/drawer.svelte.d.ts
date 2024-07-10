import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
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
        open?: boolean;
        override?: false;
        role?: "dialog" | "alertdialog" | undefined;
        scroll?: boolean;
        outside?: boolean;
        portal?: import("@melt-ui/svelte/internal/actions").PortalConfig | null;
        visible?: boolean;
        transition?: {
            content?: import("svelte/transition").FlyParams;
            overlay?: import("svelte/transition").FadeParams;
        };
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
    exports?: undefined;
    bindings?: undefined;
};
export type DrawerProps = typeof __propDef.props;
export type DrawerEvents = typeof __propDef.events;
export type DrawerSlots = typeof __propDef.slots;
export default class Drawer extends SvelteComponent<DrawerProps, DrawerEvents, DrawerSlots> {
    get toggle(): () => void;
}
export {};
