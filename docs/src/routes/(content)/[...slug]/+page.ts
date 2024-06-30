import { error, redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types.js';
import type { DocResolver } from '$lib/types/docs.js';
import { components } from '$lib/config/imports/components.js';

function findSlug(slugs: string[]): string | undefined {
	if (slugs.length < 2) {
		throw error(404, `Invalid path, it must start with 'components' or 'start', not found`);
	}

	const type = slugs[0];
	const slugStart = slugs.slice(1).join('/');

	if (type === 'start') {
		return `/src/content/start/${slugStart}.md`;
	} else if (type === 'components') {
		const component = slugs[slugs.length - 1] as keyof typeof components;
		if (!components[component]) {
			throw error(404, `Component for slug ${component} not found`);
		}
		return components[component].path;
	} else {
		return undefined;
	}
}

export const load: PageLoad = async (event) => {
	if (event.params.slug === 'components') {
		redirect(303, '/components/accordion');
	} else if (event.params.slug === 'start') {
		redirect(303, '/start/introduction');
	}

	const slugs: string[] = event.params.slug.split('/');
	const slug = findSlug(slugs);

	const modules = import.meta.glob(`/src/content/**/*.md`);
	let match: { path?: string; resolver?: DocResolver } = {};

	if (slug) {
		for (const [path, resolver] of Object.entries(modules)) {
			if (path === slug) {
				match = { path, resolver: resolver as unknown as DocResolver };
				break;
			}
		}
	}

	const doc = await match?.resolver?.();
	if (!match.path || !doc || !doc.metadata) {
		throw error(404, `Component for slug ${event.params.slug} not found`);
	}

	return {
		component: doc.default,
		metadata: doc.metadata,
		title: doc.metadata.title
	};
};
