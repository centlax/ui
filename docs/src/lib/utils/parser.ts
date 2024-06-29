import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import rehypePrettyCode from 'rehype-pretty-code';

export const parseMD = async (markdownContent: string | Promise<string>) => {
	const unified = await import('unified');
	const result = await unified
		.unified()
		.use(rehypeParse, { emitParseErrors: true, fragment: true })
		.use(rehypePrettyCode, {
			keepBackground: false
		})
		.use(rehypeStringify)
		.process(markdownContent as string);

	return result.toString();
};
