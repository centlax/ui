import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types.js';
import type { DocResolver } from '$lib/types/docs.js';

export const load: PageLoad = async (event) => {
	const slug = event.params.slug;
	const modules = import.meta.glob(`/src/content/start/**/*.md`);

	let match: { path?: string; resolver?: DocResolver } = {};

	for (const [path, resolver] of Object.entries(modules)) {
		if (path.endsWith(`${slug}.md`)) {
			match = { path, resolver: resolver as unknown as DocResolver };
			break;
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
