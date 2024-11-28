type InOut<T> = T | { in?: T; out?: T };

// Apply `InOut` recursively to all properties of an object type
export type TransitionParams<T> = {
	[K in keyof T]: T[K] extends object ? TransitionParams<T[K]> : InOut<T[K]>;
};
