import type { DeepStyles } from '$lib/types/ui.js';
import type { WithoutChild } from 'bits-ui';

export interface BaseProps<T> {
	class?: string | DeepStyles<T>;
	override?: boolean;
}

export interface MainProps<T> extends BaseProps<T> {
	as?: keyof HTMLElementTagNameMap;
	attrs?: object;
}

type WithoutRef<T> = T extends {
	ref?: any;
}
	? Omit<T, 'ref'>
	: T;

export type OmitBit<T> = WithoutChild<WithoutRef<T>>;
