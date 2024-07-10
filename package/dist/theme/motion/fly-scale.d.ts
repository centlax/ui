import type { TransitionConfig } from 'svelte/transition';
export type FlyAndScaleParams = {
    y?: number;
    start?: number;
    duration?: number;
};
export declare function flyAndScale(node: Element, params?: FlyAndScaleParams): TransitionConfig;
