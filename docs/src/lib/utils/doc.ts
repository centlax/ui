import { error } from '@sveltejs/kit';
import type { DocResolver } from '$lib/types/docs';

export function slugFromPath(path: string) {
	return path.replace('/src/content/', '').replace('.md', '');
}

type Modules = Record<string, () => Promise<unknown>>;
function findMatch(slug: string, modules: Modules) {
	let match: { path?: string; resolver?: DocResolver } = {};

	for (const [path, resolver] of Object.entries(modules)) {
		//  console.log(slugFromPath(path), '===', `components/${slug}`)
		if (slugFromPath(path) === `components/${slug}`) {
			match = { path, resolver: resolver as unknown as DocResolver };
			break;
		}
	}
	if (!match.path) {
		match = getIndexDocIfExists(slug, modules);
	}
	//console.log(match)

	return match;
}
function getIndexDocIfExists(slug: string, modules: Modules) {
	let match: { path?: string; resolver?: DocResolver } = {};

	for (const [path, resolver] of Object.entries(modules)) {
		if (path.includes(`/${slug}/index.md`)) {
			match = { path, resolver: resolver as unknown as DocResolver };
			break;
		}
	}

	return match;
}

export async function getDoc(slug: string) {
	const modules = import.meta.glob(`/src/content/**/*.md`);
	const match = findMatch(slug, modules);
	const doc = await match?.resolver?.();

	if (!doc || !doc.metadata) {
		error(404);
	}
	return {
		component: doc.default,
		metadata: doc.metadata,
		title: doc.metadata.title
	};
}
