import { defineConfig } from 'mdsx';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkCapitalize from 'remark-capitalize';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeToc from 'rehype-toc';
import { rehypeCustomHighlight } from '@mdsx/rehype-custom-highlighter';
import { getHighlighter } from 'shiki';

/** @type {import('@mdsx/rehype-custom-highlighter').HighlightOptions} */
const customHighlightOptions = {
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
		})
};

export const mdsxConfig = defineConfig({
	extensions: ['.md'],
	remarkPlugins: [remarkGfm],
	rehypePlugins: [rehypeSlug, [rehypeCustomHighlight, customHighlightOptions]],
	blueprints: {
		default: {
			rehypePlugins: [rehypePrettyCode],
			path: 'src/lib/blueprints/default.svelte'
		},
		component: {
			remarkPlugins: [remarkCapitalize],
			rehypePlugins: [rehypeToc],
			path: 'src/lib/blueprints/component.svelte'
		}
	}
});
