import { toggleMode as toggle, setMode as set } from 'mode-watcher';
export declare function useDark(): {
    system: {
        subscribe: (this: void, run: import("svelte/store").Subscriber<"dark" | "light" | undefined>, invalidate?: import("svelte/store").Invalidator<"dark" | "light" | undefined> | undefined) => import("svelte/store").Unsubscriber;
        query: () => void;
        tracking: (active: boolean) => void;
    };
    mode: {
        subscribe: (this: void, run: import("svelte/store").Subscriber<"dark" | "light" | undefined>, invalidate?: import("svelte/store").Invalidator<"dark" | "light" | undefined> | undefined) => import("svelte/store").Unsubscriber;
    };
    user: {
        subscribe: (this: void, run: import("svelte/store").Subscriber<"dark" | "light" | "system">, invalidate?: import("svelte/store").Invalidator<"dark" | "light" | "system"> | undefined) => import("svelte/store").Unsubscriber;
        set: (v: import("mode-watcher/dist/types").Mode) => void;
    };
    toggle: typeof toggle;
    set: typeof set;
};
