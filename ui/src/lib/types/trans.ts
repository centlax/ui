import type { TransitionConfig } from 'svelte/transition';

type Transition = (node: Element, params?: any) => TransitionConfig;
type TransitionParams<T extends Transition> = Parameters<T>[1];

type TransitionProps<
	T extends Transition = Transition,
	In extends Transition = Transition,
	Out extends Transition = Transition
> = Expand<{
	/**
	 * A transition function to use during both the in and out transitions.
	 */
	/**
	 * The configuration to pass to the `transition` function.
	 */
	'*transition'?: { func?: T; params?: TransitionParams<T> };

	/**
	 * A transition function to use during the in transition.
	 *
	 * If provided, this will override the `transition` function.
	 */
	'*in'?: { func?: In; params?: TransitionParams<In> };

	/**
	 * A transition function to use during the in transition.
	 *
	 * If provided, this will override the `transition` function.
	 */
	'*out'?: { func?: Out; params?: TransitionParams<Out> };
}>;
