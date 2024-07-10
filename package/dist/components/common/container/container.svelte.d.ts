import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | import("../../../index.js").DeepStyles<{
            root: {
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
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export type ContainerProps = typeof __propDef.props;
export type ContainerEvents = typeof __propDef.events;
export type ContainerSlots = typeof __propDef.slots;
export default class Container extends SvelteComponent<ContainerProps, ContainerEvents, ContainerSlots> {
}
export {};
