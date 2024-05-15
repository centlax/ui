import { twJoin } from 'tailwind-merge';
import { config } from '$lib/ui.config.js';
import type { DeepPartial } from '$lib/types/index.js';

type Styles = Record<string, string | Record<string, unknown>>;

export function useUI<T extends Styles>(
	styles: T,
	oclass: string | DeepPartial<T>
): { css: T; classer: string } {
	const css: T = { ...styles } as T;
	if (typeof oclass === 'object') {
		for (const key in oclass) {
			if (oclass.hasOwnProperty(key)) {
				const styleser = styles[key];
				const oclasser = oclass[key];

				if (typeof styleser === 'object' && typeof oclasser === 'object') {
					// @ts-ignore
					css[key] = useUI(styleser as Styles, oclasser as DeepPartial<Styles>).css;
				} else if (typeof styleser === 'string' && typeof oclasser === 'string') {
					if (config.strategy.override === 'fully') {
						// @ts-ignore
						css[key] = oclasser;
					} else if (config.strategy.override === 'merge') {
						// @ts-ignore
						css[key] = twJoin(styleser, oclasser);
					}
				}
			}
		}
	}
	let classer = typeof oclass === 'string' ? oclass : '';
	return { css, classer };
}
