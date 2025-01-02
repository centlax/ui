import { fade, fly, type TransitionConfig } from 'svelte/transition';

type InOut<T> = T | { in?: T; out?: T };

export type Transition = (node: Element, params?: any) => TransitionConfig;

// Apply `InOut` recursively to all properties of an object type
export type TransitionParams<T> = {
	[K in keyof T]: T[K] extends object ? TransitionParams<T[K]> : InOut<T[K]>;
};

export type TransitionProps<T extends Transition = Transition, P = Parameters<T>[1]> = {
	[K in keyof P]: P[K] extends object ? TransitionParams<P[K]> : InOut<P[K]>;
};
