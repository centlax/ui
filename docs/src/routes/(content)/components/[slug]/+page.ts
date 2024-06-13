import { error, redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types.js';
import type { DocResolver } from '$lib/types/docs.js';
import { components } from '$lib/config/imports/components.js';

export const load: PageLoad = async (event) => {
	if (event.params.slug === 'components') {
		throw redirect(303, '/components/accordion');
	}

	const slug = event.params.slug as keyof typeof components;
	const modules = import.meta.glob(`/src/content/components/**/*.md`);

	let match: { path?: string; resolver?: DocResolver } = {};
	if (components[slug]) {
		for (const [path, resolver] of Object.entries(modules)) {
			if (path === components[slug].path) {
				match = { path, resolver: resolver as unknown as DocResolver };
				break;
			}
		}
	}

	// Dynamically import the matched module
	const doc = await match?.resolver?.();
	if (!match.path || !doc || !doc.metadata) {
		error(404, `Component for slug ${event.params.slug} not found`);
	}

	return {
		component: doc.default,
		metadata: doc.metadata,
		title: doc.metadata.title
	};
};
