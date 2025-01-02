import { fade, fly, type TransitionConfig } from 'svelte/transition';

// Define a transition type
export type Transition = (node: Element, params?: any) => TransitionConfig;

export type TransitionParams<T extends Transition> = Parameters<T>[1];

// Define a union type for single or split (in/out) transitions
export type TransitionOptions<T extends Transition = Transition> =
	| { func: T; params?: TransitionParams<T> } // Single transition
	| {
			in?: { func: T; params?: TransitionParams<T> }; // Separate in transition
			out?: { func: T; params?: TransitionParams<T> }; // Separate out transition
	  };
