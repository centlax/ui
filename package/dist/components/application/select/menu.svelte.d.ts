import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        class?: string | import("../../../index.js").DeepStyles<{
            root: {
                flex: string;
            };
            trigger: {
                layout: string;
                flex: string;
                sizing: string;
                spacing: string;
                interactive: string;
                border: string;
                background: string;
                typography: string;
                effect: string;
                chevron: {
                    svg: string;
                    sizing: string;
                    motion: string;
                };
            };
            menu: {
                layout: string;
                flex: string;
                background: string;
                sizing: string;
                spacing: string;
                border: string;
                effect: string;
                group: {
                    typography: string;
                };
                option: {
                    layout: string;
                    interactive: string;
                    border: string;
                    spacing: string;
                    typography: string;
                    background: string;
                    effect: string;
                    selected: {
                        layout: string;
                        typography: string;
                        checkmark: {
                            flex: string;
                        };
                    };
                };
            };
        }>;
        override?: false;
        options?: {
            [key: string]: any[];
        };
        placeholder?: string;
        multiple?: boolean;
        visible?: boolean;
        float?: import("@melt-ui/svelte/internal/actions").FloatingConfig | undefined;
        required?: boolean;
        disabled?: boolean;
        arrow?: number;
        scroll?: boolean;
        loop?: boolean;
        portal?: import("@melt-ui/svelte/internal/actions").PortalConfig | null;
        open?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type MenuProps = typeof __propDef.props;
export type MenuEvents = typeof __propDef.events;
export type MenuSlots = typeof __propDef.slots;
export default class Menu extends SvelteComponent<MenuProps, MenuEvents, MenuSlots> {
}
export {};
