import { defineConfig } from 'mdsx';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import { getHighlighter } from 'shiki';
import rehypeSlug from 'rehype-slug';

/** @type {import('@mdsx/rehype-custom-highlighter').HighlightOptions} */
const prettyCodeOptions = {
	getHighlighter: (options) =>
		getHighlighter({
			...options,
			langs: [
				'plaintext',
				import('shiki/langs/javascript.mjs'),
				import('shiki/langs/typescript.mjs'),
				import('shiki/langs/css.mjs'),
				import('shiki/langs/svelte.mjs'),
				import('shiki/langs/shellscript.mjs'),
				import('shiki/langs/markdown.mjs')
			]
		}),
	keepBackground: false,
	onVisitLine(node) {
		if (node.children.length === 0) {
			// @ts-expect-error - we're changing the node type
			node.children = { type: 'text', value: ' ' };
		}
	},
	onVisitHighlightedLine(node) {
		node.properties.className = ['line--highlighted'];
	},
	onVisitHighlightedChars(node) {
		node.properties.className = ['chars--highlighted'];
	}
};

export const mdsxConfig = defineConfig({
	extensions: ['.md'],
	remarkPlugins: [remarkGfm],
	rehypePlugins: [[rehypePrettyCode, prettyCodeOptions], rehypeSlug],
	blueprints: {
		default: {
			path: 'src/lib/md/blueprints/default.svelte'
		}
	}
});
