import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | import("../../../index.js").DeepStyles<{
            root: {
                layout: string;
                background: string;
                border: string;
                effect: string;
            };
            north: {
                spacing: string;
            };
            center: {
                spacing: string;
            };
            south: {
                spacing: string;
            };
        }>;
        override?: false;
        as?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        north: {};
        default: {};
        south: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type CardProps = typeof __propDef.props;
export type CardEvents = typeof __propDef.events;
export type CardSlots = typeof __propDef.slots;
export default class Card extends SvelteComponent<CardProps, CardEvents, CardSlots> {
}
export {};
