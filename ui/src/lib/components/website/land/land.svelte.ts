import { getContext, setContext, type Snippet } from 'svelte';
import type { XSiteLayout } from './elements/layout.js';

type Params = {
	elements?: {};
	snippets?: {
		logo?: Snippet;
	};
};

const key = Symbol('site');
export const ctxSiteKey = Symbol('site');
export function useSite(opts?: { layout?: XSiteLayout }, ctx: boolean = false) {
	let params = $state<Params>()!;

	function createSite() {
		$effect.pre(() => {
			if (opts && opts.layout) {
				params = {
					snippets: {
						logo: opts.layout.logo
					}
				};
			}
		});
		return params;
	}

	function set() {
		const site = createSite();
		setContext(key, site);
		return site;
	}

	function get() {
		return getContext<ReturnType<typeof createSite>>(key);
	}

	return ctx ? set() : get();
}
