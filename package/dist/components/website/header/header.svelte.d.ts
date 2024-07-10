import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        override?: boolean;
        links?: any;
        open?: any;
        name?: any;
        href?: any;
        toggle?: () => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        logo: {};
        buttons: {};
        menu: {
            open: any;
        };
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type HeaderProps = typeof __propDef.props;
export type HeaderEvents = typeof __propDef.events;
export type HeaderSlots = typeof __propDef.slots;
export default class Header extends SvelteComponent<HeaderProps, HeaderEvents, HeaderSlots> {
    get toggle(): () => void;
}
export {};
