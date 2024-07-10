import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        override?: false;
        links?: import("../../../index.js").Link[];
        vertical?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type LinksProps = typeof __propDef.props;
export type LinksEvents = typeof __propDef.events;
export type LinksSlots = typeof __propDef.slots;
export default class Links extends SvelteComponent<LinksProps, LinksEvents, LinksSlots> {
}
export {};
