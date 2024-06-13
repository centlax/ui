import { defineConfig } from 'mdsx';
//import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkCapitalize from 'remark-capitalize';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeToc from 'rehype-toc';
//import { rehypeCustomHighlight } from '@mdsx/rehype-custom-highlighter';
import { getHighlighter } from 'shiki';

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
	keepBackground: false
};

export const mdsxConfig = defineConfig({
	extensions: ['.md'],
	remarkPlugins: [remarkGfm],
	rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
	blueprints: {
		default: {
			remarkPlugins: [remarkCapitalize],
			rehypePlugins: [rehypePrettyCode, rehypeToc],
			path: 'src/lib/components/markdown/blueprints/default.svelte'
		}
	}
});
