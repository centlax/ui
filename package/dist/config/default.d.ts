import * as components from './imports/props.js';
export declare const config: {
    props: {
        override: boolean;
        size: "xs" | "sm" | "md" | "lg" | "xl";
    };
    colors: {
        primary: string;
        gray: string;
        success: string;
        warning: string;
        danger: string;
        mask: readonly ["red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose", "primary", "success", "warning", "danger"];
        base: readonly ["slate", "cool", "zinc", "neutral", "stone"];
    };
    icons: {
        dark: string;
        light: string;
        load: string;
        search: string;
        external: string;
        chevron: string;
        hash: string;
        menu: string;
        close: string;
        check: string;
    };
    components: typeof components;
};
